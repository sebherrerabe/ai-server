
import { createContext, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import Layout from "./Layout/Layout";


import Queue from "./pages/Dashboard/components/Queue/Queue";
import Trainings from "./pages/Dashboard/components/Past Trainings/Trainings";
import Launcher from "./pages/Dashboard/components/Launcher/Launcher";

export const LogInContext = createContext()


const AppRoutes = () => {


  const [userSession, setUserSession] = useState({ isLoggedIn: false, userName: "", jwt: "" })

  const getJWTfromLocalStorage = async () => {
    try {
      let data = JSON.parse(localStorage.getItem("token")) // get token from local storage
      if (data.jwt) {
        setUserSession({ isLoggedIn: true, userName: data.userName, jwt: data.jwt })
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getJWTfromLocalStorage()
  }, [])

  let isLoggedIn = userSession.isLoggedIn;

  let forContext = { isLoggedIn: isLoggedIn, setUserSession: setUserSession, userSession: userSession };

  return (
    <LogInContext.Provider value={forContext}>
      <BrowserRouter>
        <Routes>
          <Route index element={isLoggedIn ? <Navigate replace to="/dashboard" /> : <Navigate replace to="/login" />} />
          <Route path="login" element={isLoggedIn ? <Navigate replace to="/dashboard" /> : <Layout whatIs={"login"} />} />
          <Route path="dashboard" element={!isLoggedIn ? <Navigate replace to="/login" /> : <Layout whatIs={"dashboard"} />} >
            <Route index element={<Launcher />} />
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



