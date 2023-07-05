const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDoctorInfoController,
  updateDoctorProfileController,
  getDoctorByIdController,
  getDoctorAppointmentController
} = require("../controller/doctorCtrl");
const router = express.Router();

router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);
router.post("/updateProfile", authMiddleware, updateDoctorProfileController);

router.post("/getDoctorById", authMiddleware, getDoctorByIdController);
router.get('/doctor-appointment', authMiddleware, getDoctorAppointmentController)
module.exports = router;
