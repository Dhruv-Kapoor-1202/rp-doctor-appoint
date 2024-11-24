import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    userId: { type: String },
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
    phone: {
      type: String,
      required: [true, "phone no is required"],
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    specialization: {
      type: String,
      required: [true, "specialization is require"],
    },
    experience: {
      type: String,
      required: [true, "experience is required"],
    },
    feesPerConsultation: {
      type: Number,
      required: [true, "fee is required"],
    },
    status: {
      type: String,
      default: "pending",
    },
    timings: {
      type: Object,
      required: [true, "wrok timing is required"],
    },
  },
  {
    timestamps: true,
  }
);

const doctorModel = mongoose.model("doctors", doctorSchema);
export default doctorModel;
