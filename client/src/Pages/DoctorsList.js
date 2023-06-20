import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { useState } from "react";
import axios from "axios";
import { Row } from "antd";
// import DoctorListCard from "../Components/DoctorListCard/DoctorListCard";
import DoctorListTable from "../Components/DoctorListTable/DoctorListTable";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
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
    <Layout>
      <h1>doctor lists</h1>
      <Row>
        {doctors &&
          doctors.map((doctorData) => (
            <DoctorListTable doctorData={doctorData} />
          ))}
      </Row>
    </Layout>
  );
};

export default DoctorsList;
