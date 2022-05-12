import { useContext } from "react";
import { ThemeContext } from "../../../../Layout/Layout";
import './Launcher.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faRightFromBracket }from '@fortawesome/free-solid-svg-icons'


const Launcher = () => {
    const themeColors = useContext(ThemeContext);
    return ( 
    <div className="component-container">
            <div className="display-input">
                <form className="launcher-form"action="">
                <label for="img-slug " className="mg-bt-5"><FontAwesomeIcon icon={faRightFromBracket} />Image Slug </label> 
                <input name="img-slug" className={"launcher-input " + themeColors.colorPrimary} type="text" placeholder="DockerHub_username/image_name" />
                <label for="output" className="mg-bt-5"><FontAwesomeIcon icon={faRightFromBracket} />Volume</label> 
                <input name="output" className={"launcher-input " + themeColors.colorPrimary} type="password" placeholder="/output" />
                <br />
                <div className="display-btn">
                <button className={"queue-btn " + themeColors.colorSecondary + " " + themeColors.textSecondaryColor} type="submit">Send to queue</button>
                </div>
                </form>   
            </div>  
        </div>
     );
}
 
export default Launcher;