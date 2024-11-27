import express from "express";
import {
  getAllDoctorsController,
  getAllUsersController,
} from "../controllers/adminCtrl";
import { authMiddleware } from "../middlewares/authMiddleware";

const adminRouter = express.Router();

// All Users || GET
adminRouter.get("/getAllUsers", authMiddleware, getAllUsersController);

// All Doctors || GET
adminRouter.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

export default adminRouter;
