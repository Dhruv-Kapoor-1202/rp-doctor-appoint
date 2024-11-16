// import ModeToggle from "@/components/mode-toggle";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-2 bg-gradient-to-tr from-background to-background text-foreground">
      {/* Card */}
      <div className="p-6 border rounded-xl border-border bg-card text-card-foreground">
        <h1 className="text-2xl font-semibold">Create An Account</h1>
        <p className="pt-2 text-sm/5 text-muted-foreground">
          Enter you information below to create your account
        </p>
        <div className="flex flex-col sm:flex-row sm:gap-2">
          <div className="flex flex-col gap-1 pt-4">
            <label htmlFor="fname" className="text-sm font-semibold">
              First Name
            </label>
            <input
              type="text"
              id="fname"
              placeholder="Dhruv"
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
              placeholder="Kapoor"
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
            placeholder="dk@example.com"
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
            className="p-2 text-sm border rounded-md bg-background placeholder:text-muted-foreground border-border text-foreground"
          />
        </div>
        <button className="w-full p-2 mt-4 text-sm font-medium duration-200 rounded-md bg-primary text-primary-foreground hover:bg-primary/80">
          Signup
        </button>
        {/* <button className="w-full p-2 mt-4 text-sm font-medium duration-200 border rounded-md bg-card border-border text-card-foreground hover:bg-secondary">
          Login with Google
        </button> */}
        <p className="pt-4 text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Login
          </Link>
        </p>
      </div>
      {/* <ModeToggle /> */}
    </div>
  );
};

export default SignupPage;
