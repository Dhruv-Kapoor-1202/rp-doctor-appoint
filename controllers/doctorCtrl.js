// import patientModel from "../models/patientModel.js";
import doctorModel from "../models/doctorModel.js";
import appointmentModel from "../models/appointmentModel.js";

// Get Doctor Infor Controller
export const getDoctorInfoController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({ userId: req.body.userId });
    res.status(200).send({
      success: true,
      message: "Doctor Details Fetched Successfully",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Fetching Doctor Details",
      error,
    });
  }
};

// Update Doctor Profile Controller
export const updateProfileController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOneAndUpdate(
      {
        userId: req.body.userId,
      },
      req.body
    );
    res.status(201).send({
      success: true,
      message: "Doctor Profile Updated Succesfully",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While updatind Doctor Profile",
    });
  }
};

// Get Doctor By ID Controller
export const getDoctorByIdController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({ _id: req.body.doctorId });
    res.status(200).send({
      success: true,
      message: "Doctor Info Fetched Successfully",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Fetching Doctor Info",
      error,
    });
  }
};

// Get Doctor Appointments Controller
export const doctorAppointmentsController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({ userId: req.params.id });
    const appointments = await appointmentModel.find({
      doctorId: doctor.userId,
    });
    res.status(200).send({
      success: true,
      message: "Doctor Appointments fetched successfully",
      data: appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while fetching Doctor Appointments",
      error,
    });
  }
};

// Accept Appointment Controller
export const acceptAppointmentController = async (req, res) => {
  try {
    const appointment = await appointmentModel.findOne({ _id: req.params.id });
    appointment.status = "approved";
    await appointment.save();
    res.status(200).send({
      success: true,
      message: "Appointment Accepted Successfully",
      data: appointment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Accepting. Please try again",
      error,
    });
  }
};

// Reject Appointment Controller
export const rejectAppointmentController = async (req, res) => {
  try {
    await appointmentModel.findOneAndDelete({
      _id: req.params.id,
    });
    res.status(200).send({
      success: true,
      message: "Appointment Rejected Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Rejecting. Please try again",
      error,
    });
  }
};

// Get All Doctors Controller
export const getAllDoctorsController = async (req, res) => {
  try {
    const doctors = await doctorModel.find();
    res.status(200).send({
      success: true,
      message: "Doctor List Fetched Successfully",
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Fetching Doctor list",
      error,
    });
  }
};
