import { ModeToggle } from "@/components/mode-toggle";
// import { GridIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Navbar = () => {
  return (
    <Card className="z-10 flex justify-between max-w-screen-lg p-2 m-2 lg:mx-auto sm:sticky bg-background/70 sm:top-4 backdrop-blur-lg">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="./logo.png" className="rounded-md size-10" />
        <p className="text-lg font-semibold">VitalWave </p>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-2">
        <ModeToggle />
        <Link to="/login">
          <Button variant={"default"}>Login</Button>
        </Link>
        <Link to="/register">
          <Button variant={"secondary"}>Register</Button>
        </Link>
      </div>
    </Card>
  );
};

export default Navbar;
