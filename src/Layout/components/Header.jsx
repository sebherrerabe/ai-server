
import { LogInContext } from "../../AppRoutes";

import { useContext } from "react";
import { ThemeContext } from "../Layout";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import profPic from "../assets/img/nerd.jpeg";

const Header = () => {

    let forContext = useContext(LogInContext);

    const themeColors = useContext(ThemeContext);

    return (
        <header>
            {forContext.isLoggedIn ? <nav className={themeColors.colorPrimary}>
                <div className="nav-inner">
                    <a href="/"><h1>/AI</h1></a>
                    <div className="nav-rightend">
                        <div className="profile-pic" style={{ backgroundImage: `url(${profPic})` }}>
                        </div>
                        {/* <button className="logout-btn " onClick={() => { forContext.setUserSession({isLoggedIn: false, userName: "", jwt: ""}) }}><FontAwesomeIcon icon={faRightFromBracket} />Disconnect</button> */}

                        <button className={"logout-btn " + themeColors.colorSecondary + " " + themeColors.textSecondaryColor} onClick={() => { forContext.setUserSession({isLoggedIn: false, userName: "", jwt: ""}) }}> <span> Disconnect </span> </button>

                    </div>
                </div>
            </nav> : null}

        </header>
    )
}

export default Header;