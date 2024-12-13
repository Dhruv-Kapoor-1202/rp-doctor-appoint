import ModeToggle from "@/components/ui/mode-toggle";
// import { GridIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container flex flex-col items-center justify-between gap-2 py-2 md:py-4 sm:flex-row">
      {/* Logo */}
      <div className="flex items-center justify-center gap-1 p-2 px-2 duration-300 border rounded-lg cursor-pointer border-border hover:bg-secondary/40">
        {/* <GridIcon className="size-[1.5rem] " /> */}
        <img src="./hospital-logo.png" className="rounded-sm size-8" />
        <p className="text-lg/5">VitalWave </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-2">
        <ModeToggle />
        <Link
          to="/login"
          className="p-2 px-4 font-medium tracking-normal duration-300 rounded-lg cursor-pointer hover:rounded-xl text-sm/snug bg-secondary text-secondary-foreground hover:bg-secondary/80"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="p-2 px-4 font-medium tracking-normal duration-300 rounded-lg cursor-pointer hover:rounded-xl text-sm/snug bg-primary text-primary-foreground hover:bg-primary/95"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
