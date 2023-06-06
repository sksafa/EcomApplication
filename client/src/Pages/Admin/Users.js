import React, { useEffect } from "react";
import Layout from "../../Components/Layout";
import { useState } from "react";
import axios from "axios";
const Users = () => {
  // states....
  const [users, setUsers] = useState([]);
  console.log("all users data", users);
  // get users function...
  const getUsers = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getAllUsers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setUsers(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // useEffects
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Layout>
      <h1>Users table</h1>
    </Layout>
  );
};

export default Users;
