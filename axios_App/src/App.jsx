// App.jsx

import axios from "axios";
import React from "react";

function App() {
  const BASE_URL = import.meta.env.VITE_BASE_PRODUCTION_URL;
  const DEV_URL = import.meta.env.VITE_BASE_DEV_URL;

  const currentEnvironment = import.meta.env.MODE;

  const baseURL =
    currentEnvironment === "PRODUCTION" ? BASE_URL : DEV_URL;

  async function getAllPosts() {
    try {
      let response = await axios.get(baseURL);
      console.log("Response by first method", response);
    } catch (error) {
      console.error("Error", error);
    }
  }

  function getDataMethod2() {
    axios.get(baseURL)
      .then((resp) => {
        console.log("Response by second method", resp);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function getDataMethod3() {
    try {
      const resp = await axios({
        method: "get",
        url: baseURL,
      });
      console.log("Response by third method", resp);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1>CURRENT ENVIRONMENT: {currentEnvironment}</h1>
      <button onClick={getAllPosts}>Get Data</button>
      <button onClick={getDataMethod2}>Get Data Method 2</button>
      <button onClick={getDataMethod3}>Get Data Method 3</button>
    </>
  );
}

export default App;
