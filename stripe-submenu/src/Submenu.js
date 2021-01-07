import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";
const Submenu = () => {
  const { isSubMenuOpen, sublinks,openSidebar, isHovered, positionMenu } = useGlobalContext();

  const miniMenu = sublinks.filter((link) => link.page === isHovered);
  const postionElement = document.querySelector('.submenu')
console.log(postionElement)
  if(postionElement) postionElement.style.left=`${positionMenu}px`
  return (
    <aside className={isSubMenuOpen ? "submenu show" : "submenu"}>
      <div className="sidebar-links">
        {miniMenu.map((item, index) => {
          const { links, page } = item;
          let elements = links.map((item) => (
            <a href={item.url}>
              {item.icon} {item.label}
            </a>
          ));
          return (
            <article key={index}>
              <h4>{page}</h4>
              <div className="sidebar-sublinks">{elements}</div>
            </article>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
