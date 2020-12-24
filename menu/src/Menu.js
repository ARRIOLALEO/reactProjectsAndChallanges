import React from "react";

const Menu = (props) => {
  const { title, category, price, img, desc } = props.food;
  return <h2>{title}</h2>;
};

export default Menu;
