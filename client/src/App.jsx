import { Route, Routes } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import DashBoardLayout from "@/pages/DashBoardLayout";
import Patient from "./pages/Patient";
import Staff from "./pages/Staff";
import Reports from "./pages/Reports";
import Team from "./pages/Team";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashBoardLayout />}>
          <Route path="/dashboard/patient" element={<Patient />} />
          <Route path="/dashboard/staff" element={<Staff />} />
          <Route path="/dashboard/reports" element={<Reports />} />
          <Route path="/dashboard/team" element={<Team />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
