import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const showThisCategory = (categoryToShow) => {
    setMenuItems((prevMenu) => {
      return (prevMenu = items.filter(
        (itemElement) => itemElement.category == categoryToShow
      ));
    });
  };
  const allCategories =[]
  items.forEach(element=>{
        allCategories.push(element.category)
  })
  const uniqueCategory = [... new Set(allCategories)]
  const menuItemsToShow = menuItems.map((item) => (
    <Menu key={item.id} food={item} />
  ));
  const categories = uniqueCategory.map((item) => (
    <Categories
      key={item}
      food={item}
      showCategory={showThisCategory}
    />
  ));
  return (
    <div>
      {categories}
      {menuItemsToShow}
    </div>
  );
}

export default App;
