import { useContext } from "react";
import { LogInContext } from "../../AppRoutes";
import { ThemeContext } from "../Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import profPic from "../../assets/img/nerd.jpeg";

const Header = () => {
    const isLoggedIn = useContext(LogInContext);
    const themeColors = useContext(ThemeContext);
    return (
        <header>
            {isLoggedIn ? <nav className={themeColors.colorPrimary}>
                <div className="nav-inner">
                    <a href="/"><h1>/AI</h1></a>
                    <div className="nav-rightend">
                        <div className="profile-pic" style={{ backgroundImage: `url(${profPic})` }}>
                        </div>
                        <button className="btn"><FontAwesomeIcon icon={faRightFromBracket} />Disconnect</button>
                    </div>
                </div>
            </nav> : null}

        </header>
    )
}

export default Header;