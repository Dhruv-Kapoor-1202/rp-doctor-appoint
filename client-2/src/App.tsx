import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import PublicRoute from "@/routes/PublicRoute";
import {
  ApplyDoctor,
  Appointments,
  Approvals,
  BookDoctor,
  Dashboard,
  Doctors,
  LandingPage,
  Layout,
  LoginPage,
  PatientInfo,
  Patients,
  SignupPage,
} from "@/pages/pages";
import ProtectedRoute, { RootState } from "@/routes/ProtectedRoute";
import Spinner from "@/components/spinner";

function App() {
  const { loading } = useSelector((state: RootState) => state.alerts);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          {/* Public Routes */}
          <>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <LandingPage />
                </PublicRoute>
              }
            />
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
          </>

          {/* Protected Routes */}
          <>
            {/* User Routes */}
            <>
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <Dashboard />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/bookdoctor"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <BookDoctor />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/applydoctor"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <ApplyDoctor />
                    </Layout>
                  </ProtectedRoute>
                }
              />
            </>

            {/* Doctor Routes */}
            <>
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <Dashboard />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/patients"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <Patients />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/appointments"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <Appointments />
                    </Layout>
                  </ProtectedRoute>
                }
              />
            </>

            {/* Admin Routes */}
            <>
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <Dashboard />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/patients"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <Patients />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/doctors"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <Doctors />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/approvals"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <Approvals />
                    </Layout>
                  </ProtectedRoute>
                }
              />
            </>

            {/* Dynamic Routes */}
            <>
              <Route
                path="/patients/:id"
                element={
                  <ProtectedRoute>
                    <PatientInfo />
                  </ProtectedRoute>
                }
              />
            </>
          </>
        </Routes>
      )}
    </>
  );
}

export default App;
