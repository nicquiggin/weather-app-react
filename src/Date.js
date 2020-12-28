import React from "react";
import "./Date.css";

export default function Date(props) {


  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  let day = days[props.day];

  let dayOfMonth = props.dayOfMonth;

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]  
  
  let month = months[props.month];

  let year = props.year;

  let hours = props.hours;
  if (hours <10) {
    hours = `0${hours}`
  }

  let minutes = props.minutes;
  if (minutes < 10) {
    minutes = `0${minutes}`
  }


  return (
    <div className="date">
      <li>
        {day}, {dayOfMonth} {month} {year}
      </li>
      <li id="time">
        {hours}:{minutes}
      </li>
    </div>
  );
}