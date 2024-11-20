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
import PublicRoute from "./components/PublicRoute";
import Spinner from "./components/ui/spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PatientDetail from "./pages/PatientDetail";
// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      {loading ? (
        <Spinner />
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
          <Route
            path="/dashboard/patient/:id"
            element={
              <ProtectedRoute>
                <PatientDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashBoardLayout />
              </ProtectedRoute>
            }
          >
            <Route
              path="/dashboard/patient"
              element={
                <ProtectedRoute>
                  <Patient />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/staff"
              element={
                <ProtectedRoute>
                  <Staff />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/reports"
              element={
                <ProtectedRoute>
                  <Reports />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/team"
              element={
                <ProtectedRoute>
                  <Team />
                </ProtectedRoute>
              }
            />
          </Route>
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
