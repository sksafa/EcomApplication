const userModel = require('../models/userModels');
const bcrypt = require('bcryptjs');

const registerController = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({ email: req.body.email })
        if (existingUser) {
            return res.status(200).send({ message: 'user Already Exist', success: false })
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        req.body.password = hashedPassword
        const data = await  new userModel(req.body).save()
        res.status(201).send({
            success: true,
            message: 'Register Successfully',
            data
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: `Register controller ${error.message}` })
    }
}
const loginController = () => { }


module.exports = { loginController, registerController };