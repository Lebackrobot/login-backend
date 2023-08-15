import express from 'express'

// Routes
import loginRouter from './login.js'
import userRouter from './user.js'

const router = express.Router() 

router.use('/login', loginRouter)
router.use('/user', userRouter)

export default router