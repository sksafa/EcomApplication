import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../redux/features/alertSlice";

export default function ModalForm({
  showModal,
  setShowModal,
  singleDoctor,
  date,
  time,
  setIsAvailable,
}) {
  const { user } = useSelector((state) => state.user);
  const [patientInfo, setPatientInfo] = useState({
    patientName: " ",
    patientPhone: " ",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPatientInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //   const { _id } = singleDoctor;
  const dispatch = useDispatch();
  const handleBooking = async () => {
    try {
      setIsAvailable(true);
      if (!date && !time && !patientInfo) {
        return alert("please select date and time");
      }
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/book-appointment",
        {
          userId: user._id,
          doctorId: singleDoctor._id,
          doctorInfo: singleDoctor,
          userInfo: user,
          patientInfo: patientInfo,
          date: date,
          time: time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      }
      setShowModal(false);
    } catch (error) {
      message.error(error);
      dispatch(hideLoading());
    }
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Appointment Booking Form
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <h1>{singleDoctor.firstName}</h1>
                  <h1>{singleDoctor._id}</h1>
                  <h1>Date: {date}</h1>
                  <h1>time: {time}</h1>
                  {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p> */}
                  <div className="w-full  px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Patient Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      name="patientName"
                      value={patientInfo.patientName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full  px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Phone
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      name="patientPhone"
                      value={patientInfo.patientPhone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleBooking}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
