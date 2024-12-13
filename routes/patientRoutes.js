import express from "express";
import {
  applyDoctorController,
  authController,
  book2Controller,
  bookAppointmentController,
  getAllDoctorsController,
  loginController,
  registerController,
  userAppointmentsController,
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

// Book Appointment || POST
patientRouter.post(
  "/book-appointment",
  authMiddleware,
  bookAppointmentController
);

patientRouter.post("/book-2", authMiddleware, book2Controller);

// Get User Appointments || GETz
patientRouter.post(
  "/user-appointments",
  // authMiddleware,
  userAppointmentsController
);
export default patientRouter;
