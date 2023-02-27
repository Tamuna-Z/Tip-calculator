
import "./App.css";
import Splitter from "./Splitter";
import {useState} from 'react';


function App() {
  const  [selectTip,setSelectTip]=useState([5,10,15,25,50,'Custom']);
  return(
    <div>
      <Splitter selectTip={selectTip}/>
    </div>
  )
  
}

export default App;
