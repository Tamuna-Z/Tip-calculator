import "./Splitter.css";
import { useState } from "react";
import moneyImg from "./images/money.png";
import personImage from "./images/person.png";

function Splitter() {
  const [tipBox, setTipBox] = useState([5, 10, 15, 25, 50]);
  const [inputBill, setInputBill] = useState();
  const [people, setPeople] = useState(null);
  const [tipPercentage, setTipPercentage] = useState(null);
  // const [totalAmount, setTotalAmount] = useState(0);

  const billAmountChange = (e) => {
    setInputBill(e.target.value);
  };
  console.log(tipPercentage);
  // // custom tip
  // const tipChange = (e) => {
  //   setTipPercentage(e.target.valueAsNumber);
  // };
  const calculateTip = () => {
    const tipAmount = inputBill * (tipPercentage / 100);
    return tipAmount.toFixed(2);
    // const total = Number(inputBill) + tipAmount;
    // setTotalAmount(total.toFixed(2));
  };

  return (
    <div className="app">
      <div className="mainContainer">
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
                key={tip}
                style={{
                  backgroundColor: tipBox === tip ? "#26C2AE" : "#00474B",
                }}
                onClick={() => {
                  setTipPercentage(tip);
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
          <input type="number" className="inputBox">
            {/* <img src={personImage} alt="person"/> */}
          </input>
        </div>
        <div className="tipAmountDiv">
          <div>Tip Amount /person{}</div>
          <div> total / person {}</div>
          <button className="resetButton">RESET</button>
        </div>
      </div>
    </div>
  );
}

export default Splitter;
