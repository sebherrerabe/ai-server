import { useContext } from "react";
import { ThemeContext } from "../../../../Layout/Layout";
import "./Trainings.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink} from '@fortawesome/free-solid-svg-icons';
import { faDownload} from '@fortawesome/free-solid-svg-icons';
import { faCheck} from '@fortawesome/free-solid-svg-icons';

const Trainings = () => {
  const themeColors = useContext(ThemeContext);
  return (
    <div className="component-container">
      <div className={"training-number  " + themeColors.textTertiaryColor}>You have 3 trainings in queue</div>
      <div className="training-table">
        <table>
          <thead>
            <tr>
              <th className={"container-details  " + themeColors.textTertiaryColor}>Container details</th>
              <th className={"status  " + themeColors.textTertiaryColor}>Status</th>
              <th className={"artifacts  " + themeColors.textTertiaryColor}>Artifacts</th>
              <th className={"finish-date  " + themeColors.textTertiaryColor}>Finish date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={"details  "+ themeColors.textTertiaryColor}><FontAwesomeIcon icon={faLink} className={"icons  " + themeColors.textTertiaryColor}/>Details</td>
              <td className={"done  " + themeColors.textTertiaryColor}><FontAwesomeIcon icon={faCheck} className={"icons  " +themeColors.textTertiaryColor}/>Done</td>
              <td className={"download  " + themeColors.textTertiaryColor}><FontAwesomeIcon icon={faDownload} className={"icons  " + themeColors.textTertiaryColor} />Download</td>
              <td className={"date  " +  themeColors.textTertiaryColor}>Date</td>
            </tr>
            <tr>
            <td className={"details  "+ themeColors.textTertiaryColor}><FontAwesomeIcon icon={faLink} className={"icons  " + themeColors.textTertiaryColor}/>Details</td>
            <td className={"done  " + themeColors.textTertiaryColor}><FontAwesomeIcon icon={faCheck} className={"icons  " +themeColors.textTertiaryColor}/>Done</td>
            <td className={"download  " + themeColors.textTertiaryColor}><FontAwesomeIcon icon={faDownload} className={"icons  " + themeColors.textTertiaryColor} />Download</td>
            <td className={"date  " +  themeColors.textTertiaryColor}>Date</td>
            </tr>
            <tr>
            <td className={"details  "+ themeColors.textTertiaryColor}><FontAwesomeIcon icon={faLink} className={"icons  " + themeColors.textTertiaryColor}/>Details</td>
            <td className={"done  " + themeColors.textTertiaryColor}><FontAwesomeIcon icon={faCheck} className={"icons  " +themeColors.textTertiaryColor}/>Done</td>
            <td className={"download  " + themeColors.textTertiaryColor}><FontAwesomeIcon icon={faDownload} className={"icons  " + themeColors.textTertiaryColor} />Download</td>
            <td className={"date  " +  themeColors.textTertiaryColor}>Date</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={"training-refreshing-msg  " + themeColors.textTertiaryColor}>Refreshing every 30 seconds</div>
    </div>
  );
};

export default Trainings;
