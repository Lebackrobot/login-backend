import express from 'express'
import config from './config/env.js'
import cors from 'cors'
import db from './db/connectDb.js'

import authRoutes from './routes/auth/index.js'
import noAuthRoutes from './routes/noauth/index.js'

// Import routes
const app = express()

// Config app
app.use(express.json({ limit: '100mb' }))
app.use(express.urlencoded({ limit: '100mb', extended: true }))
app.use(cors())

// Set server port
app.set('port', config.port)

// Connect to database
db.on('error', err => { console.error(`Connection error ${err}`)})
db.once('open', () => console.log('Success to connect'))

// Routes
app.use('/auth', authRoutes)
app.use('/noauth', noAuthRoutes)

export default app
