
import { createContext, useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import { BrowserRouter, Link } from 'react-router-dom';
import Layout from "./Layout/Layout";


import Launcher from "./pages/Dashboard/components/Launcher/Launcher";
import Queue from "./pages/Dashboard/components/Queue/Queue";
import Trainings from "./pages/Dashboard/components/Past Trainings/Trainings";

export const LogInContext = createContext()


const AppRoutes = () => {


  const [userSession, setUserSession] = useState({ isLoggedIn: false, userName: "", jwt: "" })




  let isLoggedIn = userSession.isLoggedIn;

  let forContext = { isLoggedIn: isLoggedIn, setUserSession: setUserSession };

  return (
    <LogInContext.Provider value={forContext}>
      <BrowserRouter>
        <Routes>
          <Route index element={isLoggedIn ? <Navigate replace to="/dashboard" /> : <Navigate replace to="/login" />} />
          <Route path="login" element={isLoggedIn ? <Navigate replace to="/dashboard" /> : <Layout whatIs={"login"} />} />
          <Route path="dashboard" element={!isLoggedIn ? <Navigate replace to="/login" /> : <Layout whatIs={"dashboard"} />} >
            <Route path="launcher" element={<Launcher />} />
            <Route path="queue" element={<Queue />} />
            <Route path="past-trainings" element={<Trainings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LogInContext.Provider>
  );
}

export default AppRoutes;



