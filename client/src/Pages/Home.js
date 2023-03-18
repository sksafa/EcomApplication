import React from 'react'
import Navber from '../Components/Navber/Navber'
import Footer from '../Components/Footer/Footer';
import Banner from '../Components/Banner/Banner';
import axios from 'axios';
import { useEffect } from 'react';

import { Toaster } from 'react-hot-toast';
import QuestionHome from '../Components/QuestionHome/QuestionHome';


const Home = () => {
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
       <Toaster />
      <Navber />
      <div className=' px-20'>
      <Banner/>
      <QuestionHome />
      </div>
      <Footer/>
    </div>
  )
}

export default Home

// pass : 9p2AMiRfkQ3SNpZ
// pass : @#$%^&*saymonsafa