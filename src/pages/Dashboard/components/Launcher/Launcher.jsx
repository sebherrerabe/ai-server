import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../../Layout/Layout";

import { LogInContext } from "../../../../AppRoutes";
import './Launcher.css'

import lightLoading from "../../assets/loading/light-loading.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderTree } from '@fortawesome/free-solid-svg-icons'
import { faDocker } from '@fortawesome/free-brands-svg-icons'



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

    const [inputValues, setInputValues] = useState({ imgSlug: "", output: "" });

    const forContext = useContext(LogInContext);
    let userSession = forContext.userSession;

    const [message, setMessage] = useState("");
    const [showLoading, setShowLoading] = useState(false);




    const clearInputValues = () => {
        setInputValues({ imgSlug: "", output: "" });
    }

    const sendTrainingToServer = (e) => {
        e.preventDefault();
        setShowLoading(true);
        setMessage("")
        fetch("https://cors-anywhere.herokuapp.com/http://api.ai-server.becode.org/send_training_to_queue", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${userSession.jwt}`, // From the auth route
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                docker_image_name: inputValues.imgSlug.toLowerCase(),
                volume: inputValues.output
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    setMessage("Image Creation Failed :(, Call your coach.");
                } else {
                    setMessage(data.success)
                    clearInputValues()
                }
                setShowLoading(false);
            })
            .catch((err) => {
                setShowLoading(false);
                setMessage(err.error)
                clearInputValues()
            })

    }



    const [displayMessage, setDisplayMessage] = useState(false);


    useEffect(() => {
        message !== "" && setDisplayMessage(true)
    }, [message])

    return (
        <>
            {canDisplay ? <div className="component-container">
                <div className="display-input">
                    <form className="launcher-form" onSubmit={(e) => sendTrainingToServer(e)}>

                        <label htmlFor="img-slug "
                            className={"mg-bt-5  " + themeColors.textTertiaryColor} ><div className="icon"><FontAwesomeIcon icon={faDocker} /></div>Image Slug </label>

                        <input name="img-slug" value={inputValues.imgSlug} className={"launcher-input  " + themeColors.colorQuaternary + " " + themeColors.textPrimaryColor}  type="text" placeholder="DockerHub_username/image_name" onChange={(e) => setInputValues({ ...inputValues, imgSlug: e.target.value })} />

                        <label htmlFor="output"
                            className={"mg-bt-5 " + themeColors.textTertiaryColor + themeColors.textPrimaryColor} ><div className="icon"><FontAwesomeIcon icon={faFolderTree} /></div>Volume</label>


                        <input name="output" value={inputValues.output} className={"launcher-input  " + themeColors.colorQuaternary + " " + themeColors.textPrimaryColor} type="text" placeholder="/output" onChange={(e) => setInputValues({ ...inputValues, output: e.target.value })} />

                        <br />
                        <div className="display-btn">
                            <button className={"queue-btn " + themeColors.colorSecondary + " " + themeColors.textSecondaryColor}


                                type="submit"> <span>Send to queue</span> </button>
                        </div>
                    </form>
                    <div className={"display-message " + themeColors.textTertiaryColor}>
                        {displayMessage ? message : null}
                        {showLoading ? <img src={lightLoading} alt="wait to load" datacount={count} /> : null}
                    </div>
                </div>
            </div> : <img src={lightLoading} alt="wait to load" />}
        </>
    )
}

export default Launcher;