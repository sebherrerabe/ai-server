import { useContext } from "react";
import { ThemeContext } from "../../../../../Layout/Layout";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink} from '@fortawesome/free-solid-svg-icons';
import { faDownload} from '@fortawesome/free-solid-svg-icons';
import { faCheck} from '@fortawesome/free-solid-svg-icons';

const Row = ({containerId, status, artifactsUrl, finishDate}) => {

    const themeColors = useContext(ThemeContext);
    return ( 
        <tr>
        <td className={"container-details  " + themeColors.textTertiaryColor}>
            <a className={themeColors.textTertiaryColor} href={`http://portainer.ai-server.becode.org/#!/2/docker/containers/${containerId}`}target="_blank">
            <div className="icon">
        <FontAwesomeIcon icon={faLink} />
         </div>
         </a></td>
        <td className={"status  " + themeColors.textTertiaryColor}>{status === "DONE" ? <FontAwesomeIcon icon={faCheck} />: "in progress"}<div className="icon">
        </div></td>
        <td className={"artifacts  " + themeColors.textTertiaryColor}><div className="icon">
        <a className={themeColors.textTertiaryColor} href={artifactsUrl} target="_blank" ><FontAwesomeIcon icon={faDownload} /></a> </div></td>
        <td className={"finish-date  " + themeColors.textTertiaryColor}>{finishDate}</td>
      </tr>
     );
    }


export default Row;