import { Table } from "antd";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  console.log("appointment list", appointments);
  const getAppointmentList = async () => {
    try {
      const res = await axios.get("/api/v1/user/getUserAppointment", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setAppointments(res.data.data);
      }
    } catch (error) {
      console.log("appointment list baler error day", error);
    }
  };
  useEffect(() => {
    getAppointmentList();
  }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.patientInfo.patientName}
          {record.doctorId.lastName}
        </span>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      render: (text, record) => <span>{record.doctorId.phone}</span>,
    },
    {
      title: "Date & Time",
      dataIndex: "date",
      render: (text, record) => (
        <span>
          {moment(record.date).format("DD-MM-YYYY")}&nbsp
          {moment(record.time).format("HH-mm")}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];
  return (
    <Layout>
      <h1>Patient AppointmentList</h1>
      <Table 
        columns={columns} 
        dataSource={appointments} 
        pagination={{
            pageSize:5,
            total:10
      }} />
    </Layout>
  );
};

export default AppointmentList;
