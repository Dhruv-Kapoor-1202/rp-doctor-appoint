import { Route, Routes } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
// import DashBoardLayout from "@/pages/DashBoardLayout";
// import Patient from "./pages/Patient";
// import Staff from "./pages/Staff";
// import Reports from "./pages/Reports";
// import Team from "./pages/Team";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { useSelector } from "react-redux";
import PublicRoute from "./components/PublicRoute";
// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <SignupPage />
              </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <PublicRoute>
                <LandingPage />
              </PublicRoute>
            }
          />
        </Routes>
      )}
      {/* <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashBoardLayout />}>
          <Route path="/dashboard/patient" element={<Patient />} />
          <Route path="/dashboard/staff" element={<Staff />} />
          <Route path="/dashboard/reports" element={<Reports />} />
          <Route path="/dashboard/team" element={<Team />} />
        </Route>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes> */}
    </>
  );
}

export default App;
