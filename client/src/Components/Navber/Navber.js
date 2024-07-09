import { Button, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Help/Images/doc_logo.jpg";

const Navber = () => {
  return (
    <div>
      {/* // this is before code..... */}
      <Navbar
        className=" fixed w-full top-0 bg-[#fff]"
        fluid={true}
        rounded={true}
      >
        {/* <Navbar className=" fixed w-full top-0 bg-[#ecf0f159]" fluid={true}rounded={true}> */}
        <Navbar.Brand href="https://flowbite.com/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            The IBN SINA
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>
            <Link to="/login"> Sign In </Link>
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="">
       
          <Navbar.Link>
            <Link to="/">About</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/appointment-page">Appointment</Link>
          </Navbar.Link>
       
          <Navbar.Link>
            <Link to="/dashboard">Dashboard</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/">Contact</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navber;
