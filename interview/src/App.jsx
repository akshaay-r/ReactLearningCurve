import { useState } from "react";

import "./App.css";

function App() {
  console.log("App rendered");

  const [value, setValue] = useState(1);
  // const [value, setValue] = useState(1);
  // // const [multipliedValue, setMultipliedValue] = useState(1);
  // let multipledValue = value * 5;

  // const multiplyByFive = () => {
  //   setValue(value + 1);
  // };

  const ClickMe = () => {
    console.log("Logged");
  };

  return (
    <>
      <h1>Main Value : {value} </h1>
      <button onClick={ClickMe}>Click to multiply by 5</button>
      <h2>Multiplied value : {multipledValue}</h2>
    </>
  );
}

export default App;
