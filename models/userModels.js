const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "first name is required"]
    },
    lastName: {
        type: String,
        required: [true, "last name is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    tokens: [
       {
        token:{
            type:String,
            required: true,
        }
       }
    ],
    verifytoken:{
        type:String,
    }
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel;