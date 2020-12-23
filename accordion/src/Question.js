import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = (props) => {
  const {title,info} = props.data
  const [open, setOpen] = useState(false)
  const [btnIcon,setSimbol] =  useState(false)
  return <div className="question">
    {title}
    <button className="btn" onClick={()=>{
        setOpen(prevOpen => !prevOpen)
        setSimbol(prevSimbol => !prevSimbol)
    }}>{btnIcon ? <AiOutlineMinus></AiOutlineMinus>:<AiOutlinePlus></AiOutlinePlus>}</button>
  
      {open ? <p>{info}</p> : <></>}

      

  </div>;
};

export default Question;
