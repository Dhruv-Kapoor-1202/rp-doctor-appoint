import express from "express";
import {
  authController,
  loginController,
  registerController,
} from "../controllers/patientCtrl";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// routes

// Login || POST
router.post("/login", loginController);

// Register || POST
router.post("/register", registerController);

// Auth || POST
router.post("/getPatientData", authMiddleware, authController);

export default router;
