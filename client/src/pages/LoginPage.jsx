// import ModeToggle from "@/components/mode-toggle";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-2 bg-gradient-to-tr from-background to-background text-foreground">
      {/* Card */}
      <div className="p-6 border rounded-xl border-border bg-card text-card-foreground">
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="pt-2 text-sm/5 text-muted-foreground">
          Enter you email below to login to your account
        </p>
        <div className="flex flex-col gap-1 pt-4">
          <label htmlFor="email" className="text-sm font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="dk@example.com"
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
            className="p-2 text-sm border rounded-md bg-background placeholder:text-muted-foreground border-border text-foreground"
          />
        </div>
        <button className="w-full p-2 mt-4 text-sm font-medium duration-200 rounded-md bg-primary text-primary-foreground hover:bg-primary/80">
          Login
        </button>
        <button className="w-full p-2 mt-4 text-sm font-medium duration-200 border rounded-md bg-card border-border text-card-foreground hover:bg-secondary">
          Login with Google
        </button>
        <p className="pt-4 text-sm text-center">
          Dont have an account?{" "}
          <Link to="/signup" className="underline">
            Sign Up
          </Link>
        </p>
      </div>
      {/* <ModeToggle /> */}
    </div>
  );
};

export default LoginPage;
