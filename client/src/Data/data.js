import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser, FaUsers } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { GiDoctorFace } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillDashboard, AiFillHeart } from "react-icons/ai";
import { BsCartCheck, BsPersonFillAdd } from "react-icons/bs";



export const userMenu = [
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
        path: "/doctor/doctorProfile",
        name: "Profile",
        icon: <CgProfile />,
    },
];


// admin menu
export const adminMenu = [
    {
        path: "/",
        name: "Dashboard",
        icon: <AiFillDashboard />,
    },

    {
        name: "Doctors",
        path: "/doctors",
        icon: <GiDoctorFace />,
    },
    {
        name: "Users",
        path: "/users",
        icon: <FaUsers />,
    },
    {
        path: "/doctor/doctorProfile",
        name: "Profile",
        icon: <CgProfile />,
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
];


// export const routes = [
//     {
//         path: "/patients",
//         name: "Doctor Category",
//         icon: <BiAnalyse />,
//     },


//     {
//         path: "/order",
//         name: "Order",
//         icon: <BsCartCheck />,
//     },

//     {
//         path: "/saved",
//         name: "Saved",
//         icon: <AiFillHeart />,
//     },
// ];