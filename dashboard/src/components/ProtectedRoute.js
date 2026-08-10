import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // no token = not logged in = send them to login page
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
