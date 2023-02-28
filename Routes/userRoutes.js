const express = require("express");
const { loginController, registerController } = require('../controller/userCtrl');
// router onject
const router = express.Router()
// login || post
router.post("/login", loginController)
// register || post
router.post("/register", registerController)
module.exports = router;