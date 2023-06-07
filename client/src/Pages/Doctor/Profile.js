import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Col, Form, Input, Row, TimePicker } from "antd";
// import { useNavigate } from "react-router-dom";
// import { showLoading, hideLoading } from "../redux/features/alertSlice";
const DoctorProfile = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  const [doctor, setDoctor] = useState(null);
  console.log("dhur bal", doctor);
  const params = useParams();
  const getDoctorInfo = async () => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/getDoctorInfo",
        {
          userId: params.id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        setDoctor(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDoctorInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <h1>Manage Doctors Profile</h1>
      {doctor&&(
         <Form layout="vertical" onFinish={} className="m-3">
         <h4 className="font-bold mb-2">Personal Details : </h4>
         <Row gutter={20}>
             <Col xs={24} md={24} lg={8}>
                 <Form.Item
                     label="First Name"
                     name="firstName"
                     className="block text-sm font-medium leading-6 text-gray-900"
                     required
                     rules={[{ required: true }]}
                 >
                     <Input
                         type="text"
                         placeholder="your first name"
                         // className="block flex-1 border-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                       />
                 </Form.Item>
             </Col>
             <Col xs={24} md={24} lg={8}>
                 <Form.Item
                     label="Last Name"
                     name="lastName"
                     required
                     rules={[{ required: true }]}
                 >
                     <Input type="text" placeholder="your last name" />
                 </Form.Item>
             </Col>
             <Col xs={24} md={24} lg={8}>
                 <Form.Item
                     label="Phone No"
                     name="phone"
                     required
                     rules={[{ required: true }]}
                 >
                     <Input type="text" placeholder="your contact no" />
                 </Form.Item>
             </Col>
             <Col xs={24} md={24} lg={8}>
                 <Form.Item
                     label="Email"
                     name="email"
                     required
                     rules={[{ required: true }]}
                 >
                     <Input type="email" placeholder="your email address" />
                 </Form.Item>
             </Col>
             <Col xs={24} md={24} lg={8}>
                 <Form.Item label="Website" name="website">
                     <Input type="text" placeholder="your website" />
                 </Form.Item>
             </Col>
             <Col xs={24} md={24} lg={8}>
                 <Form.Item
                     label="Address"
                     name="address"
                     required
                     rules={[{ required: true }]}
                 >
                     <Input type="text" placeholder="your clinic address" />
                 </Form.Item>
             </Col>
         </Row>
         <h4 className="font-bold mb-2">Professional Details :</h4>
         <Row gutter={20}>
             <Col xs={24} md={24} lg={8}>
                 <Form.Item
                     label="Specialization"
                     name="specialization"
                     required
                     rules={[{ required: true }]}
                 >
                     <Input type="text" placeholder="your specialization" />
                 </Form.Item>
             </Col>
             <Col xs={24} md={24} lg={8}>
                 <Form.Item
                     label="Experience"
                     name="experience"
                     required
                     rules={[{ required: true }]}
                 >
                     <Input type="text" placeholder="your experience" />
                 </Form.Item>
             </Col>
             <Col xs={24} md={24} lg={8}>
                 <Form.Item
                     label="Fees Per Cunsaltation"
                     name="feesPerCunsaltation"
                     required
                     rules={[{ required: true }]}
                 >
                     <Input type="text" placeholder="your contact no" />
                 </Form.Item>
             </Col>
             <Col xs={24} md={24} lg={8}>
                 <Form.Item label="Timings" name="timings" required>
                     <TimePicker.RangePicker format="HH:mm" />
                 </Form.Item>
             </Col>
             <Col xs={24} md={24} lg={8}>
                 <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold mt-6 py-2 px-4 rounded" type="submit">
                     Submit
                 </button>
             </Col>
         </Row>
     </Form>
      )}
    </Layout>
  );
};

export default DoctorProfile;
