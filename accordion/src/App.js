import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';

function App() {
  const questions = data.map(question =><SingleQuestion key={question.id} data={question}/>)
  return<main> 
    <div className=" container ">
    <div><h3>Some Information</h3></div>
         <section className="info">{questions}</section>   
  </div>;
  </main>
}

export default App;
