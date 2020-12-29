import React from "react";
import "./FormattedDate.css";

export default function FormattedDate(props) {

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[props.date.getDay()];

let dayOfMonth = props.date.getDate(); 

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];  
let month = months[props.date.getMonth()]; 

let year = props.date.getFullYear(); 

let hours = props.date.getHours() 
  if (hours <10) {
    hours = `0${hours}`
  }

let minutes = props.date.getMinutes()
  if (minutes < 10) {
    minutes = `0${minutes}`
  }


  return (
    <div className="FormattedDate">
        {day}, {dayOfMonth} {month} {year}
      <div className="time">{hours}:{minutes}</div>
    </div>
  );
}