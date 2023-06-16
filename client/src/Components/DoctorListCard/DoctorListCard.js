import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorListCard = ({ doctorData }) => {
  console.log(" baler doctor list", doctorData);
  const {
    firstName,
    lastName,
    specialization,
    experience,
    feesPerCunsaltation,
    _id,
    // timings,
  } = doctorData;
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate(`/doctor/book-appointment/${_id}`)}
        className="max-w-xs m-4 bg-white cursor-pointer rounded-lg shadow-md overflow-hidden"
      >
        <image
          src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*xtq2iYUs273AibDz7BoCrA.png"
          alt="Card Image"
          className="w-full"
        />
        <div className="p-4">
          <div className="flex justify-between items-center"></div>
          <h2 className="text-xl font-bold mb-2">
            DR: {firstName} {lastName}
          </h2>
          <div>
            <span className="text-gray-600 font-bold">Specialist:</span>
            <span className="ml-1">{specialization}</span>
          </div>
          {/* <p className="text-gray-700 mb-4"> Specialist: {specialization}</p> */}
          <div className="flex justify-between items-center">
            <div>
              <span className="text-gray-600 font-bold">Experience:</span>
              <span className="ml-1">{experience}</span>
            </div>

            <div>
              <span className="text-gray-600 font-bold">
                Fees Per Consultation:
              </span>
              <span className="ml-1">{feesPerCunsaltation}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorListCard;
