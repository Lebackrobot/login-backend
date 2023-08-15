import express from 'express'
import config from './config/env.js'
import cors from 'cors'
import db from './db/connectDb.js'

// Import routes
import authRoutes from './routes/auth/index.js'
import noAuthRoutes from './routes/noauth/index.js'
import swaggerUi from 'swagger-ui-express'
import swaggerDoc from './docs/swagger.json' assert { type: 'json' }

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

// App routes
app.use('/auth', authRoutes)
app.use('/noauth', noAuthRoutes)


// Swagger documentantion
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))


export default app
