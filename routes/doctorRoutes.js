import express from "express";
import {
  doctorAppointmentsController,
  getAllDoctorsController,
  getDoctorByIdController,
  getDoctorInfoController,
  updateProfileController,
} from "../controllers/doctorCtrl.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const doctorRouter = express.Router();

// Single Doc Info (userID) || POST
doctorRouter.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

// Update Doc Info || POST
doctorRouter.post("/updateProfile", authMiddleware, updateProfileController);

// Single Doc Info (DoctorID) || POST
doctorRouter.post("/getDoctorById", authMiddleware, getDoctorByIdController);

// Doc Appointments || GET
doctorRouter.post(
  "/doctor-appointments",
  // authMiddleware,
  doctorAppointmentsController
);

// All Doctors || GET
doctorRouter.get("", authMiddleware, getAllDoctorsController);

export default doctorRouter;
