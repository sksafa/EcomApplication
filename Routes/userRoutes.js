const express = require("express");
const { loginController,
     registerController, 
     PassResetController,
     applyDoctorController, 
     authController,
     getAllNotificationController,
     } = require('../controller/userCtrl');
const authMiddleware = require("../middlewares/authMiddleware");
// router onject
const router = express.Router()
// login || post
router.post("/login", loginController)
// register || post
router.post("/register", registerController)
// forgot password || post
router.post("/getUserData", authMiddleware, authController);
//APply Doctor || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);
//notification Doctor || get
router.post("/get-all-notification", authMiddleware, getAllNotificationController);
router.post("/sendpasswordlink", PassResetController)
module.exports = router;