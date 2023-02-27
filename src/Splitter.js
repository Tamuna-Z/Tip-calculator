import "./Splitter.css";
import { useState } from "react";
// import moneyImg from './images/money.png';

function Splitter(props) {
  return (
    <div className="app">
      <div className="mainContainer">
        <h2 className="billTitle">Bill</h2>
        <input className="inputNumber">
          {/* <img src={moneyImg} alt="moneyIcon"/> */}
        </input>
        <div className="selectTip">Select Tip %</div>
        <div>
          {props.selectTip.map((tip, index) => {
            return (
              <button
              className="tipButton"
                key={index}
                style ={{backgroundColor:props.selectTip === tip ? '#26C2AE' : '#00474B'
              }}
                onClick={()=>{
                  props.setSelectTip(tip);
                }}
              >{tip}$</button>
            );
          })}
        </div>
        <h4 className="peopleTitle">Number of People</h4>
        <div>
        <input className="inputNumber">
          {/* <img src={} alt=""/> */}
        </input>
        </div>
        < div className="tipAmountDiv">
          <h4>Tip Amount</h4>
          <h3>/person</h3>
          <h4>Total</h4>
          <h3>/person</h3>
          <button className="resetButton">RESET</button>
        </div>
        
          
        
      </div>
    </div>
  );
}

export default Splitter;
