import { Children } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const UserContext = createContext({
  username: "",
  setUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export default function useGetUser() {
  return useContext(UserContext);
}
