import { useContext } from "react";
import { ThemeContext } from "../../../../../Layout/Layout";


const Row = ({imageName, position, volume}) => {
    const themeColors = useContext(ThemeContext);
    return (
        <tr>
            <td className={themeColors.textTertiaryColor}>{position}</td>
            <td className={themeColors.textTertiaryColor}>{imageName}</td>
            <td className={themeColors.textTertiaryColor}>{volume}</td>
        </tr>
    );
}

export default Row;
