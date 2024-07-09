import { Tabs, message } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
const NotificationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  // handle read notification.....
  const handleMerkAllRead = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/get-all-notification",
        {
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        window.location.reload()
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something want wrong");
    }
  };
  // delete notification controller.....
  const handleDeleteAllRead = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/delet-all-notification",
        {
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        window.location.reload()
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Somthing went Wrong In Notification");
    }
  };
  return (
    <Layout>
      <h1 className=" p-3 text-center"> notifcation</h1>
      <Tabs>
        <Tabs.TabPane tab="unRead" key={0}>
          <div className="flex justify-end">
            <h1 className="p-2 cursor-pointer" onClick={handleMerkAllRead}>
              Mark All Read
            </h1>
          </div>
          {user?.notifcation.map((notificationMessage) => (
            <div className="card cursor-pointer">
              <div
                onClick={() => navigate(notificationMessage.onClickPath)}
                className="card-text"
              >
                {notificationMessage.message}
              </div>
            </div>
          ))}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Read" key={1}>
          <div className="flex justify-end">
            <h1
              className="p-2 text-blue-500 cursor-pointer"
              onClick={handleDeleteAllRead}
            >
              Delete All Read
            </h1>
          </div>
          {user?.seennotification.map((notificationMessage) => (
            <div className="card cursor-pointer">
              <div
                onClick={() => navigate(notificationMessage.onClickPath)}
                className="card-text"
              >
                {notificationMessage.message}
              </div>
            </div>
          ))}
        </Tabs.TabPane>
      </Tabs>
    </Layout>
  );
};

export default NotificationPage;
