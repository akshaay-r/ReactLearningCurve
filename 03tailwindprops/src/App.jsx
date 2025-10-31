import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  let myObj = {
    name: "akshay",
    age: 21,
  };

  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl  p-5">Tailwind Test</h1>
      <Card username="akshay" btntext="View more" />
      <Card username="aksah" />
    </>
  );
}

export default App;
