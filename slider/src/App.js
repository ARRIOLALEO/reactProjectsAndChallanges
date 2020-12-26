import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
 const [people, setPeople] = useState(data)
 const [index, setIndex] = useState(0)
 useEffect(()=>{
  let slider = setInterval(() => {
    setIndex(index + 1)
  }, 3000);
  return ()=> clearInterval(slider)
 },[index])
 console.log(people)
  return (
    <>
     <section className="section">
       <div className="title">
         <h2>
           <span></span>/Reviews
         </h2>
       </div>
       <div className="section-center">
         {/* this is my list */}
         {people.map((person,personIndex)=>{
           const {id,image, title ,name ,quote} = person
           let postion = 'nextSlide'
           
           if(index === personIndex){
            postion = 'activeSlide'
           }
           if(index === personIndex - 1 || (index === 0 && personIndex === people.length -1)){
             postion = 'lastSlide'
           }
           return (
             <article key={id} className={postion}>
               <img src={image} alt={title} className="person-img"/>
               <h4>{name}</h4>
               <p className="title">{title}</p>
               <p className="text">{quote}</p>
               <FaQuoteRight className="icon"/>
             </article>
           )
         })}
         <button className="prev" onClick={()=>{
           if((index -1  ) < 0){
              setIndex(people.length -1)
           }else{
            setIndex(prevIndex => prevIndex = prevIndex -1 )
           }
           
         }}><FiChevronLeft/></button>
         <button className="next" onClick={()=>{
           if( index + 1 > people.length - 1){
              setIndex(0)
           }else{
            setIndex(prevIndex => prevIndex = prevIndex + 1 )
           }
         }}><FiChevronRight /></button>
       </div>
     </section>
    </>
  )
}

export default App;
