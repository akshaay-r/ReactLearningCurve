import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2  ">
        <div
          className="flex bg-white shadow-lg flex-wrap rounded 
      justify-center gap-3 px-5 py-3 "
        >
          <button
            onClick={() => {
              setColor("red");
            }}
            className="outline-none p-2 px-4 rounded-full bg-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("brown");
            }}
            className="outline-none p-2 px-4 rounded-full bg-white shadow-lg"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
          <button
            onClick={() => {
              setColor("white");
            }}
            className="outline-none p-2 px-4 rounded-full bg-white shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            onClick={() => {
              setColor("olive");
            }}
            className="outline-none p-2 px-4 rounded-full bg-white shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="outline-none p-2 px-4 rounded-full bg-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="outline-none p-2 px-4 rounded-full bg-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => {
              setColor("black");
            }}
            className="outline-none p-2 px-4 rounded-full bg-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className="outline-none p-2 px-4 rounded-full bg-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
