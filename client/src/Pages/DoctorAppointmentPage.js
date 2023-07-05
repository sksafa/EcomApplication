import { Table } from 'antd';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout';

const DoctorAppointmentPage = () => {

    const [doctors, setDoctors] = useState([]);
    console.log("all users data", doctors);
    // get users function...
    const getDoctors = async () => {
      try {
        const res = await axios.get("/api/v1/doctor/doctor-appointment", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (res.data.success) {
          setDoctors(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    // useEffects
    useEffect(() => {
      getDoctors();
    }, []);
  


    const columns = [
        {
          title: "Name",
          dataIndex: "name",
          render: (text, record) => (
            <span>
              {record.firstName}
              {" "}
              {record.lastName}
            </span>
          ),
        },
        {
          title: "Status",
          dataIndex: "status",
        },
        {
          title: "Phone",
          dataIndex: "phone",
        },
        {
            title: "Date & Time",
            dataIndex: "date",
            render: (text, record) => (
              <span>
                {moment(record.date).format("DD-MM-YYYY")} &nbsp;
                {moment(record.time).format("HH:mm")}
              </span>
            ),
          },
        // {
        //   title: "Doctor",
        //   dataIndex: "isDoctor",
        //   render: (text, record) => <span>{record.isDoctor ? "Yes" : "No"}</span>,
        // },
        {
          title: "Actions",
          dataIndex: "actions",
          render: (text, record) => (
            <div className="flex">
              {record.status === "pending" ? (
                <button
                //   onClick={() => handleAccountStatus(record, "approve")}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded "
                >
                  Approve
                </button>
              ) : (
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                  Reject
                </button>
              )}
            </div>
          ),
        },
      ];
  return (
    <Layout>
       <h1>Appointments Lists</h1>
       <Table 
        columns={columns} 
        dataSource={doctors} 
        pagination={{
            pageSize:5,
            total:10
          }}
      />
    </Layout>
  )
}

export default DoctorAppointmentPage