import { useState } from 'react';
import './App.css';

function App() {
const [myNum,myNumState] = useState(0);

const incre = () =>{
  myNumState(myNum + 1)
}
const decre = () =>{
  if(myNum>0){

    myNumState(myNum - 1)
  }
  else{
    alert("You reached your limit")
  }
}

  return (
    <div>
      <div className="container">
      <div className="button-container">
      <h2>{myNum}</h2>

      <button onClick={incre}>+</button>
      <button onClick={decre}>-</button>
      </div>

      </div>
    </div>
  );
}

export default App;
