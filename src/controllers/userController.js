import userService from './../services/userService.js'
import bcrypt from 'bcrypt'

const createUser = async (req, res) => {
    try {
        const payload = req.body

        if (!payload.username) {
            throw { status: 400, message: 'username is required.' }
        }

        if (!payload.fullname) {
            throw { status: 400, message: 'fullname is required.' }
        }

        if (!payload.password) {
            throw { status: 400, message: 'password is required.' }
        }

        const user = await userService.getUserByUsername(payload.username)
        if (user) {
            throw { status: 409, message: 'username already exists.' }
        }

        payload.password = bcrypt.hashSync(payload.password, 6)

        const newUser = await userService.createUser(payload)

        res.status(200).json({ success: true, data: newUser,  message: 'User created.' })
    }

    catch (err) {
        res.status(err.status || 500).json({ success: false, message: err.message || 'Internal server error. ' })
    }
}

export default { createUser }