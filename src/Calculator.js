// import React, { useState } from 'react';

// function Calculator() {
//   const [billAmount, setBillAmount] = useState('');
//   const [tipPercentage, setTipPercentage] = useState(15);

//   function handleBillAmountChange(event) {
//     setBillAmount(event.target.value);
//   }

//   function handleTipPercentageChange(event) {
//     setTipPercentage(event.target.value);
//   }

//   function calculateTip() {
//     const tipAmount = (billAmount * tipPercentage) / 100;
//     return tipAmount.toFixed(2);
//   }

//   function calculateTotal() {
//     const totalAmount = Number(billAmount) + Number(calculateTip());
//     return totalAmount.toFixed(2);
//   }

//   return (
//     <div>
//       <h1>Tip Calculator</h1>
//       <label>
//         Bill amount: $
//         <input type="number" value={billAmount} onChange={handleBillAmountChange} />
//       </label>
//       <br />
//       <label>
//         Tip percentage:
//         <select value={tipPercentage} onChange={handleTipPercentageChange}>
//           <option value="15">15%</option>
//           <option value="20">20%</option>
//           <option value="25">25%</option>
//         </select>
//       </label>
//       <br />
//       <p>Tip amount: ${calculateTip()}</p>
//       <p>Total amount: ${calculateTotal()}</p>
//     </div>
//   );
// }

// export default Calculator;



