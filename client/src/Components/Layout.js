import React from "react";
import "../styles/LayoutStyles.scss";
import DashboardHeader from "./DashboardHeader/index";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children }) => {

    return (
        <>
            <div className="main">
                <div className="layout">
                    <Sidebar />
                    <div className="content">
                        <div className="header sticky top-0">
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