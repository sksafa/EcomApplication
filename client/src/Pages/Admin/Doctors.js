import { Table, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
const Doctors = () => {
  // states....
  const [doctors, setDoctors] = useState([]);
  console.log("all users data", doctors);
  // get users function...
  const getDoctors = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getAllDoctors", {
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

  const handleAccountStatus = async (record, status) => {
    try {
      const res = await axios.post(
        "/api/v1/admin/changeAccountStatus",
        {
          doctorId: record._id,
          userId: record.userId,
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        message.success(res.data.message);
        window.location.reload();
      }
    } catch (error) {
      message.error("something went wrong");
    }
  };

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
              onClick={() => handleAccountStatus(record, "approve")}
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
      <h1 className="text-2xl font-bold text-blue-800 mb-8 uppercase m-5">
        doctors table
      </h1>
      <Table 
        columns={columns} 
        dataSource={doctors} 
        pagination={{
            pageSize:5,
            total:10
          }}
      />
    </Layout>
  );
};

export default Doctors;
