import express from "express";
import {
  authController,
  loginController,
  registerController,
} from "../controllers/patientCtrl";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const patientRouter = express.Router();

// routes

// Login || POST
patientRouter.post("/login", loginController);

// Register || POST
patientRouter.post("/register", registerController);

// Auth || POST
patientRouter.post("/getPatientData", authMiddleware, authController);

export default patientRouter;
