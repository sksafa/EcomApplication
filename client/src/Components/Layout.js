import React from "react";
import "../styles/LayoutStyles.css";


import DashboardHeader from "./DashboardHeader/index";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";


  
const Layout = ({ children }) => {
   

       

    return (
        <>
            <div className="main">
                <div className="layout">
                    {/* <div className="sidebar">

                    </div> */}
                    <Sidebar props={{children}}/>
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