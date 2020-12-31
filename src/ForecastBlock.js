import React from "react";
import "./ForecastBlock.css";

export default function ForecastBlock(props) {
    function hours() {
        let date = new Date(props.data.dt * 1000)
        let hours = date.getHours();

        return `${hours}:00`
    }

    let temperature = Math.round(props.data.main.temp)
    if (props.unit === "°F") {
    temperature = Math.round((props.data.main.temp * 9) / 5 + 32);
    }
    let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`
    let description = props.data.weather[0].description

    return (
        <div className="ForecastBlock col">
            {hours()}
            <img src={icon} alt={description} />
            {temperature}{props.unit}
        </div>
    )
}