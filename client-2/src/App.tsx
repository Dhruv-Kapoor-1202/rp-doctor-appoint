import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import PublicRoute from "@/routes/PublicRoute";
import { LandingPage, Layout, LoginPage, SignupPage } from "@/pages/pages";
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
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            />
          </>
        </Routes>
      )}
    </>
  );
}

export default App;
