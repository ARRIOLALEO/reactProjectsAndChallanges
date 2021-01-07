import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from './context'
      
const Navbar = () => {
 
      const {openSidebar,openSubMenu ,closeSubMenu,addTheHovered,isHovered} = useGlobalContext()
      const handleSubmenu = (e) => {
        if (!e.target.classList.contains('link-btn')) {
          closeSubMenu();
        }
      };
      const displaySubMenu = (e) =>{
        addTheHovered(e.target.firstChild.data , e.target.getBoundingClientRect().x + 80)
        openSubMenu()
      }
  return <nav className="nav" onMouseOver={handleSubmenu}>
       <div className="nav-center">
         <div className="nav-header">
           <img src={logo} className="nav-logo" alt="logo"/>
            <button className="btn toggle-btn" onClick={openSidebar}><FaBars/></button>
         </div>
        
         <ul className="nav-links">
           <li><button className='link-btn' onMouseOver={(e)=>{
             displaySubMenu(e)
             }}>Products</button></li>
           <li><button className='link-btn' onMouseOver={(e)=>{
             displaySubMenu(e)
             }} >Developers</button></li>
           <li><button className='link-btn' onMouseOver={(e)=>{
             displaySubMenu(e)
             }}>Company</button></li>
         </ul>
         <button className=" btn signin-btn">Sign in</button>
       </div>
  </nav>
}

export default Navbar
