import { useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import Layout from "./Layout/Layout";

const AppRoutes = () => {
  const [isLoggedIn] = useState(false);
  return (
    <Routes>
      <Route index element={isLoggedIn ? <Navigate replace to="/dashboard" /> : <Navigate replace to="/login" />} />
      <Route path="login" element={isLoggedIn ? <Navigate replace to="/dashboard" /> : <Layout />} />
      <Route path="dashboard" element={!isLoggedIn ? <Navigate replace to="/login" /> : <Layout />} />
    </Routes>
  );
}

export default AppRoutes;
