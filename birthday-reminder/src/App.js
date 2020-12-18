import React, { useState, useEffect } from 'react';
import data from './data';
import List from './List';
function App() {
const [myData,setMydata]=useState([])
  useEffect(()=>{
     setMydata(prevdata => [...data])
  },[])
 let dataToprint = myData.map((x )=> <List key={x.id} people={x} />)
 return (
    <main>
      <section className="container">
        <h3> {myData.length==0?"0":myData.length} birthdays Today</h3>
        {dataToprint}
        <button onClick={()=> setMydata(prevdata=> [])}>Clear</button>
      </section>
    </main>
  );
}

export default App;
