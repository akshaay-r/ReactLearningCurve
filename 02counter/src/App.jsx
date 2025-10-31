import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);
  //let counter = 16

  const addValue = () => {
    //counter = counter + 1;
    setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter === 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
    console.log("Clicked");
  };

  return (
    <>
      <h1>Code with react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value {counter} </button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  );
}

export default App;
