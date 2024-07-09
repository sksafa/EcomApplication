import { Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
// import DoctorListCard from "../Components/DoctorListCard/DoctorListCard";
import DoctorListTable from "../Components/DoctorListTable/DoctorListTable";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const getDoctorList = async () => {
    try {
      const res = await axios.get(
        "/api/v1/user/getAllDoctors",
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
