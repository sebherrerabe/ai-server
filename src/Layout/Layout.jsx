import Header from "./components/Header";
import Footer from "./components/Footer";
import Switch from "./components/Switch";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import './Layout.css';

import { createContext, useEffect, useState } from "react";

import cssClasses from "./cssClasses.json"

export const ThemeContext = createContext();

const Layout = ({ whatIs }) => {

    const light = cssClasses.light;
    const dark = cssClasses.dark;

    const [themeMode, setThemeMode] = useState(false);
    const [themeColors, setThemeColors] = useState({ ...dark })


    const switchMode = () => {
        setThemeMode(!themeMode);
        const darkOrLight = themeMode ? light : dark;
        setThemeColors({ ...darkOrLight })
    }


    return (
        <ThemeContext.Provider value={themeColors}>

            <div className={"main-container " + themeColors.bgColor}>
                {/* <button className="magic-btn" onClick={() => {switchMode()}}> Dark mode</button> */}
                <Header />
                <Switch switchMode={switchMode} />
                {whatIs === "login" ? <Login /> : <Dashboard />}
                <Footer />
            </div>
        </ThemeContext.Provider>

    )
}


export default Layout;