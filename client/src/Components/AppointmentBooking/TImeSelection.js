import React from "react";
import { DatePicker, TimePicker } from "antd";
import { useState } from "react";
import moment from "moment";

const TimeSelection = () => {
  const [date, setDate] = useState();

  return (
    <div>
      <DatePicker
        className="m-2"
        format="DD-MM-YYYY"
        onChange={(value) => setDate(moment(value).format("DD-MM-YYYY"))}
      />
      <TimePicker
        format="HH:mm"
        className="m-2"
        onChange={(value) => {
          setDate(moment(value).format("HH:mm"));
        }}
      />
    </div>
  );
};

export default TimeSelection;
