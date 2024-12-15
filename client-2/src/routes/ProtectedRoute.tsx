import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { URL } from "@/URL";
import { hideLoading, showLoading } from "@/redux/features/alertSlice";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { setUser } from "@/redux/features/userSlice";

export type User = {
  _id?: string;
  fname?: string;
  lname?: string;
  email?: string;
  password?: string;
  isAdmin?: boolean;
  isDoctor?: boolean;
};

export type RootState = {
  user: {
    user: User | null; // Assuming 'user' is an object of type 'User' or null when not logged in
    // other user-related state, if any
  };
  alerts: {
    loading: string;
  };
  // other slices of state (e.g., auth, posts, etc.)
};

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getUser = async () => {
      try {
        dispatch(showLoading());
        const res = await axios.post(
          `${URL}/api/v1/user/getPatientData`,
          { token },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        dispatch(hideLoading());

        if (res.data.success) dispatch(setUser(res.data.data));
        else {
          localStorage.clear();
          return <Navigate to="/login" />;
        }
      } catch (error) {
        localStorage.clear();
        dispatch(hideLoading());
        console.log(error);
        return <Navigate to="/login" />;
      }
    };

    if (token && !user) getUser();
  }, [token, user, dispatch]);

  if (!token) return <Navigate to="/login" />;

  // If user data exists and token is valid, render the children (protected route content)
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
