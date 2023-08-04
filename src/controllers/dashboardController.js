
const example = async (req, res) => {
    const { user } = req

    console.log(user)

    res.status(200).json({ success: true, data: user, message: 'Success to authorization' })
}


export default { example }