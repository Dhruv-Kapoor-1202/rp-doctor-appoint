import exporess from "express";

import { authMiddleware } from "../middlewares/authMiddleware";

const adminRouter = exporess.Router();

// All Users || GET
adminRouter.get("/getAllUsers", authMiddleware, getAllUsersController);
