import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/patientCtrl";

const router = express.Router();

// routes

// Login || POST
router.post("/login", loginController);

// Register || POST
router.post("/register", registerController);
