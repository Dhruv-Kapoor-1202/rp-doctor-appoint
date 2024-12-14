// import { useHistory } from "react-router-dom"; // If you're using react-router for navigation

import { Button } from "./ui/button";

const LogoutBtn = () => {
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

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutBtn;
