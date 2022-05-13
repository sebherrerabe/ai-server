import { useContext} from "react";
import { ThemeContext } from "../../../../../Layout/Layout";

const Row = ({containerDetails, status, artifacts, finishDate}) => {

    const themeColors = useContext(ThemeContext);
    return ( 
        <tr>
        <th className={"container-details  " + themeColors.textTertiaryColor}>{containerDetails}</th>
        <th className={"status  " + themeColors.textTertiaryColor}>{status}</th>
        <th className={"artifacts  " + themeColors.textTertiaryColor}>{artifacts}</th>
        <th className={"finish-date  " + themeColors.textTertiaryColor}>{finishDate}</th>
      </tr>
     );
}
 
export default Row;