/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import docpic from "./docProfile.jpg";
const DoctorCard = ({ doctorData, handleOpenModel }) => {
  const {
    firstName,
    lastName,
    specialization,
    experience,
    feesPerCunsaltation,
    _id,
    timings,
  } = doctorData;

  return (
    <div className="mt-10  p-4 ">
      <div className="w-full rounded-lg shadow-md lg:max-w-sm">
        <img
          className="object-cover w-full p-10 h-80 justify-between"
          src={docpic}
          alt="image"
        />
        <div className="p-4">
          <h4 className="text-xl font-semibold tracking-tight text-blue-600">
            DR. {firstName} {""} {lastName}
          </h4>
          <p className="mb-2 leading-normal">
            Available Time: {""}
            <span className=" uppercase">
              {timings[0]}
              {"-"}
              {timings[1]}
            </span>
          </p>
          <p className="mb-2 leading-normal">
            Specialization: {""}
            <span className=" uppercase">{specialization}</span>
          </p>
          <p className="mb-2 leading-normal">
            Experience: {""}
            <span className=" uppercase">{experience}</span>
          </p>
          <p className="mb-2 leading-normal">
            FeesPerCunsaltation: {""}
            <span className=" uppercase">{feesPerCunsaltation}</span> $
          </p>
          <button
            onClick={() => handleOpenModel(doctorData)}
            className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow"
          >
            Book Appointment
          </button>
          {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
    
      >
        Book Appointment
        
      </button> */}
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
