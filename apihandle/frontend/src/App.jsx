import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  // const { error, loading, products } = customReactQuery("/api/getProducts");

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/getProducts?search=" + search, {
          signal: controller.signal,
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled ", error);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();

    //cleanup
    return () => {
      controller.abort();
    };
  }, [search]);

  // if (error) {
  //   return <h1>Something went wrong</h1>;
  // }

  // if (loading) {
  //   return <h1>Loading.....</h1>;
  // }

  return (
    <>
      <h1>Start with API</h1>
      <input
        type="text"
        value={search}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <h1>Loading ..... </h1>}
      {error && <h1>Something went wrong</h1>}

      <h2>Number of products : {products.length}</h2>
    </>
  );
}

export default App;

// const customReactQuery = (urlPath) => {
//   return {
//     error,
//     loading,
//     products,
//   };
// };
