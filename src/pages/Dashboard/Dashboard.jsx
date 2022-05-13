import { useContext, useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Dashboard.css";
import profPic from "../../Layout/assets/img/nerd.jpeg";
import lightLoading from "./assets/loading/light-loading.svg";

import { ThemeContext } from "../../Layout/Layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";


const dashboardComponents = [{ title: "Training Launcher", path: "./launcher", icon: faRocket, btnName: "Launcher" }, { title: "Queue", path: "./queue", icon: faUsers, btnName: "Queue" }, { title: "Past Trainings", path: "./past-trainings", icon: faClockRotateLeft, btnName: "Past Trainings" }]


const Tab = ({ path, icon, btnName, themeColors, setIsActive, index, isActive }) => {

  let amActive = isActive === index ? true : false;

  return (
    <Link to={path} className={`tabs-btn ${amActive ? themeColors.colorSecondary + " " + themeColors.textSecondaryColor : themeColors.colorPrimary + " " + themeColors.textTertiaryColor} `} onClick={() => { setIsActive(index) }}>
      <FontAwesomeIcon icon={icon} className="icons"/>
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
        <div className="display-profpic" style={{ backgroundImage: `url(${profPic})` }}></div>
          <div className={"welcome-container  " + themeColors.textTertiaryColor}>
            <h3>Hello, Name Surname</h3>
            <h5><FontAwesomeIcon icon={faLessThan}/> / <FontAwesomeIcon icon={faGreaterThan}/>Johnsons 7</h5>
          </div>
        </div>
        <div className="right-container-bottom">
          <div className={"display " + themeColors.colorPrimary}>
            <div className="display-top">
              <div className="display-top-left">
                <div className={"icon-square  " + themeColors.textTertiaryColor}>
                  <FontAwesomeIcon icon={title.icon} />
                </div>
              </div>
              <div className="display-top-middle">
                <h2 className={"main-title  " + themeColors.textTertiaryColor}> {title.title}</h2>
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
