import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { AiFillDashboard, AiOutlineDeleteRow } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { adminMenu, userMenu } from "../../Data/SidebarData";
import MenuSidebar from "./MenuSidebar";
import "./Sidebar.scss";
// import toast from "react-hot-toast";

// sidebar data...

const Sidebar = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  // const location = useLocation();
  // const navigate = useNavigate();
  const doctorMenu = [
    
    {
      path: "/appointments",
      name: "Appointments",
      icon: <SlCalender />,
    },
    {
      path: "/doctor_appointment",
      name: "Appointment List",
      icon: <AiOutlineDeleteRow />,
    },
    {
      // /doctor/profile/:id
      path: `/doctor/profile/${user?._id}`,
      name: "Profile",
      icon: <CgProfile />,
    },
    {
      path: "/",
      name: "Home",
      icon: <AiFillDashboard />,
    },
  ];
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const SidebarMenu = user?.isAdmin
    ? adminMenu
    : user?.isDoctor
    ? doctorMenu
    : userMenu;

  // const handleLogout = () => {
  //   localStorage.clear();
  //   toast.success("Logout Successfully");
  //   navigate("/login");
  // };

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      opacity: 1,
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
    <div className="main-container ">
      <motion.div
        animate={{
          width: isOpen ? "200px" : "45px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        style={{ marginRight: "10px" }}
        className="sidebar"
      >
        <div  className="top_section">
          <AnimatePresence>
            {isOpen && (
              <motion.h1
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="logo"
              >
              <Link to="/">THE IBN SINA</Link> 
              </motion.h1>
            )}
          </AnimatePresence>

          <div className="bars cursor-pointer">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div className="search">
          <div className="search_icon">
            <BiSearch />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.input
                variants={inputAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                type="text"
                placeholder="search..."
              />
            )}
          </AnimatePresence>
        </div>
        <section className="routes">
          {SidebarMenu.map((route, index) => {
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
                className="link"
                activeClassName="active"
              >
                <div className="icon">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            );
          })}
        </section>

        {/* <div className="flex">
         <FaBars className='ml-3 mt-2'/> <h5 className='ml-2 mt-1 cursor-pointer' onClick={handleLogout}>Logout</h5>
         </div> */}
      </motion.div>
    </div>
  );
};

export default Sidebar;
