import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems ,setMenuItems] = useState(items)
  const showThisCategory = (categoryToShow) =>{
    setMenuItems(prevMenu =>{
     return prevMenu = items.filter(itemElement => itemElement.category == categoryToShow)
    })
  }
  const menuItemsToShow = menuItems.map(item => <Menu key={item.id}  food={item}/>)
  const categories =items.map(item => <Categories  key={item.id}  food={item.category} showCategory ={showThisCategory}/>)
  return<div>{categories}
    {menuItemsToShow}</div>;
}

export default App;
