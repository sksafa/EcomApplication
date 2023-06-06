const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");

const {
  getAllUsersController,
  getAllDoctorsController,
} = require("./../controller/adminCtrl");
const router = express.Router();
// GET METHOD || USERS
router.get("/getAllUsers", authMiddleware, getAllUsersController);
// GET METHOD || DOCTORS
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

module.exports = router;
