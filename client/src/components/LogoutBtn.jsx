// import { useHistory } from "react-router-dom"; // If you're using react-router for navigation

const LogoutBtn = () => {
  // const history = useHistory();
  // Use this for redirect after logout (if needed)

  const handleLogout = () => {
    // Remove the 'token' from localStorage
    localStorage.removeItem("token");
    localStorage.clear();

    // Optionally, redirect user after logout
    // history.push("/");

    // Optionally, you can also reload the page if you don't use routing
    window.location.reload();
  };

  return (
    <button
      onClick={handleLogout}
      className="p-2 rounded-lg bg-secondary text-secondary-foreground text-sm/5 hover:bg-secondary/70"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
