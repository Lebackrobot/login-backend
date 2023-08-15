
const example = async (req, res) => {
    const { user } = req
    res.status(200).json({ success: true, data: user, message: 'Success to authorization' })
}

export default { example }