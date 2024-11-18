import patientModel from "../models/patientModel.js";
import bcrypt from "bcryptjs";
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
    req.bod.password = hashedPassword;
    const newPatient = new patientModel(req.body);
    await newPatient.save();
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

    const token = JsonWebTokenError.sign(
      { id: patient._id },
      process.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
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