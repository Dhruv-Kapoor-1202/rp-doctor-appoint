// import ModeToggle from "@/components/mode-toggle";
import { hideLoading, showLoading } from "@/redux/features/alertSlice";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
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

  // Form Submission handler
  const onFinishHandler = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    try {
      dispatch(showLoading());

      const res = await axios.post(
        "http://localhost:8080/api/v1/user/login",
        formData
      );
      // window.location.reload();
      dispatch(hideLoading());

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        navigate("/dashboard");
      } else {
        setErrorMessage(res.data.message || "Login failed. Please try again.");
        console.log("Error:", res.data.message);
        toast.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      setErrorMessage("Something went wrong. Plaese try again.");
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
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="pt-2 text-sm/5 text-muted-foreground">
          Enter you email below to login to your account
        </p>

        {/* Display error message if any */}
        {errorMessage && (
          <div className="mb-4 text-sm text-red-500">{errorMessage}</div>
        )}

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
          <div className="flex justify-between">
            <label htmlFor="password" className="text-sm font-semibold">
              Password
            </label>
            <Link to="/signup" className="text-sm underline">
              Forgot your password?
            </Link>
          </div>
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
          Login
        </button>
        <button className="w-full p-2 mt-4 text-sm font-medium duration-200 border rounded-md bg-card border-border text-card-foreground hover:bg-secondary">
          Login with Google
        </button>
        <p className="pt-4 text-sm text-center">
          Dont have an account?{" "}
          <Link to="/register" className="underline">
            Sign Up
          </Link>
        </p>
      </form>
      {/* <ModeToggle /> */}
    </div>
  );
};

export default LoginPage;
