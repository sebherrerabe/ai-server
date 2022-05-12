import { useContext } from "react";
import { ThemeContext } from "../../../../Layout/Layout";
import "./Queue.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Queue = () => {
  const themeColors = useContext(ThemeContext);
  return (
    <div className="component-container">
      <div className="display-queue">
        <div className="queue-number">You have 0 training in queue</div>
        <div className="refreshing-msg">Refreshing every 30 seconds</div>
      </div>
    </div>
  );
};

export default Queue;
