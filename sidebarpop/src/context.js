import React, { useState, useContext } from 'react'
const AppContext = React.createContext()

const AppProvider = ({ children }) =>{
    const [sideBar , setSideBar]= useState(false)
    const [popUp , setPopUp] = useState(false)
    const showSidebar = ()=>{
        setSideBar(true)
    }
    const showPopUp =()=>{
        setPopUp(true)
    }
    const notShowSidebar = ()=>{
        setSideBar(false)
    }
    const notShowPopUp =()=>{
        setPopUp(false)
    }
    return <AppContext.Provider  value={{sideBar,popUp, showPopUp,showSidebar,notShowPopUp,notShowSidebar}} >{children}</AppContext.Provider>
}
export const useGlovalContext =() =>{
    return useContext(AppContext)
}
export {AppContext , AppProvider}
