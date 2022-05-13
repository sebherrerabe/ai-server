import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../../Layout/Layout";
import "./Trainings.css";

import lightLoading from "../../assets/loading/light-loading.svg";

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
          <div className="training-refreshing-msg">It will be refreshed in {seconds} {seconds === 1 ? "second." : "seconds."}</div>
        </div>
        : <img src={lightLoading} alt="wait to load" />}
    </>
  );
};

export default Trainings;
