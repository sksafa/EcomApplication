import React from "react";
import Navber from "../Components/Navber/Navber";
import Footer from "../Components/Footer/Footer";
import AppointmentBooking from "../Components/AppointmentBooking";

const AppointmentPage = () => {
  return (
    <>
      <Navber />
      <AppointmentBooking />
      <Footer />
    </>
  );
};

export default AppointmentPage;
