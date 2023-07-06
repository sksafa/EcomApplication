const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDoctorInfoController,
  updateDoctorProfileController,
  getDoctorByIdController,
  doctorAppointmentController,
} = require("../controller/doctorCtrl");
const router = express.Router();

router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);
router.post("/updateProfile", authMiddleware, updateDoctorProfileController);

router.post("/getDoctorById", authMiddleware, getDoctorByIdController);
router.get("/doctor-appointments", authMiddleware, doctorAppointmentController);
module.exports = router;
