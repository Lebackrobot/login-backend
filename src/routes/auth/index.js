import express from 'express'
import jwt from 'jsonwebtoken'
import config from './../../config/env.js'

import dashboardRoute from './dashoboard.js'

const router = express.Router()

// Authorize middleware 
const authenticateToken = async (req, res, next) => {
    try {

        const { authorization } =  req.headers

        if (!authorization ) {
            throw { status: 401, message: 'Token not provided' }
        }

        const userDecoded = jwt.verify(authorization, config.secretKey)
        const { password, ...user } = userDecoded

        req.user = user 
        next()
    }
    
    catch (err) {
        console.error(err)
        res.status(err.status || 500).json({ success: false, message: err.message || 'Internal server error' })
    }
}

// Use authMiddleware
router.use(authenticateToken)

// Add routes
router.use('/dashboard', dashboardRoute)

export default router