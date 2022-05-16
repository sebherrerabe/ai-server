import { useCallback, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../../Layout/Layout";
import "./Trainings.css";

import lightLoading from "../../assets/loading/light-loading.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { LogInContext } from "../../../../AppRoutes";

import Row from "./components/Row";


const Trainings = () => {
  const themeColors = useContext(ThemeContext);
  const forContext = useContext(LogInContext);
  let userSession = forContext.userSession;
  const [count, setCount] = useState(0);


  const [canDisplay, setCanDisplay] = useState(false);

  const [loadingQueue, setLoadingQueue] = useState(true);

  const [training, setTraining] = useState([])

  const getTrainings = useCallback(async () => {
    let slowDown = 0;

    try {
      let response = await fetch(`http://api.ai-server.becode.org/get_all_training_queue`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${userSession.jwt}`// From the auth route
        }
      })
      let data = await response.json();
      console.log(data);
      setTraining(data.data);
      setCanDisplay(true);
      let newInterval = setInterval(() => {
        if (slowDown === 1) {
          clearInterval(newInterval);
          slowDown = 0;
          setLoadingQueue(false);
          clearInterval(newInterval);
        }
        slowDown++;
      }, 200);
    } catch (err) {
      console.error(err);
      // Handle errors here
    }
  }, [userSession.jwt, setTraining, setCanDisplay, setLoadingQueue]);


  useEffect(() => {
    getTrainings();
  }, [getTrainings]);


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
          <div className={"training-number  " + themeColors.textTertiaryColor}>You have {training.length} {training.length === 1 ? "training" : "trainings"} in queue</div>
          <div className="training-table">
            {training.queue !== 0 ?
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
                  {training.map((item, index) => <Row key={index} containerDetails={item.containerDetails} status={item.status} artifacts={item.artifacts} finishDate={item.finishDate} />)}
                </tbody>
              </table>
              : null}
          </div>

          {loadingQueue ? <img className="loading-queue" src={lightLoading} alt="loading" /> : <div className="refreshing-msg">It will be refreshed in {seconds} {seconds === 1 ? "second." : "seconds."}</div>}
        </div>
        : <img src={lightLoading} alt="wait to load" />}
    </>

  );
};

export default Trainings;
