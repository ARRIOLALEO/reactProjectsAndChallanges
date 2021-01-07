import React, { useState, useContext } from 'react'
import { FaUserSecret } from 'react-icons/fa'
import sublinks from './data'

const AppContext = React.createContext()
export const AppProvider =({children}) =>{
    const [isSidebarOpen ,setIsSideBarOpen] = useState(false)
    const [isSubMenuOpen , setIsSubMenuOpen] = useState(false)
    const [isHovered , setIsHovered]  = useState("")
    const [positionMenu ,setPositionMenu] = useState(0)
    const openSidebar = () =>{
        setIsSideBarOpen(true)
    }
    const openSubMenu =() =>{
        setIsSubMenuOpen(true)
    }
    const closeSidebar =() =>{
        setIsSideBarOpen(false)
    }
    const closeSubMenu = () =>{
        setIsSubMenuOpen(false)
    }
    const addTheHovered = (inforation,postion) =>{
        setIsHovered(inforation.toLowerCase())
        setPositionMenu(0)
        setPositionMenu(postion)
    }
  return <AppContext.Provider value={{
      isSidebarOpen,
      isSubMenuOpen,
      openSubMenu,
      openSidebar,
      closeSubMenu,
      closeSidebar,
      addTheHovered,
      isHovered,
      positionMenu,
      sublinks 
  }}>
      {children}
  </AppContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}