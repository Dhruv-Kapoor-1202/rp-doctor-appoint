import express from "express";
import {
  getAllDoctorsController,
  getAllUsersController,
} from "../controllers/adminCtrl.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const adminRouter = express.Router();

// All Users || GET
adminRouter.get("/getAllUsers", getAllUsersController);

// All Doctors || GET
adminRouter.get("/getAllDoctors", getAllDoctorsController);

export default adminRouter;
