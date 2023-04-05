import React from 'react'
import {  FaBars,  FaHome, FaLock, FaMoneyBill, FaUser, FaUsers } from "react-icons/fa";
import {  SlCalender } from "react-icons/sl";
import {  GiDoctorFace } from "react-icons/gi";
import {  CgProfile } from "react-icons/cg";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillDashboard, AiFillHeart } from "react-icons/ai";
import { BsCartCheck, BsPersonFillAdd } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
import MenuSidebar from './MenuSidebar';

// sidebar data...
const routes = [
    {
      path: "/",
      name: "Dashboard",
      icon: <AiFillDashboard />,
    },
    {
      path: "/appointments",
      name: "Appointments",
      icon: <SlCalender />,
    },
    {
      path: "/apply_doctor",
      name: "Apply Doctor",
      icon: <FaUser />,
    },
    {
      path: "/patients",
      name: "Doctor Category",
      icon: <BiAnalyse />,
    },

    {
      path: "/doctor",
      name: "Doctor",
      icon: <GiDoctorFace />,
      subRoutes: [
        {
          path: "/doctor/doctors",
          name: "Doctors ",
          icon: <FaUsers />,
        },
        {
          path: "/doctor/addDoctor",
          name: "Add Doctor",
          icon: <BsPersonFillAdd />,
        },
        {
          path: "/doctor/doctorProfile",
          name: "Profile",
          icon: <CgProfile />,
        },
      ],
    },
    {
      path: "/order",
      name: "Order",
      icon: <BsCartCheck />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <BiCog />,
      exact: true,
      subRoutes: [
        {
          path: "/settings/profile",
          name: "Profile ",
          icon: <FaUser />,
        },
        {
          path: "/settings/2fa",
          name: "2FA",
          icon: <FaLock />,
        },
        {
          path: "/settings/billing",
          name: "Billing",
          icon: <FaMoneyBill />,
        },
      ],
    },
    {
      path: "/saved",
      name: "Saved",
      icon: <AiFillHeart />,
    },
  ];
  

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen); 
    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            opacity: 0,
            transition:{
                duration: 0.2
            }
        },
        show:{
            width: "140px",
            padding: "5px 15px",
            opacity: 1,
            transition:{
                duration: 0.2
            }
        }
    }
    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition:{
                duration: 0.5
            }
        },
        show:{
            opacity: 1,
            width: "auto",        
            transition:{
                duration: 0.5
            }
        }
    }
  return (
    <div className='main-container'>
        <motion.div 
        animate={{
            width:isOpen ?  "200px" : "45px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },}}
             className='sidebar'>
         <div className='top_section'>
         <AnimatePresence>     
            { isOpen &&  <motion.h1 
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden" 
                    className='logo'>
                      THE IBN SINA
                    </motion.h1> }
          </AnimatePresence>
            
            <div className='bars cursor-pointer'>
                <FaBars onClick={toggle}/>
            </div>
         </div>
         <div className='search'>
            <div className='search_icon'>
                <BiSearch/>
            </div>
        <AnimatePresence>
           { isOpen && (<motion.input
            variants={inputAnimation}
            initial="hidden" 
            animate="show" 
            exit="hidden"  
            type="text"
            placeholder='search...'/>
            )}
        </AnimatePresence>
         </div>
         <section className='routes'>
          {routes.map((route,index)=>{
            if (route.subRoutes) {
                return (
                 <MenuSidebar
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                    key={route.name}
                 />
                );
              }
            return (
            <NavLink 
               to={route.path} 
               key={index} 
               className='link'
               activeClassName="active" 
               >
                <div className="icon">{route.icon}</div>
                <AnimatePresence >
                {isOpen && (<motion.div
                 variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className='link_text'>
                        {route.name}
                    </motion.div>
                )} 
                </AnimatePresence>
            </NavLink>
            );
         })}
         </section>
        </motion.div>
    </div>
  )
}

export default Sidebar