import React from "react";
import "./WeatherConditions.css"
import FormattedDate from "./FormattedDate";
import CurrentLocation from "./CurrentLocation";


export default function WeatherConditions(props) {
    return (
        <div className="WeatherConditions">
            <div className="row">
                <div className="col-12">
                    <ul className="todays-date">
                        <li className="temp-conversion">
                            <a href="/" id="select-celsius" className="active">
                            °C
                            </a>{" "}
                            /{" "}
                            <a href="/" id="select-farenheit">
                            °F
                            </a>
                        </li>

                        <CurrentLocation />

                    </ul>
                </div>
            </div>

            <hr className="top" />
 
            <h1>{props.data.city}</h1>

            <FormattedDate date={props.data.date} />

            <div className="row">
                <div className="col-3 today-weather-icon">
                    <img src={props.data.icon} alt={props.data.description} />
                </div>
                <div className="col-5 today-weather-basic">
                    <ul>
                        <li>
                        {Math.round(props.data.temperature)}
                        {props.data.unit}
                        </li>
                        <li>{props.data.description}</li>
                    </ul>
                </div>
                <div className="col-4 today-weather-conditions">
                    <ul>
                        <li>
                        Feels Like: {Math.round(props.data.feelsLikeTemp)}
                        {props.data.unit}
                        </li>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {Math.round(props.data.wind)}km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}