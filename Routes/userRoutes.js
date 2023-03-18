const express = require("express");
const { loginController, registerController, PassResetController, authController } = require('../controller/userCtrl');
const authMiddleware = require("../middlewares/authMiddleware");
// router onject
const router = express.Router()
// login || post
router.post("/login", loginController)
// register || post
router.post("/register", registerController)
// forgot password || post
router.post("/getUserData", authMiddleware, authController);
router.post("/sendpasswordlink", PassResetController)
module.exports = router;