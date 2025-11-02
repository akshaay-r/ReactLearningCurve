import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState({});
  //   useEffect(() => {
  // //     fetch("https://api.github.com/users/akshaay-r")
  // //       .then((response) => response.json())
  // //       .then((data) => {
  // //         console.log(data);
  // //         setData(data);
  // //       })
  // //       .catch((error) => console.error("Fetch error:", error));
  // //   }, []);
  return (
    <div className="text-center m-4 bg-grey-600 text-black text-3xl">
      Github Followers : {data.followers}
      <img src={data.avatar_url} width={250} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/akshaay-r");
  return res.json();
};
