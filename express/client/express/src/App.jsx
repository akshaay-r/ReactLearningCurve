import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      {typeof user.users === "undefined" ? (
        <h1>Loading</h1>
      ) : (
        user.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  );
}

export default App;
