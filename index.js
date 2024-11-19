import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import cors from "cors";
import patientRouter from "./routes/patientRoutes.js";

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

// port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Hi Mom And Dad!!!\nServer Running in ${process.send.NODE_MODE} Mode on http://localhost:${PORT}`
      .bgCyan.white
  );
});
