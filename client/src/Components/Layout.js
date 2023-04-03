import React from "react";
import "../styles/LayoutStyles.css";
import { SidebarMenu } from "./../Data/SidebarData";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import DashboardHeader from "./DashboardHeader/index";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";


  
const Layout = ({ children }) => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const inputAnimation = {
        hidden: {
          width: 0,
          padding: 0,
          transition: {
            duration: 0.2,
          },
        },
        show: {
          width: "140px",
          padding: "5px 15px",
          transition: {
            duration: 0.2,
          },
        },
      };
    const showAnimation = {
        hidden: {
          width: 0,
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        },
        show: {
          opacity: 1,
          width: "auto",
          transition: {
            duration: 0.5,
          },
        },
      };
    return (
        <>
            <div className="main">
                <div className="layout">
                    {/* <div className="sidebar">

                    </div> */}
                    <Sidebar/>
                    <div className="content">
                        <div className="header">
                            <DashboardHeader />
                        </div>
                        <div className="body">{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;