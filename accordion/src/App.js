import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';

function App() {
  const questions = data.map(question =><SingleQuestion key={question.id} data={question}/>)
  return <div className="section container ">
    <div><h3>Some Information</h3></div>
            {questions}
  </div>;
}

export default App;
