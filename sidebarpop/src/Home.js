import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import {AppContext,useGlovalContext} from './context'
const Home = () => {
  const data = useGlovalContext()
  console.log(data)
  return (
   <main>
     <button className="sidebar-toggle"><FaBars/></button>
     <button className="btn" onClick>Show Modal</button>
   </main>
    )
}

export default Home
