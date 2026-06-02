// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // Ambil token yang disimpan di localStorage saat login sukses tadi
  const token = localStorage.getItem("token");

  // Jika token TIDAK ADA, tendang paksa user ke halaman login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Jika token ADA, render komponen rute internal yang dituju via <Outlet />
  return <Outlet />;
};

export default ProtectedRoute;
