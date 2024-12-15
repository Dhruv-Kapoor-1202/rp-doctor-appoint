import express from "express";
import {
  approveDoctorController,
  getAllDoctorsController,
  getAllUsersController,
  getUserController,
  rejectDoctorController,
} from "../controllers/adminCtrl.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const adminRouter = express.Router();

// Single User
adminRouter.get("/getUser/:id", getUserController);

// All Users || GET
adminRouter.get("/getAllUsers", getAllUsersController);

// All Doctors || GET
adminRouter.get("/getAllDoctors", getAllDoctorsController);

// Approve Doctor Application
adminRouter.post("/approveDoctor", approveDoctorController);

// Reject Doctor Application
adminRouter.post("/rejectDoctor", rejectDoctorController);

export default adminRouter;
