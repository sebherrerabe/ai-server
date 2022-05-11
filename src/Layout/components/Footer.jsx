import { useContext } from "react";
import { ThemeContext } from "../Layout";

const Footer = () => {
    const themeColors = useContext(ThemeContext);
    return (
        <footer className={"footer " + themeColors.colorPrimary } >
        </footer>
    )
}

export default Footer;