import React from "react";
import { DatePicker, TimePicker } from "antd";
import moment from "moment";

const TimeSelection = ({ setDate, setTime }) => {
  return (
    <div>
      <DatePicker
        className="m-2 h-10"
        format="DD-MM-YYYY"
        onChange={(value) => setDate(moment(value).format("DD-MM-YYYY"))}
      />
      <TimePicker
        format="HH:mm"
        className="m-2 h-10"
        onChange={(value) => {
          setTime(moment(value[0]).format("HH:mm"));
        }}
      />

      <button className="px-4 py-2 h-10 text-sm text-blue-100 bg-blue-500 rounded shadow">
        Check Availability
      </button>
    </div>
  );
};

export default TimeSelection;
