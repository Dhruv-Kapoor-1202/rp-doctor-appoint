import { RootState } from "@/routes/ProtectedRoute";
import { useSelector } from "react-redux";
import AdminDashboard from "./admin/adminDashboard";
import DoctorDashboard from "./doctor/doctorDashboard";
import UserDashboard from "./user/userDashboard";

const Dashboard = () => {
  const { user } = useSelector((state: RootState) => state.user);

  if (user?.isAdmin) return <AdminDashboard />;
  else if (user?.isDoctor) return <DoctorDashboard />;
  else return <UserDashboard />;
};

export default Dashboard;
