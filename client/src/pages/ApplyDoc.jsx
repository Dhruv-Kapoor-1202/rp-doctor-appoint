/* eslint-disable no-unused-vars */
import { hideLoading, showLoading } from "@/redux/features/alertSlice";
import axios from "axios";
import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ApplyDoc = () => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    website: "",
    address: "",
    specialization: "",
    experience: "",
    feesPerConsultation: "",
    timings: "",
  });

  // State for error message
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(value);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // Update the specific field based on the name
    }));
  };

  // Form submission handler
  const onFinishHandler = async (e) => {
    e.preventDefault(); // Prevent default form submit

    // Basic validation check
    if (
      !formData.fname ||
      !formData.lname ||
      !formData.phone ||
      !formData.email ||
      !formData.website ||
      !formData.address ||
      !formData.specialization ||
      !formData.experience ||
      !formData.feesPerConsultation ||
      !formData.timings
    ) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      dispatch(showLoading());

      const res = await axios.post(
        "http://localhost:8080/api/v1/user/apply-doctor",
        {
          ...formData,
          userId: user._id,
          timings: [moment(formData.timings, "HH:mm")],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());

      if (res.data.success) {
        console.log("Application sent Successfully");
        toast.success(res.data.message);
        navigate("/dashboard"); // Navigate to dashboard page
      } else {
        setErrorMessage(
          res.data.message || "Application failed. Please try again."
        );
        console.log("Error:", res.data.message);
        toast.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      setErrorMessage("Something went wrong. Please try again.");
      console.log("Error:", error);
      toast.error(error);
    }
  };

  return (
    <div className="w-full max-w-screen-md py-4 sm:p-4">
      <h1 className="text-lg font-semibold ">Doctor Application</h1>
      <p className="pb-6 text-sm/5 text-muted-foreground">
        Apply for a doctor position.
      </p>
      <div className="w-full h-[1px] bg-border"></div>

      <form
        onSubmit={onFinishHandler}
        className="flex flex-col gap-4 py-2 md:gap-6"
      >
        <div className="flex flex-col gap-2 pt-4">
          <label htmlFor="fname" className="font-semibold text-base/5">
            First Name
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            placeholder="Random"
            className="p-2 text-sm border rounded-md bg-background placeholder:text-muted-foreground border-border text-foreground"
          />
          <p className="text-sm/5 text-muted-foreground">
            Enter you legal first name.
          </p>
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <label htmlFor="lname" className="font-semibold text-base/5">
            Last Name
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            placeholder="Person"
            className="p-2 text-sm border rounded-md bg-background placeholder:text-muted-foreground border-border text-foreground"
          />
          <p className="text-sm/5 text-muted-foreground">
            Enter you legal last name.
          </p>
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <label htmlFor="phone" className="font-semibold text-base/5">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="your contact number."
            className="p-2 text-sm border rounded-md bg-background placeholder:text-muted-foreground border-border text-foreground"
          />
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <label htmlFor="email" className="font-semibold text-base/5">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="rp@gmail.com"
            className="p-2 text-sm border rounded-md bg-background placeholder:text-muted-foreground border-border text-foreground"
          />
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <label htmlFor="website" className="font-semibold text-base/5">
            Website Link
          </label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="www.example.com"
            className="p-2 text-sm border rounded-md bg-background placeholder:text-muted-foreground border-border text-foreground"
          />
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <label htmlFor="address" className="font-semibold text-base/5">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Apt. 701, Main Street, XYZ"
            className="p-2 text-sm border rounded-md bg-background placeholder:text-muted-foreground border-border text-foreground"
          />
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <label htmlFor="specialization" className="font-semibold text-base/5">
            Specialization
          </label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            placeholder="Cardiology, Neurology, ...etc"
            className="p-2 text-sm border rounded-md bg-background placeholder:text-muted-foreground border-border text-foreground"
          />
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <label htmlFor="experience" className="font-semibold text-base/5">
            Experience
          </label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="x Years"
            className="p-2 text-sm border rounded-md bg-background placeholder:text-muted-foreground border-border text-foreground"
          />
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <label
            htmlFor="feesPerConsultation"
            className="font-semibold text-base/5"
          >
            Fees Per Consultation{" "}
            <span className="italic font-normal ">(in Rupees)</span>
          </label>
          <input
            type="text"
            id="feesPerConsultation"
            name="feesPerConsultation"
            value={formData.feesPerConsultation}
            onChange={handleChange}
            placeholder="700"
            className="p-2 text-sm border rounded-md bg-background placeholder:text-muted-foreground border-border text-foreground"
          />
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <label htmlFor="timings" className="font-semibold text-base/5">
            Timings
          </label>
          <input
            type="time"
            id="timings"
            name="timings"
            value={formData.timings}
            onChange={handleChange}
            placeholder="11:00"
            className="p-2 text-sm border rounded-md bg-background placeholder:text-muted-foreground border-border text-foreground"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 px-4 mt-2 font-semibold duration-200 rounded-lg hover:bg-primary/90 bg-primary text-primary-foreground sm:w-fit text-sm/5"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyDoc;
