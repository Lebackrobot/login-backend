import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import config from './../config/env.js'
import userService from './../services/userService.js'

// Login
const login = async (req, res) => {
    try {
        const payload = req.body

        if (!payload.username || !payload.password) {
            throw { status: 400, message: 'Login or password are required.' }
        }

        const user = await userService.getUserByUsername(payload.username)

        if (!user) {
            throw { status: 401, message: 'invalid username' }
        }

        if (!bcrypt.compareSync(payload.password, user.password)) {
            throw { status: 401, message: 'Invalid password' }
        }

        const authToken = jwt.sign(user, config.secretKey)
        
        // Retornar o token
        const data = { authToken }
        res.status(200).json({ success: true, data, messsage: 'Success to login' })
    }

    catch (err) {
        console.error(err)
        res.status(err.status || 500).json({ success: false, message: err.message || 'Internal server error' })
    }
}

export default { login }