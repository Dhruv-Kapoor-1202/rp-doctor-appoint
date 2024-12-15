// import { useHistory } from "react-router-dom"; // If you're using react-router for navigation

import { LogOut } from "lucide-react";
import { buttonVariants } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const LogoutButton = () => {
  // const history = useHistory();
  // Use this for redirect after logout (if needed)

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.clear();

    // Optionally, redirect user after logout
    // history.push("/");

    // Optionally, you can also reload the page if you don't use routing
    window.location.reload();
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <a
            className={buttonVariants({ size: "icon", variant: "secondary" })}
            onClick={handleLogout}
          >
            <LogOut />
          </a>
        </TooltipTrigger>
        <TooltipContent>Logout</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LogoutButton;
