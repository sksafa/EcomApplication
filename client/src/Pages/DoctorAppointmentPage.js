import { Table, message } from 'antd';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout';

const DoctorAppointmentPage = () => {

    const [appointments, setAppointments] = useState([]);
    console.log("Appointment baler list", appointments);
    // const {patientName,patientPhone} = appointments?.patientInfo
    // get users function...
    const getAppointments = async () => {
      try {
        const res = await axios.get("/api/v1/doctor/doctor-appointment", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (res.data.success) {
          setAppointments(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    // useEffects
    useEffect(() => {
      getAppointments();
    }, []);
  
const handleStatus = async (record,status) => {
  try {
     const res = await axios.post('/api/v1/doctor/update-appointment-status', 
      {
        appointmentId: record._id,status
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
     )
     if (res.data.success) {
      message.success(res.data.message)
      getAppointments()
     }
  } catch (error) {
    console.log(error);
    message.error('Something went wrong')
  }
}

    const columns = [
        {
          title: "Patient Name",
          dataIndex: "name",
          render: (text, record) => (
            <span>
              {record.patientInfo.patientName}
            </span>
          ),
        },
      
        {
          title: "Phone",
          dataIndex: "phone",
          render: (text, record) => (
            <span>
              {record.patientInfo.patientPhone}
            </span>
          ),
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
        {
          title: "Status",
          dataIndex: "status",
        },
        {
          title: "Actions",
          dataIndex: "actions",
          render: (text, record) => (
            <div className="d-flex">
              {record.status === "pending" && (
                <div className="d-flex ">
                  <button
                    className="bg-green-500 mr-1 hover:bg-green-600 text-white font-bold py-2 px-4 rounded "
                    onClick={() => handleStatus(record, "approved")}
                  >
                    Approved
                  </button>
                  <button
                    className="bg-red-500 ml-1 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleStatus(record, "reject")}
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ),
        },
      ];
  return (
    <Layout>
       <h1>Appointments Lists akhon kortesi</h1>
       <Table 
        columns={columns} 
        dataSource={appointments} 
        pagination={{
            pageSize:5,
            total:10
          }}
      />
    </Layout>
  )
}

export default DoctorAppointmentPage