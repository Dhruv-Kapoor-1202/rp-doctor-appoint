import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "@/redux/features/alertSlice";
import { toast } from "sonner";

const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // State for form data
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  // State for error message
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
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
      !formData.email ||
      !formData.password
    ) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      dispatch(showLoading());

      const res = await axios.post(
        "http://localhost:8080/api/v1/user/register",
        formData
      );

      dispatch(hideLoading());

      if (res.data.success) {
        console.log("Registered Successfully");
        toast.success(res.data.message);
        navigate("/login"); // Navigate to login page
      } else {
        setErrorMessage(
          res.data.message || "Registration failed. Please try again."
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
    <div className="flex flex-col items-center justify-center w-full h-screen p-2 bg-gradient-to-tr from-background to-background text-foreground">
      {/* Card */}
      <form
        onSubmit={onFinishHandler}
        className="p-6 border rounded-xl border-border bg-card text-card-foreground"
      >
        <h1 className="text-2xl font-semibold">Create An Account</h1>
        <p className="pt-2 text-sm/5 text-muted-foreground">
          Enter your information below to create your account.
        </p>

        {/* Display error message if any */}
        {errorMessage && (
          <div className="mb-4 text-sm text-red-500">{errorMessage}</div>
        )}

        <div className="flex flex-col sm:flex-row sm:gap-2">
          <div className="flex flex-col gap-1 pt-4">
            <label htmlFor="fname" className="text-sm font-semibold">
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
          </div>
          <div className="flex flex-col gap-1 pt-4">
            <label htmlFor="lname" className="text-sm font-semibold">
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
          </div>
        </div>
        <div className="flex flex-col gap-1 pt-4">
          <label htmlFor="email" className="text-sm font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="rp@example.com"
            className="p-2 text-sm border rounded-md bg-background placeholder:text-muted-foreground border-border text-foreground"
          />
        </div>
        <div className="flex flex-col gap-1 pt-4">
          <label htmlFor="password" className="text-sm font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="p-2 text-sm border rounded-md bg-background placeholder:text-muted-foreground border-border text-foreground"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 mt-4 text-sm font-medium duration-200 rounded-md bg-primary text-primary-foreground hover:bg-primary/80"
        >
          Signup
        </button>
        <p className="pt-4 text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
