import { useContext} from "react";
import { ThemeContext } from "../../../../../Layout/Layout";

const Row = ({imageName,position, volume}) => {

    const themeColors = useContext(ThemeContext);
    return ( 
        <tr>
                  <td className={"details  " + themeColors.textTertiaryColor}>{imageName}</td>
                  <td className={"done  " + themeColors.textTertiaryColor}>{position}</td>
                  <td className={"download  " + themeColors.textTertiaryColor}>{volume}</td>
        </tr>
     );
}
 
export default Row;