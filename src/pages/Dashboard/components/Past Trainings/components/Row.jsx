import { useContext} from "react";
import { ThemeContext } from "../../../../../Layout/Layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink} from '@fortawesome/free-solid-svg-icons';
import { faDownload} from '@fortawesome/free-solid-svg-icons';
import { faCheck} from '@fortawesome/free-solid-svg-icons';

const Row = ({containerDetails, status, artifacts, finishDate}) => {

    const themeColors = useContext(ThemeContext);
    return ( 
        <tr>
        <th className={"container-details  " + themeColors.textTertiaryColor}><div className="icon">
        <FontAwesomeIcon icon={faLink} /></div>{containerDetails}</th>
        <th className={"status  " + themeColors.textTertiaryColor}>{status == "DONE" ? <FontAwesomeIcon icon={faCheck} />: "in progress"}<div className="icon">
        </div></th>
        <th className={"artifacts  " + themeColors.textTertiaryColor}><div className="icon">
        <FontAwesomeIcon icon={faDownload} /></div>{artifacts}</th>
        <th className={"finish-date  " + themeColors.textTertiaryColor}>{finishDate}</th>
      </tr>
     );
}
 
export default Row;