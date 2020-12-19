import { all } from 'q';
import React from 'react';
import Tour from './Tour';
const Tours = (allTours) => {

 const showTours = allTours.allTours.map(tourdisplay =><Tour key={tourdisplay.id} tourInfo={tourdisplay}/>)
  return <div>
 { showTours} 
  </div>;

};

export default Tours;
