import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import './Layout.css';

import { createContext, useState, useContext } from "react";

import cssClasses from "./cssClasses.json"

export const ThemeContext = createContext();

const Layout = ({ whatIs }) => {

    const light = cssClasses.light;
    const dark = cssClasses.dark;

    const [themeMode, setThemeMode] = useState(true);
    const [themeColors, setThemeColors] = useState({
        colorPrimary: light.colorPrimary,
        colorSecondary: light.colorSecondary,
        colorTertiary: light.colorTertiary,
        bgColor: light.bgColor,
        textPrimaryColor: light.textPrimaryColor,
        textSecondaryColor: light.textSecondaryColor,
        textTertiaryColor: light.textTertiaryColor
    })

    const switchMode = () => {
        setThemeMode(!themeMode);
        setThemeColors(prevColors => {
            prevColors.colorPrimary = !themeMode ? light.colorPrimary : dark.colorPrimary;
            prevColors.colorSecondary = !themeMode ? light.colorSecondary : dark.colorSecondary;
            prevColors.colorTertiary = !themeMode ? light.colorTertiary : dark.colorTertiary;
            prevColors.bgColor = !themeMode ? light.bgColor : dark.bgColor;
            prevColors.textPrimaryColor = !themeMode ? light.textPrimaryColor : dark.textPrimaryColor;
            prevColors.textSecondaryColor = !themeMode ? light.textSecondaryColor : dark.textSecondaryColor;
            prevColors.textTertiaryColor = !themeMode ? light.textTertiaryColor : dark.textTertiaryColor;
            return prevColors;
        })
    }


    return (
        <ThemeContext.Provider value={themeColors}>

            <div className={"main-container " + themeColors.bgColor}>
                <button className="magic-btn" onClick={() => {switchMode()}}> Dark mode</button>
                <Header />
                {whatIs === "login" ? <Login /> : <Dashboard />}
                <Footer />
            </div>
        </ThemeContext.Provider>

    )
}


export default Layout;