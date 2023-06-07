const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDoctorInfoController,
  updateDoctorProfileController,
} = require("../controller/doctorCtrl");
const router = express.Router();

router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);
router.post("/updateProfile", authMiddleware, updateDoctorProfileController);

module.exports = router;
