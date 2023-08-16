import userModel from './../model/userModel.js'

const getUserByUsername = async (username) => {
    return userModel.findOne({ username }).lean()
}

const createUser = async (obj) => {
    const newUser = new userModel(obj)

    newUser.save({ new: true })

    const { password, ...userWithoutPassword } = newUser.toObject()
    return userWithoutPassword


}


const deleteUser = async (id) => {
    return userModel.deleteOne({ _id: id })
}

export default { getUserByUsername, createUser, deleteUser }