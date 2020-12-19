import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState([]);

  const callTheApi = async () => {
    try {
      const calltheApi = await fetch(url);
      if (!calltheApi.ok) {
        throw new Error("this is not workinbg");
      }
      const resolution = await calltheApi.json();
      setTours((prevTours) => [...resolution]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    callTheApi();
  }, []);
  const loading = <Loading></Loading>;
  const tour = <Tours allTours={tours}></Tours>;
  return <div>{tours.length == 0 ? loading : tour}</div>;
}

export default App;
