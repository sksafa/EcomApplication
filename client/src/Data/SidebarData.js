import { CgProfile } from "react-icons/cg";
import {
  //   FaHome,
  FaLock,
  FaMoneyBill,
  FaUser,
  FaUsers
} from "react-icons/fa";
import { GiDoctorFace } from "react-icons/gi";
import { IoListCircle } from "react-icons/io5";
// import { FaUserDoctor } from "react-icons/fa";
// import { FaUserDoctor } from "@react-icons/all-files/fa/FaUserDoctor";

// import { BiAnalyse, BiSearch } from "react-icons/bi";
import {
  AiFillDashboard,
} from "react-icons/ai";
import { BiCog } from "react-icons/bi";

export const userMenu = [
  {
    path: "/dashbord-analytics",
    name: "Dashboard",
    icon: <AiFillDashboard />,
  },
  {
    path: "/all_doctor_list",
    name: "Doctors",
    icon: <AiFillDashboard />,
  },

  {
    path: "/apply_doctor",
    name: "Apply Doctor",
    icon: <FaUser />,
  },

  {
    path: "/",
    name: "Home",
    icon: <AiFillDashboard />,
  },
];

// admin menu
export const adminMenu = [
  {
    path: "/dashbord_analytics",
    name: "Dashboard",
    icon: <AiFillDashboard />,
  },


  {
    path: "/admin_profile",
    name: "Profile",
    icon: <CgProfile />,
  },
  // {
  //   path: "/appointment-list",
  //   name: "Appointment",
  //   icon: <SlCalender />,
  // },
  // {
  //   // path: "/approve_doctor",
  //   name: "Approve Doctors",
  //   icon: <FaEnvelopeOpenText />,
  // },
  {
    path: "/user",
    name: "Users List",
    icon: <IoListCircle />,
    subRoutes: [
      {
        name: "Doctors",
        path: "/admin/doctors",
        icon: <GiDoctorFace />,
      },
      {
        name: "Users",
        path: "/admin/users",
        icon: <FaUsers />,
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
        // path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        // path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        // path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/",
    name: "Home",
    icon: <AiFillDashboard />,
  },
];

