import app from './src/app.js'
import config from './src/config/env.js'

// Listen server
app.listen(config.port, async () => {
    console.log(`server listen on port ${config.port} ☕`)
})