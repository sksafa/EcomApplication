import React, { useState } from "react";
import { DatePicker, TimePicker } from "antd";
import moment from "moment";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/features/alertSlice";
import axios from "axios";

const TimeSelection = ({
  setDate,
  setTime,
  handleAvailableTime,
  setIsAvailable,
}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <DatePicker
        className="m-2 h-10"
        format="DD-MM-YYYY"
        onChange={(value) => {
          // setIsAvailable(false);
          setDate(moment(value).format("DD-MM-YYYY"));
        }}
      />
      <TimePicker
        format="HH:mm"
        className="m-2 h-10"
        onChange={(value) => {
          // setIsAvailable(false);
          setTime(moment(value[0]).format("HH:mm"));
        }}
      />

      <button
        onClick={handleAvailableTime}
        className="px-4 py-2 h-10 text-sm text-blue-100 bg-blue-500 rounded shadow"
      >
        Check Availability
      </button>
    </div>
  );
};

export default TimeSelection;
