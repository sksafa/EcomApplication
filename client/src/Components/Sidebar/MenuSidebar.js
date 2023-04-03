import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './Sidebar.scss';

// animation design code ....
const menuAnimation = {
  hidden: {
    opacity: 0,
    height: 0,
    padding: 0,
    transition: { duration: 0.3, when: "afterChildren" },
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};

const MenuSidebar = ({showAnimation,route,isOpen,setIsOpen}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
  };
  return (
    <>
    <div className='menu cursor-pointer' onClick={toggleMenu}>
    <div className='menu_item'>
    <div className="icon">{route.icon}</div>
      <AnimatePresence >
      {isOpen && <motion.div
      variants={showAnimation}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='link_text'>
              {route.name}
          </motion.div>} 
      </AnimatePresence>
    </div>
    <div>
      <FaAngleDown/>
    </div>
    </div>
    <AnimatePresence>
    { isMenuOpen &&
    <motion.div 
    variants={menuAnimation} 
    initial="hidden"
    animate="show"
    exit="hidden"
    className="menu-container"> 
    {route.subRoutes.map((subRoute,i)=>(
           <NavLink 
           activeClassName="active" 
           to={subRoute.path} 
           key={i} 
           className='link'>
           <div className="icon">{subRoute.icon}</div>
           <AnimatePresence >
           {isOpen && <motion.div
                        variants={showAnimation}
                        className='link_text'>
                   {subRoute.name}
               </motion.div>} 
           </AnimatePresence>
       </NavLink>
       ))}
    </motion.div>}
    </AnimatePresence>

  </>
  )
}

export default MenuSidebar