import React from "react";
import Card from "./Card";
import { useState } from "react";
import useGetUser, { UserProvider } from "../context/User";

function Login() {
  const { username, setUsername } = useGetUser();
  const [password, setPassword] = useState("");
  const getUser = () => {
    setUsername(username);
    setPassword(password);
    alert(`username ${username}`);
  };
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={getUser}>Login</button>
      {username ? <Card /> : <h2>No user signed inn....</h2>}
    </div>
  );
}

export default Login;
