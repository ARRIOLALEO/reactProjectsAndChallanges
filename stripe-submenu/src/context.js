import React, { useState, useContext } from 'react'
import { FaUserSecret } from 'react-icons/fa'
import sublinks from './data'

const AppContext = React.createContext()
export const AppProvider =({children}) =>{
    const [isSidebarOpen ,setIsSideBarOpen] = useState(true)
    const [isSubMenuOpen , setIsSubMenuOpen] = useState(true)
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
  return <AppContext.Provider value={{
      isSidebarOpen,
      isSubMenuOpen,
      openSubMenu,
      openSidebar,
      closeSubMenu,
      closeSidebar
  }}>
      {children}
  </AppContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}