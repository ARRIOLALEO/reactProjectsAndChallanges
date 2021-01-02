import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
const allLinks = links.map(link =>{
  return <li key={link.id}>
    <a href={link.url}>
      {link.icon}
      {link.text}
    </a>
  </li>
})
const socialIcons = social.map(icone=>{
    return <li  key={icone.id}>
         <a href={icone.url}>
             {icone.icon}
             {icone.text}
         </a>
    </li>
})
const Sidebar = () => {
  return <aside className={`sidebar`}>
    <div className="sidebar-header">
      <img src={logo} className="logo" alt="logo"/>
      <button className="close-btn">
        <FaTimes/>
      </button>
    </div>
    <ul className="links">
    {allLinks}
    </ul>
    <ul className="social-icons">
      {socialIcons}
    </ul>
  </aside>
  
}

export default Sidebar
