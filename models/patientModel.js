import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, "first name is require"],
  },
  lname: {
    type: String,
    required: [true, "last name is require"],
  },
  email: {
    type: String,
    required: [true, "email is require"],
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isDoctor: {
    type: Boolean,
    default: false,
  },
});

const patientModel = mongoose.model("patients", patientSchema);

export default patientModel;
