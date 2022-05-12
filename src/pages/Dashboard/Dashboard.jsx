import { useContext } from "react";
import "./Dashboard.css";
import Launcher from "./components/Launcher/Launcher";
import Queue from "./components/Queue/Queue";
import Trainings from "./components/Past Trainings/Trainings"

import { ThemeContext } from "../../Layout/Layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const themeColors = useContext(ThemeContext);

  return (
    <div className="content  nocolumn">
      <div className="left-container flex">
        <div className="tabs">
          <button className="tabs-btn">
            <FontAwesomeIcon icon={faRightFromBracket} />
            Launcher
          </button>
          <button className="tabs-btn">
            <FontAwesomeIcon icon={faRightFromBracket} />
            Queue
          </button>
          <button className="tabs-btn">
            <FontAwesomeIcon icon={faRightFromBracket} />
            Past Trainings
          </button>
        </div>
      </div>
      <div className="middle-container"></div>
      <div className="right-container flex">
        <div className="right-container-top">
          <div className="welcome-container"></div>
        </div>
        <div className="right-container-bottom">
          <div className="display">
            <div className="display-top">
              <div className="display-top-left">
                <div className="icon-square">
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </div>
              </div>
              <div className="display-top-middle">
                <h2 className="main-title"> Training Launcher</h2>
              </div>
              <div className="display-top-right">
            </div>
            </div>
            <div className="display-bottom">
              <Trainings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
