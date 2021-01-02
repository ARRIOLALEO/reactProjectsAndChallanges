import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'
const menuItems = links.map(link=>{
  return (
    <li key={link.id}>
            <a href={link.url}>
              {link.text}
            </a>
          </li>
  )
})
const socialItems = social.map(icon=>{
  return (
    <li key={icon.id}>
    <a href={icon.rul}>{icon.icon}</a>
  </li>
  )
})
const Navbar = () => {
  const [showLinks,setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  useEffect(()=>{
    const linksHeigth = linksRef.current.getBoundingClientRect().height
    if(showLinks){linksContainerRef.current.style.height =`${linksHeigth}px`}
    else{ linksContainerRef.current.style.height =`0px`  }
   
  },[showLinks])
  return( <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="log"/>
        <button className="nav-toggle" onClick={(e)=>{
            e.preventDefault()
            setShowLinks(!showLinks)
        }}>
          <FaBars/>
        </button>
      </div>
      <div className={`${showLinks?'links-container show-container':'links-container'}`}show-container ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {menuItems}
        </ul>
      </div>
      <ul className="social-icons">
            {socialItems }
      </ul>
    </div>
  </nav>)
}

export default Navbar
