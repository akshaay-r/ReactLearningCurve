import { useState } from "react";
// import conf from "./conf/conf";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { useEffect } from "react";
import { login, logout } from "./store/authslice";
import { Footer, Header } from "./components";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUSer()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-600 ">
      <div className="w-200">
        <Header />
        <main>
          {/* <Outlet /> */}
          TODO
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
