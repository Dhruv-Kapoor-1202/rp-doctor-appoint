import patientModel from "../models/patientModel";
import doctorModel from "../models/doctorModel";

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

// TODO: Change Account Status Controller. Figure it out
