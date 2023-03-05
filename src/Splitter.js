import "./Splitter.css";
import { useState } from "react";
import moneyImg from "./images/money.png";
import personImage from "./images/person.png";

function Splitter() {
  const [tipBox, setTipBox] = useState([5, 10, 15, 25, 50]);
  const [inputBill, setInputBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  // const [totalAmount, setTotalAmount] = useState(0);
  console.log( typeof inputBill,people,tipPercentage);

  const billAmountChange = (e) => {
    setInputBill(e.target.value);
  };
  
  // // custom tip
  // const tipChange = (e) => {
  //   setTipPercentage(e.target.valueAsNumber);
  // };
  // const calculateTip = () => {
  //   const tipAmount = inputBill * (tipPercentage / 100);
  //   return tipAmount.toFixed(2);
  //   // const total = Number(inputBill) + tipAmount;
  //   // setTotalAmount(total.toFixed(2));
  // };

  return (
  
    <div className="app">
      {/* <div>
      <h1>SPLITER</h1> 
      </div> */}
      
      <div className="mainContainer">
      {/* <div>Bill:{inputBill}</div>
      <div>people{people}</div>
      <div>tip:{ tipPercentage}</div> */}
      
      
        <div className="billDiv">
          <label className="billTitle">bill</label>

          <input
            type="number"
            className="inputBox"
            placeholder="bill"
            dir="rtl"
            onChange={billAmountChange}
            // value={inputBill}
          >
            {/* <img src={moneyImg} alt="currencyIcon"/>   */}
          </input>
        </div>
        {/* select tip */}
        <div className="tipBox">Select Tip %</div>
        <div className="buttonWrap">

          {tipBox.map((tip, index) => {
           
            return (
              <button
                className="tipButton"
                key={index}
                style={{
                  backgroundColor: tipBox === tip ? "#26C2AE" : "#00474B",
                }}
                onClick={() => {
                  setTipPercentage(0.1);
                  
                  console.log(tip);


                }}
                

              >
                {tip}$
              </button>
            );
          })}
          <input
            className="customBox"
            // value={tipPercentage}
            // onChange={tipChange}
          ></input>
        </div>
        <h4 className="peopleTitle">Number of People</h4>
        <div>
          <input
           type="number"
           className="inputBox"
           onChange={(e) =>{
            setPeople(e.target.valueAsNumber);
           }}
           >
            {/* <img src={personImage} alt="person"/> */}
          </input>
        </div>
        <div className="tipAmountDiv">
          <div>Tip Amount /person{(inputBill * tipPercentage / people).toFixed(2)}</div>
          <div> total / person {(inputBill * (1 + tipPercentage) /people).toFixed(2)}</div>
          <button className="resetButton">RESET</button>
        </div>
      </div>
    </div>
  );
}

export default Splitter;
