import { useContext } from "react";
import { ThemeContext } from "../../../../../Layout/Layout";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink} from '@fortawesome/free-solid-svg-icons';
import { faDownload} from '@fortawesome/free-solid-svg-icons';
import { faCheck} from '@fortawesome/free-solid-svg-icons';

const Row = ({containerDetails, status, artifacts, finishDate}) => {

    const themeColors = useContext(ThemeContext);
    return ( 
        <tr>
        <td className={"container-details  " + themeColors.textTertiaryColor}><div className="icon">
        <FontAwesomeIcon icon={faLink} /></div>{containerDetails}</td>
        <td className={"status  " + themeColors.textTertiaryColor}>{status === "DONE" ? <FontAwesomeIcon icon={faCheck} />: "in progress"}<div className="icon">
        </div></td>
        <td className={"artifacts  " + themeColors.textTertiaryColor}><div className="icon">
        <FontAwesomeIcon icon={faDownload} /></div>{artifacts}</td>
        <td className={"finish-date  " + themeColors.textTertiaryColor}>{finishDate}</td>
      </tr>
     );
    }


export default Row;