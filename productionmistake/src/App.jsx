import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(undefined);
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to Landing</h1>
      <button onClick={() => setIsLogin(!isLogin)}>Toggle login</button>

      <div>
        <h3>&& operator</h3>
        {isLogin && <p>Welcome to home</p>}
      </div>

      <div>
        <h2>Ternary operator</h2>
        {isLogin ? <p>Welcome</p> : <p>Please login</p>}
      </div>
    </div>
  );
}

export default App;
