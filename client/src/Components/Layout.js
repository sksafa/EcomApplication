import React from "react";
import "../styles/LayoutStyles.css";
import { SidebarMenu } from "./../Data/SidebarData";
import { Link, useLocation } from "react-router-dom";
import DashboardHeader from "./DashboardHeader/index";


const Layout = ({ children }) => {
    const location = useLocation();
    return (
        <>
            <div className="main">
                <div className="layout">
                    <div className="sidebar">
                        <div className="logo">
                            <h4>IBN SINA</h4>
                            <hr />
                        </div>
                        <div className="menu">
                            {SidebarMenu.map((menu) => {
                                const isActive = location.pathname === menu.path;
                                return (
                                    <>
                                        <div className={`menu-item ${isActive && "active"}`}>
                                            <i className={menu.icon}></i>
                                            <Link to={menu.path}>{menu.name}</Link>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
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