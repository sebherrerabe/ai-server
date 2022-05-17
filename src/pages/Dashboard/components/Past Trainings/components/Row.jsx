import { useContext } from "react";
import { ThemeContext } from "../../../../../Layout/Layout";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Row = ({ containerId, status, artifactsUrl, finishDate }) => {
    const themeColors = useContext(ThemeContext);
    return (
        <tr>
            <td className={"container-details  " + themeColors.textTertiaryColor}>
                <div className="a-con">
                    <a className={themeColors.textTertiaryColor} href={`http://portainer.ai-server.becode.org/#!/2/docker/containers/${containerId}`} target="_blank" rel="noreferrer">
                        <div className="icon">
                            <FontAwesomeIcon icon={faLink} />
                        </div>
                    </a>
                </div></td>
            <td className={"status  " + themeColors.textTertiaryColor}><div className="a-con"> <div className="icon"><FontAwesomeIcon icon={faCheck} /></div> </div></td>
            <td className={"artifacts  " + themeColors.textTertiaryColor}>
                <div className="a-con">
                    <a className={themeColors.textTertiaryColor} href={artifactsUrl} target="_blank" rel="noreferrer" ><div className="icon"><FontAwesomeIcon icon={faDownload} /></div></a>
                </div></td>
            <td className={"finish-date  " + themeColors.textTertiaryColor}>{finishDate}</td>
        </tr>
    );
}


export default Row;