import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSeacrhTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);
  const fetchDrinks = async () => {
    setLoading(false);
    try {
      const theRequest = await fetch(`${url}${searchTerm}`);
      if (!theRequest.ok) {
        throw new Error("this is not working");
      }
      
      const myDrinks = await theRequest.json();
       const {drinks} = myDrinks
       if(drinks){
        setCocktails((prevCocktails) => myDrinks);
       }else{
         setCocktails([])
       }
        
      
    } catch (error) {}
  };
  useEffect(()=>{
    fetchDrinks()
  },[searchTerm])
  return (
    <AppContext.Provider
      value={{
        loading,
        searchTerm,
        cocktails,
        setLoading,
        setSeacrhTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
