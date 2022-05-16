import { useContext } from "react";
import { ThemeContext } from "../../../../../Layout/Layout";

const Row = ({ containerDetails, status, artifacts, finishDate }) => {

  const themeColors = useContext(ThemeContext);
  return (
    <tr>
      <td className={"container-details  " + themeColors.textTertiaryColor}>{containerDetails}</td>
      <td className={"status  " + themeColors.textTertiaryColor}>{status}</td>
      <td className={"artifacts  " + themeColors.textTertiaryColor}>{artifacts}</td>
      <td className={"finish-date  " + themeColors.textTertiaryColor}>{finishDate}</td>
    </tr>
  );
}

export default Row;