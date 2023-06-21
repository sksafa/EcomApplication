import React, { useState } from "react";
import DoctorCard from "./DoctorCard";
import TimeSelection from "./TImeSelection";
import axios from "axios";
import { useEffect } from "react";
import ModalForm from "./ModalForm";

const AppointmentBooking = () => {
  const [doctors, setDoctors] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // console.log("doctor lists", doctors);
  const getDoctorList = async () => {
    try {
      const res = await axios.get(
        "/api/v1/user/getAllDoctors",
        // { token: localStorage.getItem("token") },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctorList();
  }, []);
  return (
    <div className=" mt-10 p-20">
      <TimeSelection />
      <div className="flex flex-wrap justify-center">
        {doctors &&
          doctors.map((doctorData) => (
            <DoctorCard setShowModal={setShowModal} doctorData={doctorData} />
          ))}
      </div>
      <ModalForm showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default AppointmentBooking;
