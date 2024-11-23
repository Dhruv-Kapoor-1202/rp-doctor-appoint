import patientModel from "../models/patientModel.js";
import doctorModel from "../models/doctorModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import moment from "moment";

// Registration Controller
export const registerController = async (req, res) => {
  try {
    const existingPatient = await patientModel.findOne({
      email: req.body.email,
    });
    if (existingPatient) {
      return res.status(200).send({
        sucess: false,
        message: "Patient Already Exists",
      });
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newPatient = new patientModel(req.body);
    await newPatient.save();
    res.status(200).send({
      success: true,
      message: "Registration Successful",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};

// Login Controller
export const loginController = async (req, res) => {
  try {
    const patient = await patientModel.findOne({ email: req.body.email });
    if (!patient) {
      return res.status(200).send({
        success: false,
        message: "Invalid Email or Password",
      });
    }
    const isMatch = await bcrypt.compare(req.body.password, patient.password);
    if (!isMatch) {
      return res.status(200).send({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const token = jwt.sign({ id: patient._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).send({
      success: true,
      message: "Login Success",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: `Login Controller ${error.message}`,
    });
  }
};

// Auth Controller
export const authController = async (req, res) => {
  try {
    const patient = await patientModel.findById({ _id: req.body.userId });
    patient.password = undefined;
    if (!patient) {
      return res.status(200).send({
        success: false,
        message: "Patient Not Found",
      });
    } else {
      res.status(200).send({
        success: true,
        data: patient,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: `Auth Controller ${error.message}`,
    });
  }
};

// Apply Doctor Controller
export const applyDoctorController = async (req, res) => {
  try {
    const newDoctor = await doctorModel({ ...req.body, status: "pending" });
    await newDoctor.save();
    const adminUser = await patientModel.findOne({ isAdmin: true });
    res.status(201).send({
      success: true,
      message: "Applied for Doctor Account Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while applying for doctor.",
      error,
    });
  }
};

// Get All Doctors
export const getAllDoctorsController = async (req, res) => {
  try {
    const doctors = await doctorModel.find({ status: "approved" });
    res.status(200).send({
      success: true,
      message: "Doctors list fetched successfully",
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error occured while Fetching All Doctors",
      error,
    });
  }
};
