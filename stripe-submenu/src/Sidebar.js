import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import {useGlobalContext} from './context'
const Sidebar = () => {
  const  {isSidebarOpen,closeSidebar} = useGlobalContext()
  return (
    <aside className={`${isSidebarOpen ? 'sidebar-wrapper show':'sidebar-wrapper'}`}>
      <div className="sidebar">
        <button className='close-btn' onClick={closeSidebar}><FaTimes/></button>
       <div className="sidebar-links">
         {sublinks.map((item,index)=>{
           const {links,page} = item
           console.log(links)
            let elements = links.map(item => <a href={item.url}>{item.icon} {item.label}</a>)
           return(
             <article key={index}>
               <h4>{page}</h4>
               <div className="sidebar-sublinks">
                {elements}
                </div>
             </article>
           )
         })}
       </div>
      </div>
    </aside>
  )
}

export default Sidebar
