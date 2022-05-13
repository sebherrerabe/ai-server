import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

import { ThemeContext } from "../../Layout/Layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";


const dashboardComponents = [{ title: "Training Launcher", path: "./launcher", icon: faRightFromBracket, btnName: "Launcher" }, { title: "Queue", path: "./queue", icon: faRightFromBracket, btnName: "Queue" }, { title: "Past Trainings", path: "./past-trainings", icon: faRightFromBracket, btnName: "Past Trainings" }]


const Tab = ({ path, icon, btnName, themeColors, setIsActive, index, isActive }) => {

  let amActive = isActive === index ? true : false;

  return (
    <Link to={path} className={`tabs-btn ${amActive ? themeColors.colorSecondary + " " + themeColors.textSecondaryColor : themeColors.colorPrimary + " " + themeColors.textPrimaryColor} `} onClick={() => { setIsActive(index) }}>
      <FontAwesomeIcon icon={icon} />
      {btnName}
    </Link>)
}



const TabsBar = ({ themeColors, setIsActive, isActive }) => {
  return (
    <div className="tabs">
      {dashboardComponents.map((tab, index) => {
        return <Tab key={index} path={tab.path} icon={tab.icon} btnName={tab.btnName} themeColors={themeColors} setIsActive={setIsActive} index={index} isActive={isActive} />
      })}
    </div>)
}

const Dashboard = () => {

  const [isActive, setIsActive] = useState(0);


  const [title, setTitle] = useState({ title: "", icon: dashboardComponents[0].icon })

  useEffect(() => {
    setTitle({ title: dashboardComponents[isActive].title, icon: dashboardComponents[isActive].icon })
  }, [isActive]);

  const themeColors = useContext(ThemeContext);
  return (
    <div className="content  nocolumn">
      <div className="left-container flex">
        <TabsBar themeColors={themeColors} setIsActive={setIsActive} isActive={isActive} />
      </div>
      <div className="middle-container"></div>
      <div className="right-container flex">
        <div className="right-container-top">
          <div className="welcome-container"></div>
        </div>
        <div className="right-container-bottom">
          <div className={"display " + themeColors.colorPrimary}>
            <div className="display-top">
              <div className="display-top-left">
                <div className="icon-square">
                  <FontAwesomeIcon icon={title.icon} />
                </div>
              </div>
              <div className="display-top-middle">
                <h2 className="main-title"> {title.title}</h2>
              </div>
              <div className="display-top-right">
              </div>
            </div>
            <div className="display-bottom">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
