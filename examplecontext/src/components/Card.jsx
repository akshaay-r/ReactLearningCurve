import React from "react";
import useTheme from "../context/Theme";
import { useEffect } from "react";
import { useState } from "react";
import useGetUser from "../context/User";

function Card() {
  const { themeMode, lightMode, darkMode } = useTheme();
  const [clicked, setClicked] = useState(false);
  const { username } = useGetUser();

  const ChangeTheme = () => {
    if (clicked) {
      lightMode();
    } else {
      darkMode();
    }
    setClicked(!clicked);
  };

  return (
    <div>
      {username}
      <button onClick={ChangeTheme}>
        Toggle to {themeMode === "light" ? "light" : "dark"} mode{" "}
      </button>
    </div>
  );
}

export default Card;
