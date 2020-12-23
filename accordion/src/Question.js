import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = (props) => {
  const {title,info} = props.data
  const [open, setOpen] = useState(false)
  const [btnIcon,setSimbol] =  useState(false)
  return <article className="question" >
    <header>
   <h4 className="title"> {title}</h4>
    <button className="btn" onClick={()=>{
        setOpen(prevOpen => !prevOpen)
        setSimbol(prevSimbol => !prevSimbol)
    }}>{btnIcon ? <AiOutlineMinus></AiOutlineMinus>:<AiOutlinePlus></AiOutlinePlus>}</button>
    </header>
      {open ? <p>{info}</p> : <></>}

      

  </article>;
};

export default Question;
