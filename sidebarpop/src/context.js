import React, { useState, useContext } from 'react'
const AppContext = React.createContext()
const AppData = "hola mario"
const AppProvider = ({ children }) =>{
    return <AppContext.Provider value="hello" information={AppData}>{children}</AppContext.Provider>
}
export const useGlovalContext =() =>{
    return useContext(AppData)
}
export {AppContext , AppProvider}
