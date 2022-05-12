import { useContext } from "react";
import { ThemeContext } from "../../../../Layout/Layout";
import "./Trainings.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Trainings = () => {
  const themeColors = useContext(ThemeContext);
  return (
    <div className="component-container">
      <div className="training-number">You have 3 training in queue</div>
      <div className="training-table">
        <table>
          <thead>
            <tr>
              <th>Container details</th>
              <th>Status</th>
              <th>Artifacts</th>
              <th>Finish date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Details</td>
              <td>Done</td>
              <td>Download</td>
              <td>Date</td>
            </tr>
            <tr>
              <td>Details</td>
              <td>Done</td>
              <td>Download</td>
              <td>Date</td>
            </tr>
            <tr>
              <td>Details</td>
              <td>Done</td>
              <td>Download</td>
              <td>Date</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="training-refreshing-msg">Refreshing every 30 seconds</div>
    </div>
  );
};

export default Trainings;
