const userModel = require('../models/userModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const doctorModel = require('../models/doctorModel');

// email config
const transportar = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"djshoab@gmail.com",
        pass:"123456789"
    }
})

// secret key
const secretKey = process.env.JWT_SECRET;

const registerController = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({ email: req.body.email })
        if (existingUser) {
            return res
            .status(200)
            .send({ 
                message: 'user Already Exist',
                success: false
            })
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
const loginController = async (req,res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })
        if (!user) {
            return res
            .status(200)
            .send({message:'user not found', success: false});
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if(!isMatch){
            return res
            .status(200)
            .send({message:'Invalid Email or password', success:false});
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET, {expiresIn:'1d'});
        res.status(200).send({
            success: true,
            message:'Login Success',
            token
        });
    } catch (error) {
        console.log(error);
        // res.status(500).send({message: `Error in login CTRL &{error.message}`});
        res.status(500).send({ success: false, message: `error in login  controller ${error.message}` })

    }
 }

 // send link to email for reset password
 const PassResetController = async (req,res) => {
    console.log(req.body);
    const {email} = req.body;
    if (!email) {
        res.status(401).json({status:401,message:"Enter Your Email"})
    }
    try {
        const user = await userModel.findOne({ email:email })
        const token = jwt.sign({_id:user._id},secretKey, {expiresIn:'120s'});

        console.log("token",token);
        const setusertoken = await user.findByIdAndUpdate({_id:user._id},{
          verifytoken: token
        })
        console.log("setusertoken",setusertoken);
    } catch (error) {
        
    }
 }

 // auth controller
 const authController = async (req, res) => {
  try {
    const user = await userModel.findById({ _id: req.body.userId });
    user.password = undefined;
    if (!user) {
      return res.status(200).send({
        message: "user not found",
        success: false,
      });
    } else {
      res.status(200).send({
        success: true,
        data: user,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "auth error",
      success: false,
      error,
    });
  }
};

// APpply DOctor CTRL
const applyDoctorController = async (req, res) => {
  try {
    const newDoctor = await doctorModel({ ...req.body, status: "pending" });
    await newDoctor.save();
    const adminUser = await userModel.findOne({ isAdmin: true });
    const notifcation = adminUser.notifcation;
    notifcation.push({
      type: "apply-doctor-request",
      message: `${newDoctor.firstName} ${newDoctor.lastName} Has Applied For A Doctor Account`,
      data: {
        doctorId: newDoctor._id,
        name: newDoctor.firstName + " " + newDoctor.lastName,
        onClickPath: "/admin/docotrs",
      },
    });
    await userModel.findByIdAndUpdate(adminUser._id, { notifcation });
    res.status(201).send({
      success: true,
      message: "Doctor Account Applied SUccessfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error WHile Applying For Doctotr",
    });
  }
};

//notification ctrl
const getAllNotificationController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    const seennotification = user.seennotification;
    const notifcation = user.notifcation;
    seennotification.push(...notifcation);
    user.notifcation = [];
    user.seennotification = notifcation;
    const updatedUser = await user.save();
    res.status(200).send({
      success: true,
      message: "all notification marked as read",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in notification",
      success: false,
      error,
    });
  }
};

module.exports = { 
   loginController,
   registerController,
   authController,
   applyDoctorController,
   PassResetController,
   getAllNotificationController,
   };