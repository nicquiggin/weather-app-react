import React, { useState } from "react";
import "./WeatherConditions.css"
import FormattedDate from "./FormattedDate";
import CurrentLocation from "./CurrentLocation";


export default function WeatherConditions(props) {
    let [unit, setUnit] = useState("°C")

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("°F")
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("°C")
    }

    if (unit === "°C") {
        return (
            <div className="WeatherConditions">
                <div className="row">
                    <div className="col-12">
                        <ul className="todays-date">
                            <li className="temp-conversion">
                                °C
                                {" "}
                                /{" "}
                                <a href="/" onClick={showFahrenheit}>
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
                            {unit}
                            </li>
                            <li>{props.data.description}</li>
                        </ul>
                    </div>
                    <div className="col-4 today-weather-conditions">
                        <ul>
                            <li>
                            Feels Like: {Math.round(props.data.feelsLikeTemp)}
                            {unit} 
                            </li>
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Wind: {Math.round(props.data.wind)}km/h</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    } else {
        let fahrenheitTemperature = (props.data.temperature * 9) / 5 + 32;
        let fahrenheitFeelsLikeTemp = (props.data.feelsLikeTemp * 9) / 5 + 32;
        return (
            <div className="WeatherConditions">
                <div className="row">
                    <div className="col-12">
                        <ul className="todays-date">
                            <li className="temp-conversion">
                                <a href="/" onClick={showCelsius}>°C</a>
                                {" "}
                                /{" "}
                                °F
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
                            {Math.round(fahrenheitTemperature)}
                            {unit}
                            </li>
                            <li>{props.data.description}</li>
                        </ul>
                    </div>
                    <div className="col-4 today-weather-conditions">
                        <ul>
                            <li>
                            Feels Like: {Math.round(fahrenheitFeelsLikeTemp)}
                            {unit} 
                            </li>
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Wind: {Math.round(props.data.wind)}km/h</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}