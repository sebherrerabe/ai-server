import { createContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import Layout from "./Layout/Layout";
import Content from "./Layout/components/Content";

export const LogInContext = createContext()

const AppRoutes = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  return (
    <LogInContext.Provider value={isLoggedIn}>
      <Routes>
        <Route index element={isLoggedIn ? <Navigate replace to="/dashboard" /> : <Navigate replace to="/login" />} />
        <Route path="login" element={isLoggedIn ? <Navigate replace to="/dashboard" /> : <Layout> <Content /> </Layout>} />
        <Route path="dashboard" element={!isLoggedIn ? <Navigate replace to="/login" /> : <Layout> <Content /> </Layout>} />
      </Routes>
    </LogInContext.Provider>
  );
}

export default AppRoutes;
