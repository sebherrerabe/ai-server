import Header from "./components/Header";
import Footer from "./components/Footer";
import './Layout.css';

import { createContext, useState, useContext } from "react";

import cssClasses from "./cssClasses.json"

export const ThemeContext = createContext();

const Layout = (props) => {

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
            return prevColors;
        })
    }


    return (
        <ThemeContext.Provider value={themeColors}>
            <div className={"main-container " + themeColors.bgColor}>
                <button onClick={() => { switchMode() }}>Test</button>
                <Header />
                {props.children}
                <Footer />
            </div>
        </ThemeContext.Provider>

    )
}


export default Layout;