import { useState } from 'react';
import { evaluate } from "mathjs"

import './ReactCalc.css';

function ReactCalc() {
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <Claculator />
    </div>
  );
};

const Claculator = () =>{
  const buttons = ["7", "8", "9", "C", "4", "5", "6", "*", "1", "2", "3", "/", "+", "-", "="];
  const [display, setDisplay] = useState("");
  
  const handler = (button) =>{
    
    if(button === "="){
      setDisplay(evaluate(display))
    } else if (button === "C" ){
      setDisplay("")
    } else {
      setDisplay(display + button)
    }
   
  }

  return (
  <div>
    <div>
      <h2>{display}</h2>
    </div>
    <div>
      {buttons.map((button, index) => {
        return <button onClick={()=>handler(button)}>{button}</button>
      })}
    </div>
  </div>);
};


export default ReactCalc;
