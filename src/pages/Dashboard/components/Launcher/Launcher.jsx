import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../../Layout/Layout";
import './Launcher.css'

import lightLoading from "../../assets/loading/light-loading.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderTree} from '@fortawesome/free-solid-svg-icons'
import { faDocker} from '@fortawesome/free-brands-svg-icons'



const Launcher = () => {
    const themeColors = useContext(ThemeContext);

    const [count, setCount] = useState(0);
    const [canDisplay, setCanDisplay] = useState(false);

    useEffect(() => {
        let newInterval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount === 1) {
                    clearInterval(newInterval)
                    setCanDisplay(true)
                    return 0
                } else {
                    prevCount += 1;
                }
                return prevCount
            });
        }, 200);
        return () => { clearInterval(newInterval) };
    }, []);




    return (
        <>
            {canDisplay ? <div className="component-container">
                <div className="display-input">
                    <form className="launcher-form" action="">
                        <label htmlFor="img-slug" className={"mg-bt-5  " + themeColors.textTertiaryColor}><FontAwesomeIcon icon={faDocker} className="icons"/>Image Slug </label>
                        <input name="img-slug" className={"launcher-input  " + themeColors.colorQuartenary} type="text" placeholder="arungupta/print-hello" />
                        <label htmlFor="output" className={"mg-bt-5  " + themeColors.textTertiaryColor}><FontAwesomeIcon icon={faFolderTree} className="icons"/>Volume</label>
                        <input name="output" className={"launcher-input  " + themeColors.colorQuartenary} type="password" placeholder="/output" />
                        <br />
                        <div className="display-btn">
                            <button className={"queue-btn " + themeColors.colorSecondary + " " + themeColors.textSecondaryColor} type="submit">Send to queue</button>
                        </div>
                    </form>
                </div>
            </div> : <img src={lightLoading} alt="wait to load" />}
        </>
    )
}

export default Launcher;