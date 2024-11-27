import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import cors from "cors";
import patientRouter from "./routes/patientRoutes.js";
import doctorRouter from "./routes/doctorRoutes.js";
import adminRouter from "./routes/adminRoutes.js";

dotenv.config();

// mongoDB connection
connectDB();

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/api/v1/user", patientRouter);
app.use("/api/v1/doctor", doctorRouter);
app.use("/api/v1/admin", adminRouter);

// port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Hi Mom And Dad!!!\nServer Running in ${process.env.NODE_MODE} Mode on http://localhost:${PORT}`
      .bgCyan.white
  );
});
