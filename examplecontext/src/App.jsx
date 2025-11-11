import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login";
import Card from "./components/Card";
import { ThemeProvideer } from "./context/Theme";
import { useEffect } from "react";
import { UserProvider } from "./context/User";

function App() {
  const [themeMode, setThemeMode] = useState("dark");

  const lightMode = () => {
    setThemeMode("light");
  };

  const darkMode = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <UserProvider>
        <ThemeProvideer value={{ themeMode, lightMode, darkMode }}>
          <Login></Login>
        </ThemeProvideer>
      </UserProvider>
    </>
  );
}

export default App;
