

import "./App.css"

import {useState} from "react";
function App() {

  const [scoreCount ,setscoreCount] = useState(70);
  const [wicketCount ,setwicketCount] = useState(0);
  const [overCount ,setoverCount] = useState(10);

  if(scoreCount >100){
    return <h1 className="status">India Won</h1>
  }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{scoreCount}
          <h1 className="scoreCount">
            {
              scoreCount
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              wicketCount
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              overCount
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1"  onClick={()=>{setscoreCount(scoreCount+1)}}>Add 1</button>
        <button className="addScore4" onClick={()=>{setscoreCount(scoreCount+4)}}>Add 4</button>
        <button className="addScore6"  onClick={()=>{setscoreCount(scoreCount+6)}}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button  onClick={()=>{

          if(wicketCount>=10){
            return;
          }
          setwicketCount(wicketCount+1)}}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>{
          
          if(overCount===(overCount+0.6)){
            setoverCount(Math.floor(overCount)+1);
            return
          }
          setoverCount(overCount+0.1)}}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;