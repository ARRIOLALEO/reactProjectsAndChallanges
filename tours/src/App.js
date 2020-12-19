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
  const tour = <main><Tours allTours={tours}></Tours><button className="btn" onClick={()=>setTours(prevTours=> [])}> Remove all the Tours</button></main>;
  return <>{tours.length == 0 ? loading : tour}</>

}

export default App;
