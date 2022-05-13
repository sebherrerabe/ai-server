import { useContext, useEffect, useState } from "react";
import lightLoading from "../../assets/loading/light-loading.svg";
import { ThemeContext } from "../../../../Layout/Layout";
import "./Queue.css";

import { LogInContext } from "../../../../AppRoutes";

import Row from "./components/Row"

const fakeList = [
{imageName:"arungupta/print-hello", volume:"/output", position: 1},
{imageName:"arungupta/print-bye", volume:"/output", position: 2},
{imageName:"arungupta/print-mom", volume:"/output", position: 3}
]


const Queue = () => {
  const themeColors = useContext(ThemeContext);
  const forContext = useContext(LogInContext);
  let userSession = forContext.userSession;


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


  const getQueue = () => {
    console.log(userSession.jwt)
    fetch(`http://api.ai-server.becode.org/get_user_training_queue`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${userSession.jwt}`, // From the auth route
        "Content-Type": "application/json"
      }
    }
    )
      .then(response => response.json())
      .then(data => {
        console.log(data)
      }
      )
  }
  useEffect(() => {
    getQueue()
  }, [])


  return (
    <>
      {canDisplay ?
        <div className="component-container">
          <div className={"training-number  " + themeColors.textTertiaryColor}>You have {fakeList.length} {fakeList.length === 1 ? "training" : "trainings"} in queue</div>
          <div className="training-table">
            <table>
              <thead>
                <tr>
                  <th className={"container-details  " + themeColors.textTertiaryColor}>Image Name</th>
                  <th className={"status  " + themeColors.textTertiaryColor}>Position</th>
                  <th className={"artifacts  " + themeColors.textTertiaryColor}>Volume</th>
                </tr>
              </thead>
              <tbody>
                {fakeList.map(training => {
                  return <Row imageName={training.imageName} position={training.position} volume={training.volume}/>
                })}
              </tbody>
            </table>
          </div>
          <div className="refreshing-msg">It will be refreshed in {seconds} {seconds === 1 ? "second." : "seconds."}</div>
        </div>
        : <img src={lightLoading} alt="wait to load" />}
    </>
  );
};

export default Queue;
