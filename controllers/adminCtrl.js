import patientModel from "../models/patientModel.js";
import doctorModel from "../models/doctorModel.js";

// Get Single User Controller
export const getUserController = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await patientModel.findById(id);
    // user.password = "";
    res.status(200).send({
      success: true,
      message: "User Fetched Successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while fetching user",
    });
  }
};

// Get All Users Controller
export const getAllUsersController = async (req, res) => {
  try {
    const users = await patientModel.find({});
    res.status(200).send({
      success: true,
      message: "Users List Fetched Successfully",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while fetching all users",
    });
  }
};

// Get All Doctors Controller
export const getAllDoctorsController = async (req, res) => {
  try {
    const doctors = await doctorModel.find({});
    res.status(200).send({
      success: true,
      message: "Doctors List Fetched Successfully",
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while fetching all doctors",
      error,
    });
  }
};

// Approve Doctor Application Controller
export const approveDoctorController = async (req, res) => {
  try {
    const { userId } = req.body;
    const doctor = await doctorModel.findOne({ userId });
    const otherDoctor = await patientModel.findOne({ _id: userId });
    doctor.status = "approved";
    otherDoctor.isDoctor = true;
    await doctor.save();
    await otherDoctor.save();
    res.status(200).send({
      success: true,
      message: "Doctor Application Approved",
      data: [doctor, otherDoctor],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Approval Failed. Please Try Again.",
      error,
    });
  }
};

// Reject Doctor Application Controller
export const rejectDoctorController = async (req, res) => {
  try {
    const { userId } = req.body;
    await doctorModel.findOneAndDelete({ userId });
    const otherDoctor = await patientModel.findOne({ _id: userId });
    otherDoctor.isDoctor = false;
    await otherDoctor.save();
    res.status(200).send({
      success: true,
      message: "Doctor Application Rejected",
      data: [otherDoctor],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Rejection Failed. Please Try Again.",
      error,
    });
  }
};

// TODO: Change Account Status Controller. Figure it out
