import React, { useState } from 'react';

const Tour = (tourInfo) => {
  return (
    <article className="single-tour" id={tourInfo.tourInfo.id}> 
      
    
     <img src={tourInfo.tourInfo.image}/>
     <h5 className="title">{tourInfo.tourInfo.name}</h5> 
     <span className="tour-price ">{tourInfo.tourInfo.price}</span>
     <p className="tour-info">{tourInfo.tourInfo.info}<button className="btn">Read more</button></p>     
     
     <button className="delete-btn" onClick={()=>{
       document.getElementById(tourInfo.tourInfo.id).innerHTML=""
     }}>Delete</button>
     <footer></footer>     
      </article>
    )
};

export default Tour;
