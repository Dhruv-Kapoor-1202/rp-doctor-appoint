import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { hideLoading, showLoading } from "@/redux/features/alertSlice";
import axios from "axios";
import { URL } from "@/URL";
import { toast } from "sonner";

const LoginForm = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // console.log(name + " : " + value);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onFinishHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setErrorMessage("Please fill in all the fields");
      return;
    }

    try {
      dispatch(showLoading());
      const res = await axios.post(`${URL}/api/v1/user/login`, formData);
      dispatch(hideLoading());

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        navigate("/dashboard");
      } else {
        setErrorMessage(res.data.message || "Login failed. Please try again.");
        console.error(res.data.message);
        toast.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      setErrorMessage("Something went wrong. Please try again.");
      console.error(error);
      toast.error(`${error}`);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
            {/* Display error message if any */}
            {errorMessage && (
              <div className="my-1 text-sm text-red-500 ">{errorMessage}</div>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onFinishHandler}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="rp@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="inline-block ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>

                <div className="grid grid-cols-12 gap-1">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="col-span-10"
                  />
                  <Button
                    variant={"outline"}
                    onClick={togglePasswordVisibility}
                    type="button"
                    className="col-span-2 text-xs "
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              {/* <Button variant="outline" className="w-full">
                Login with Google
              </Button> */}
            </div>
            <div className="mt-4 text-sm text-center">
              Don&apos;t have an account?{" "}
              <Link
                to="/register"
                className="font-semibold underline underline-offset-4"
              >
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center w-full p-2 min-h-svh md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
