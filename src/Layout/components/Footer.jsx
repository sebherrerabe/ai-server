import { useContext } from "react";
import { ThemeContext } from "../Layout";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const themeColors = useContext(ThemeContext);
    return (
        <footer className={"footer " + themeColors.colorPrimary} >
            <script defer src="@fortawesome/fontawesome-free/js/brands.js"></script>
            <div className="footer-inner">
                <p className={themeColors.textQuaternaryColor}> Any issues? contact your coach.</p> <a className={themeColors.textTertiaryColor} href="https://github.com/becodeorg/webdev-ai-server-use-case" target="_blank" rel="noreferrer">  <FontAwesomeIcon icon={faGithub} size="lg" /> Repository </a>
            </div>
        </footer>
    )
}

export default Footer;