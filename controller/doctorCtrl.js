const appointmentModel = require("../models/appointmentModel");
const doctorModel = require("../models/doctorModel");

const getDoctorInfoController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({ userId: req.body.userId });
    res.status(200).send({
      success: true,
      message: " success to fetch data.. ",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "failed to get doctors list something wrong..",
      error,
    });
  }
};

const updateDoctorProfileController = async (req, res, next) => {
  try {
    const doctor = await doctorModel.findOneAndUpdate(
      { userId: req.body.userId },
      req.body
    );
    res.status(200).send({
      success: true,
      message: "Doctor Profile Updated...",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "failed to update the doctor profile....",
      error,
    });
  }
};

const getDoctorByIdController = async (req, res) => {
  try {
    // const _id = req.body.doctorId;
    const doctor = await doctorModel.findOne({ _id: req.body.doctorId });
    res.status(200).send({
      success: true,
      message: "Single Doc Info Fetched...",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in single data loading...",
    });
  }
};

const doctorAppointmentController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({ userId: req.body.userId });
    const appointments = await appointmentModel.find({
      doctorId: doctor._id,
    });
    res.status(200).send({
      success: true,
      message: "get appointment successfully",
      data: appointments,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "failed to fetch appointment list",
      error,
    });
    console.log(error);
  }
};

module.exports = {
  getDoctorInfoController,
  updateDoctorProfileController,
  getDoctorByIdController,
  doctorAppointmentController,
};
