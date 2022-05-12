
import { createContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import { BrowserRouter , Link } from 'react-router-dom';
import Layout from "./Layout/Layout";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

export const LogInContext = createContext()


const AppRoutes = () => {

  const [isLoggedIn, setisLoggedIn] = useState(true);



  return (
    <LogInContext.Provider value={isLoggedIn}>
      <BrowserRouter>
        <Routes>
          <Route index element={isLoggedIn ? <Navigate replace to="/dashboard" /> : <Navigate replace to="/login" />} />
          <Route path="login" element={isLoggedIn ? <Navigate replace to="/dashboard" /> : <Layout whatIs={"login"} />} />
          <Route path="dashboard" element={!isLoggedIn ? <Navigate replace to="/login" /> : <Layout whatIs={"dashboard"} />} />
        </Routes>
      </BrowserRouter>
    </LogInContext.Provider>
  );
}

export default AppRoutes;



