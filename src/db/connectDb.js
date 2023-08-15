import mongoose from 'mongoose'
import config from './../config/env.js'

mongoose.connect(config.db.urlDb).connection

export default mongoose.connection