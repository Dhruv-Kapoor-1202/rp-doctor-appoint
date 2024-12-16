import express from "express";
import {
  acceptAppointmentController,
  doctorAppointmentsController,
  getAllDoctorsController,
  getDoctorByIdController,
  getDoctorInfoController,
  rejectAppointmentController,
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
doctorRouter.get(
  "/doctor-appointments/:id",
  // authMiddleware,
  doctorAppointmentsController
);

// Accept Appointment || POST
doctorRouter.post(
  "/acceptAppointment/:id",
  authMiddleware,
  acceptAppointmentController
);

// Reject Appointment || DELETE
doctorRouter.delete(
  "/rejectAppointment/:id",
  authMiddleware,
  rejectAppointmentController
);

// All Doctors || GET
doctorRouter.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

export default doctorRouter;
