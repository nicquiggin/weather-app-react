import React from "react";
import "./Date.css";

export default function Date() {
  let date = {
    day: "Saturday",
    date: "21",
    month: "November",
    year: "2020"
  };
  let time = {
    hours: "13",
    minutes: "46"
  };
  return (
    <div className="date">
      <li>
        {date.day}, {date.date} {date.month} {date.year}
      </li>
      <li id="time">
        {time.hours}:{time.minutes}
      </li>
    </div>
  );
}
