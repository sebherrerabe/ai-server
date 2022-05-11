import { useContext } from "react";
import { ThemeContext } from "../Layout";

const Header = () => {
    const themeColors = useContext(ThemeContext);
    return (
        <header>
            <nav className={themeColors.colorPrimary}>
                <div className="nav-inner">
                    <a href="/"><h1>/AI</h1></a>

                </div>
            </nav>
        </header>
    )
}

export default Header;