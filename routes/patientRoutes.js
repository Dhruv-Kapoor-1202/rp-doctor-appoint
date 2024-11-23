import express from "express";
import {
  applyDoctorController,
  authController,
  getAllDoctorsController,
  loginController,
  registerController,
} from "../controllers/patientCtrl.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const patientRouter = express.Router();

// routes

// Login || POST
patientRouter.post("/login", loginController);

// Register || POST
patientRouter.post("/register", registerController);

// Auth || POST
patientRouter.post("/getPatientData", authMiddleware, authController);

// Apply for Doctor || POST
patientRouter.post("/apply-doctor", authMiddleware, applyDoctorController);

// Get all Doctors || GET
patientRouter.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

export default patientRouter;
