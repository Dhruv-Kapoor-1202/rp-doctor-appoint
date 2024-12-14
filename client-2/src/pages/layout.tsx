import Sidebar from "@/components/my/sidebar";
import { RootState } from "@/routes/ProtectedRoute";
import { useSelector } from "react-redux";

const Layout = () => {
  const { user } = useSelector((state: RootState) => state.user);
  console.log(user);
  return (
    <>
      {/* Sidebar (user, doctor, admin) */}
      <Sidebar />
      {/* Main content (user, doctor, admin)  */}
    </>
  );
};

export default Layout;
