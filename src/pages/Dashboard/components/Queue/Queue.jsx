import { useContext } from "react";
import { ThemeContext } from "../../../../Layout/Layout";
import "./Queue.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Queue = () => {
  const themeColors = useContext(ThemeContext);
  return (
    <div className="component-container">
      <div className={"training-number  " + themeColors.textTertiaryColor}>You have 0 training in queue</div>
      <div className="training-table">
        <table>
          <thead>
            <tr>
              <th className={"container-details  " + themeColors.textTertiaryColor}>The docker image name</th>
              <th className={"status  " + themeColors.textTertiaryColor}>The position of the training in the queue.</th>
              <th className={"artifacts  " + themeColors.textTertiaryColor}>The docker volume.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={"details  "+ themeColors.textTertiaryColor}></td>
              <td className={"done  " + themeColors.textTertiaryColor}></td>
              <td className={"download  " + themeColors.textTertiaryColor}></td>
            </tr>
            <tr>
              <td className={"details  "+ themeColors.textTertiaryColor}></td>
              <td className={"done  " + themeColors.textTertiaryColor}></td>
              <td className={"download  " + themeColors.textTertiaryColor}></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={"training-refreshing-msg  " + themeColors.textTertiaryColor}>Refreshing every 30 seconds</div>
    </div>
  );
};

export default Queue;
