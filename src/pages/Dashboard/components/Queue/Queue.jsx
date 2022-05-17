import { useContext, useEffect, useState, useCallback } from "react";
import lightLoading from "../../assets/loading/light-loading.svg";
import { ThemeContext } from "../../../../Layout/Layout";

import Row from "./components/Row";
import "./Queue.css"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate } from '@fortawesome/free-solid-svg-icons'


import { LogInContext } from "../../../../AppRoutes";



const Queue = () => {
  const themeColors = useContext(ThemeContext); // this is the theme context to change the color of the text and background in dark mode
  const forContext = useContext(LogInContext); // this is the context to get the user info from the login page
  let userSession = forContext.userSession; // this is the user info from the login page


  const [canDisplay, setCanDisplay] = useState(false); // this is the state to check if we can display the queue or not

  const [loadingQueue, setLoadingQueue] = useState(true); // this is the state to check if we display the loading animation or not

  const [queue, setQueue] = useState([]); // this is the state to store the queue

  // this is the state to slow down the loading animation



  const [seconds, setSeconds] = useState(30); // this is the state to store the seconds to refresh the queue

  // here we are getting the queue from the server
  const getQueue = useCallback(async () => {
    let slowDown = 0;
    setLoadingQueue(true);
    setSeconds(30)
    try {
      let response = await fetch(`http://api.ai-server.becode.org/get_user_training_queue`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${userSession.jwt}`, // From the auth route
          "Content-Type": "application/json"
        }
      }
      )
      let data = await response.json();
      setQueue(data.data);
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
  }, [userSession.jwt, setQueue, setCanDisplay, setLoadingQueue]);




  useEffect(() => {
    getQueue();
  }, [getQueue]);


  useEffect(() => { // this is the effect to refresh the queue every 30 seconds
    if (seconds === 30) { // if the seconds is 30 we are getting the queue
      getQueue();
    }
    let newInterval = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 1) {
          clearInterval(newInterval)
          return 30
        } else {
          prevSeconds -= 1;
        }
        return prevSeconds
      });
    }, 1000);
    return () => { clearInterval(newInterval) };
  }, [seconds, getQueue])





  return (
    <>
      {canDisplay ?
        <div className="component-container">
          <div className={"training-number  " + themeColors.textTertiaryColor}>You have {queue.length} {queue.length === 1 ? "training" : "trainings"} in queue</div>
          <div className="training-table">
            {queue.length !== 0 ?
              <table id="queue">
                <thead>
                  <tr className={themeColors.textTertiaryColor}>
                    <th>Position</th>
                    <th>Image Name</th>
                    <th>Volume</th>
                  </tr>
                </thead>
                <tbody>
                  {queue.map((item, index) => <Row key={index} position={item.positionInQueue} imageName={item.dockerImageName} volume={item.dockerVolume} />)}
                </tbody>
              </table>
              : null}
          </div>

          <div className={"refreshing-msg " + themeColors.textTertiaryColor} >
            {loadingQueue ? <img className="loading-queue" src={lightLoading} alt="loading" /> : <><div className="icon rotate" onClick={() => { getQueue() }}> < FontAwesomeIcon icon={faRotate} /></div> <p> It will be refreshed in {seconds} {seconds === 1 ? "second." : "seconds."}</p></>}
          </div>

        </div>
        : <img src={lightLoading} alt="wait to load" />}
    </>
  );
};

export default Queue;


