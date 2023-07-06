import React, { useState } from "react";
import DoctorCard from "./DoctorCard";
import TimeSelection from "./TImeSelection";
import axios from "axios";
import { useEffect } from "react";
import ModalForm from "./ModalForm";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/features/alertSlice";
// import { useParams } from "react-router-dom";
import { message } from "antd";

const AppointmentBooking = () => {
  const [doctors, setDoctors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [singleDoctor, setSingleDoctor] = useState({});
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [isAvailable, setIsAvailable] = useState(false);
  // const params = useParams();
  const dispatch = useDispatch();

  const getDoctorList = async () => {
    try {
      //   dispatch(showLoading());
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
        // dispatch(hideLoading());
      }
    } catch (error) {
      console.log(error);
    }
  };
  // check available time function
  const handleAvailableTime = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "api/v1/user/booking-availability",
        {
          doctorId: singleDoctor._id,
          date,
          time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());
      if (res.data.success) {
        setIsAvailable(true);
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };
  useEffect(() => {
    getDoctorList();
  }, []);

  const handleOpenModel = (singleDoctorData) => {
    setSingleDoctor(singleDoctorData);
    setShowModal(true);
  };

  return (
    <div className=" mt-10 p-20">
      <TimeSelection
        setDate={setDate}
        setTime={setTime}
        handleAvailableTime={handleAvailableTime}
        setIsAvailable={setIsAvailable}
      />
      <div className="flex flex-wrap justify-center">
        {doctors &&
          doctors.map((doctorData) => (
            <DoctorCard
              doctorData={doctorData}
              handleOpenModel={handleOpenModel}
            />
          ))}
      </div>
      {!isAvailable && (
        <ModalForm
          showModal={showModal}
          setShowModal={setShowModal}
          singleDoctor={singleDoctor}
          date={date}
          time={time}
          setIsAvailable={setIsAvailable}
        />
      )}
    </div>
  );
};

export default AppointmentBooking;
