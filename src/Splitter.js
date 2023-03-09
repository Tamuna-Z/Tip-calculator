import "./Splitter.css";
import { useState , useEffect} from "react";
import moneyImg from "./images/money.png";
import personImage from "./images/person.png";
import logo from "./images/logo.png";

function Splitter() {
  const [tipBox, setTipBox] = useState([5, 10, 15, 25, 50]);
  const [inputBill, setInputBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [people, setPeople] = useState(0);
  const [clickedIndex, setClickedIndex] = useState(null);

  const colorChange = (index) => {
    setClickedIndex(index);
  };

  const billAmountChange = (e) => {
    setInputBill(parseInt(e.target.value));
  };
  console.log(inputBill);

  let calculateTotalTip = (inputBill * tipPercentage /100) / people;
// let calculateTipPerPerson=(calculateTotalTip / people) + inputBill ;
let calculateTipPerPerson =(inputBill/people) +calculateTotalTip;
   
  


console.log(tipPercentage);
// useEffect(()=>{
//   if(inputBill > 0 && people > 0 && tipPercentage > 0){
//     setCalculatedTip(inputBill * (tipPercentage /100));
//     setTotal(calculatedTip + inputBill)
//   }
// },[inputBill, people,tipPercentage,calculatedTip]);

 

  return (
    <div className="app">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <div className="mainContainer">
        <div className="billDiv">
          <label className="billTitle">Bill</label>
        </div>
        <div>
          <input
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
                  // აქ უნდა იყოს 
                  setTipPercentage(tip);
                }}
                style={{
                  backgroundColor:
                    clickedIndex === index ? "#26C2AE" : "#00474b"
                }} >{tip}$</button>
            );
          })}

          <input
            className="customBox"
            placeholder="Custom"
          ></input>
        </div>

       <div className="peopleContainer">
       <div className="peopleWrapper">
          <label className="peopleTitle">Number of People</label>
        {/* <p>Error </p> */}
        </div>
        
        <div className="inputIcon">
          <input
            type="number"
            className="icon"
            onChange={(e) => {
              setPeople(parseFloat(e.target.valueAsNumber));
            }}
          /><img src={personImage}/>
          
        </div>
       </div>


        <div className="tipAmountContainer">
          <div className="tipResult">
            <div><h3>Tip Amount</h3></div>
            <div><p>{calculateTotalTip.toFixed(2)}</p></div>
          </div>
          <div className="totalResult">
          <div><h3>Total Amount</h3></div>
           <div> {calculateTipPerPerson.toFixed(2)
            }</div>
          </div>
          
          <button className="resetButton">RESET</button>
        </div>
      </div>
    </div>
  );
}

export default Splitter;
