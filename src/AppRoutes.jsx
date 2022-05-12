
import { createContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import Layout from "./Layout/Layout";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

export const LogInContext = createContext()


const AppRoutes = () => {

  const [isLoggedIn, setisLoggedIn] = useState(false);



  return (
    <LogInContext.Provider value={isLoggedIn}>
      <BrowserRouter>
        <Routes>
          <Route index element={isLoggedIn ? <Navigate replace to="/dashboard" /> : <Navigate replace to="/login" />} />
          <Route path="login" element={isLoggedIn ? <Navigate replace to="/dashboard" /> : <Layout> <Login /> </Layout>} />
          <Route path="dashboard" element={!isLoggedIn ? <Navigate replace to="/login" /> : <Layout> <Dashboard /> </Layout>} />
        </Routes>
      </BrowserRouter>
    </LogInContext.Provider>
  );
}

export default AppRoutes;
