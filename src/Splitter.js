import "./Splitter.css";
import { useState } from "react";
// import moneyImg from './images/money.png';

function Splitter(props) {

  const billAmountChange=(e)=>{
    props.setInputBill(e.target.valueAsNumber)
  };
// custom tip
  const tipChange=(e)=>{
    props.setTipPercentage(e.target.valueAsNumber)
  };
  const calculateTotal =()=>{
    const tipAmount= props.inputBill * (props.tipPercentage /100);
    const total =Number(props.inputBill) + tipAmount;
    props.setTotalAmount(total.toFixed(2));
  }
  return (
    <div className="app">
      <div className="mainContainer">
        <h2 className="billTitle">Bill</h2>
        <input 
        type="number"
        className="numberPeople"
        onChange={billAmountChange}
        value={props.
          inputBill}
        >
          {/* <img src={moneyImg} alt="moneyIcon"/> */}
        </input>
        {/* select tip */}
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

        <input
        type="number"
        className="numberPeople">
          {/* <img src={} alt=""/> */}
        </input>
        </div>
        < div className="tipAmountDiv">
          <div>
          <h4>Tip Amount</h4>
          <p>/person</p>
          </div>
          <div>
          <h4>Total</h4>
          <p>/person</p>
          </div>
          <button className="resetButton">RESET</button>
        </div>
        
          
        
      </div>
    </div>
  );
}

export default Splitter;
