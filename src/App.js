import "./App.css";
import Splitter from "./Splitter";
import { useState } from "react";

function App() {
  const [selectTip, setSelectTip] = useState([5, 10, 15, 25, 50, "Custom"]);
  const [inputBill, setInputBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState(5);
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <div>
      <Splitter
        selectTip={selectTip}
        setSelectTip={setSelectTip}
        inputBill={inputBill}
        setInputBill={setInputBill}
      />
    </div>
  );
}

export default App;
