/* eslint-disable react/prop-types */
import { hideLoading, showLoading } from "@/redux/features/alertSlice";
import { setUser } from "@/redux/features/userSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const token = localStorage.getItem("token");

  const getUser = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/getPatientData",
        { token },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        dispatch(setUser(res.data.data));
      } else {
        localStorage.clear();
        return <Navigate to="/login" />;
      }
    } catch (error) {
      localStorage.clear();
      dispatch(hideLoading());
      console.error(error);
      return <Navigate to="/login" />;
    }
  };

  useEffect(() => {
    if (token && !user) {
      getUser();
    }
  }, [token, user, dispatch]);

  if (!token) {
    return <Navigate to="/login" />;
  }

  // If user data exists and token is valid, render the children (protected route content)
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
