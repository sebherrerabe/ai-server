import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../../Layout/Layout";
import "./Trainings.css";

import lightLoading from "../../assets/loading/light-loading.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink} from '@fortawesome/free-solid-svg-icons';
import { faDownload} from '@fortawesome/free-solid-svg-icons';
import { faCheck} from '@fortawesome/free-solid-svg-icons';

const Trainings = () => {



  const themeColors = useContext(ThemeContext);

  const [count, setCount] = useState(0);
  const [canDisplay, setCanDisplay] = useState(false);

  useEffect(() => {
    let newInterval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount === 1) {
          clearInterval(newInterval)
          setCanDisplay(true)
          return 0
        } else {
          prevCount += 1;
        }
        return prevCount
      });
    }, 200);
    return () => { clearInterval(newInterval) };
  }, []);


  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    console.log(seconds)
    let newIntervalo = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 1) {
          clearInterval(newIntervalo)
          return 30
        } else {
          prevSeconds -= 1;
        }
        return prevSeconds
      });
    }, 1000);
    return () => { clearInterval(newIntervalo) };
  }, [seconds])

  return (
    <>
      {canDisplay ?
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
          <div className="training-refreshing-msg">It will be refreshed in {seconds} {seconds === 1 ? "second." : "seconds."}</div>
        </div>
        : <img src={lightLoading} alt="wait to load" />}
    </>

  );
};

export default Trainings;
