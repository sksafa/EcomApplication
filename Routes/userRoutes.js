const express = require("express");
const { loginController, registerController, PassResetController } = require('../controller/userCtrl');
// router onject
const router = express.Router()
// login || post
router.post("/login", loginController)
// register || post
router.post("/register", registerController)
// forgot password || post
router.post("/sendpasswordlink", PassResetController)
module.exports = router;