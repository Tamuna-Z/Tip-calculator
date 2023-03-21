import "./Splitter.css";
import { useState, useEffect } from "react";
import moneyImg from "./images/money.png";
import personImage from "./images/person.png";
import logo from "./images/logo.png";

function Splitter() {
  const tipBox= [5, 10, 15, 25, 50];
  const [inputBill, setInputBill] = useState(null);
  const [tipPercentage, setTipPercentage] = useState(null);
  
  const [people, setPeople] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [peopleError, setPeopleError] = useState(null);

  const colorChange = (index) => {
    setClickedIndex(index);
  };

  const billAmountChange = (e) => {
    setInputBill(parseInt(e.target.value));
  };

  const customTip=(e) =>{
    setTipPercentage(parseInt(e.target.value));
  }

  let calculateTotalTip = (inputBill * tipPercentage) / 100 / people;
  let calculateTipPerPerson = inputBill / people + calculateTotalTip;

  const showTip = !(
    calculateTotalTip.toFixed(2) === "NaN" ||
    calculateTotalTip.toFixed(2) === "Infinity"
  );
  const showTotal = !(
    calculateTipPerPerson.toFixed(2) === "NaN" ||
    calculateTipPerPerson.toFixed(2) === "Infinity"
  );

  useEffect(() => {
    if (people === 0) {
      setPeopleError(`can't be zero`);
    } else {
      setPeopleError("");
    }
  }, [people]);

  // const resetClick=()=>{
    
  //     setInputBill(0);
  //     setTipPercentage(0);
  //     setPeople(0);
      
  // }
  return (
    <div className="app">
      <div className="logoImg">
        <img src={logo} alt="logo" />
      </div>

      
          <div className="mainContainer">
            <div className="firstBox">
              <div className="billDiv">
                <label className="billTitle">Bill</label>
              </div>
              <div className="inputIcon">
              <img className="inputMoney" src={moneyImg} alt="moneyImg"/>
                <input
                  placeholder="0"
                  type="number"
                  className="inputBox"
                  dir="rtl"
                  onChange={billAmountChange}
                  value={inputBill}
                ></input>
              </div>

              <div className="tipBox">Select Tip %</div>
              <div className="buttonWrap">
                {tipBox.map((tip, index) => {
                  return (
                    <button
                      className="tipButton"
                      key={index}
                      value={tipPercentage}
                      onClick={() => {
                        colorChange(index);
                        setTipPercentage(tip);
                      }}
                      style={{
                        backgroundColor:
                          clickedIndex === index ? "#26C2AE" : "#00474b",
                      }}
                    >
                      {tip}$
                    </button>
                  );
                })}

                <input className="customBox" 
                type="number"
                value={tipPercentage}
                placeholder="Custom"
                onChange={customTip}
                ></input>
              </div>

              <div className="peopleContainer">
                <div className="peopleWrapper">
                  <label className="peopleTitle">Number of People</label>
                </div>

                <div className="inputIcon">
                <img className="personIcon" src={personImage} alt="personIcon" />
                  <input
                   placeholder="0"
                    type="number"
                    value={people}
                    dir="rtl"
                    min={0}
                    step={1}
                    onKeyDown={(e) => {
                      if (e.key === ".") {
                        e.preventDefault();
                      }
                    }}
                    className="icon"
                    onChange={(e) => {
                      setPeople(parseFloat(e.target.valueAsNumber));
                    }}
                  />
                  <div className="errorDiv">{peopleError}</div>
                 
                </div>
              </div>
              </div>
            
          {/* second box */}

          <div className="tipAmountContainer">
              <div className="tipResult">
                <div>
                  <h3>Tip Amount</h3>
                  <p className="personP">/person</p>
                </div>
                <div>
                  <p className="zero">{showTip ? calculateTotalTip.toFixed(2) : "0.00"}</p>
                </div>
              </div>
              <div className="totalResult">
                <div className="totalDiv">
                  <h3 >Total Amount</h3>
                  <p className="personP">/person</p>
                </div>
                <div>
                  <p className="zero">{showTotal ? calculateTipPerPerson.toFixed(2) : "0.00"}</p>
                </div>
              </div>
             <div className="resetButtonDiv"> <button 
              className="resetButton"
              type="reset"
              // onClick={resetClick}
              >RESET</button></div>
            </div>

          
        </div>
    </div>
  );
}


export default Splitter;
