import "./Splitter.css";
import { useState } from "react";
import moneyImg from "./images/money.png";
import personImage from "./images/person.png";
import logo from "./images/logo.png";

function Splitter() {
  const [tipBox, setTipBox] = useState([5, 10, 15, 25, 50]);
  const [inputBill, setInputBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [clickedIndex, setClickedIndex] = useState(null);

  const colorChange = (index) => {
    setClickedIndex(index);
  };

  const billAmountChange = (e) => {
    setInputBill(e.target.value);
  };

  return (
    <div className="app">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <div className="mainContainer">
        <div className="leftBill">
          <label className="billTitle">bill</label>
        </div>
        <div>
          <input
            //  inputmode="numeric"
            // pattern="^\d+(\.\d{1,2})?$"
            placeholder="$"
            type="number"
            className="inputBox"
            dir="rtl"
            onChange={billAmountChange}
          ></input>
        </div>
        

        <div className="tipBox">Select Tip %</div>
        <div className="buttonWrap">
          {tipBox.map((tip, index) => {
            return (
              <button
                className="tipButton"
                key={index}
                onClick={() => {
                  colorChange(index);
                }}
                style={{
                  backgroundColor:
                    clickedIndex === index ? "#26C2AE" : "#00474b"
                }} >{tip}$</button>
            );
          })}

          <input
            className="customBox"
            placeholder="CUSTOM"
          ></input>
        </div>

        <h4 className="peopleTitle">Number of People</h4>
        <div>
          <input
            type="number"
            className="inputBox"
            onChange={(e) => {
              setPeople(e.target.valueAsNumber);
            }}
          ></input>
        </div>


        <div className="tipAmountDiv">
          <div>
            Tip Amount /person
            {((inputBill * tipPercentage) / 100 / people).toFixed(2)}
          </div>
          <div>
            total / person
            {((inputBill * (1 + tipPercentage)) / people).toFixed(2)}
          </div>
          
          <button className="resetButton">RESET</button>
        </div>
      </div>
    </div>
  );
}

export default Splitter;
