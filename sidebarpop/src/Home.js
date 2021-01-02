import React from 'react'
import { FaBars } from 'react-icons/fa'
import {useGlovalContext} from './context'
const Home = () => {
  const {showPopUp,showSidebar}= useGlovalContext()
  return (
   <main>
     <button className="sidebar-toggle" onClick={showSidebar}><FaBars/></button>
     <button className="btn" onClick={showPopUp}>Show Modal</button>
   </main>
    )
}

export default Home
