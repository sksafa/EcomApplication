import React from "react";
import Layout from "../Components/Layout";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const BookingPage = () => {
  const params = useParams();
  const [doctor, setDoctor] = useState({});
  // console.log(doctor, "akta doctor");
  const getDoctorById = async () => {
    try {
      const result = await axios.post(
        "/api/v1/doctor/getDoctorById",
        {
          doctorId: params.doctorId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (result.data.success) {
        setDoctor(result.data.data);
        console.log( "saymon response", result.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDoctorById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <h2> booking page</h2>
      <div className="container">
        {doctor && (
          <h3>
            Dr.{doctor.firstName} {doctor.lastName}
          </h3>
        )}
        <h1>Dr.{}</h1>
      </div>
    </Layout>
  );
};

export default BookingPage;
