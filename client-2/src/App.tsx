import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import PublicRoute from "@/routes/PublicRoute";
import {
  ApplyDoctor,
  Dashboard,
  Doctors,
  LandingPage,
  Layout,
  LoginPage,
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
                      <Dashboard />
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
                      <Dashboard />
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
                      <Dashboard />
                    </Layout>
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
