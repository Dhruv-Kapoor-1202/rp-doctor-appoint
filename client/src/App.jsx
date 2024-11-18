import { Route, Routes } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import DashBoardLayout from "@/pages/DashBoardLayout";
import Patient from "./pages/Patient";
import Staff from "./pages/Staff";
import Reports from "./pages/Reports";
import Team from "./pages/Team";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { useSelector } from "react-redux";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      {loading ? <p>loading...</p> : <p>Stuff Happens</p>}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashBoardLayout />}>
          <Route path="/dashboard/patient" element={<Patient />} />
          <Route path="/dashboard/staff" element={<Staff />} />
          <Route path="/dashboard/reports" element={<Reports />} />
          <Route path="/dashboard/team" element={<Team />} />
        </Route>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
