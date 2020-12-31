import React from "react";
import "./WeatherConditions.css"
import FormattedDate from "./FormattedDate";


export default function WeatherConditions(props) {

    function showFahrenheit(event) {
        event.preventDefault();
        props.setUnit("°F")
    }

    function showCelsius(event) {
        event.preventDefault();
        props.setUnit("°C")
    }

    if (props.unit === "°C") {
        return (
            <div className="WeatherConditions">
                <ul className="todays-date">
                    <li className="temp-conversion">
                        °C{" "}/{" "}
                        <a href="/" onClick={showFahrenheit}>
                        °F
                        </a>
                    </li>
                </ul>

                <hr className="top" />
    
                <h1>{props.data.city}, {props.data.country}</h1>

                <FormattedDate date={props.data.date} />

                <div className="row">
                    <div className="col-3 today-weather-icon">
                        <img src={props.data.icon} alt={props.data.description} />
                    </div>
                    <div className="col-5 today-weather-basic">
                        <ul>
                            <li>
                            {Math.round(props.data.temperature)}
                            {props.unit}
                            </li>
                            <li>{props.data.description}</li>
                        </ul>
                    </div>
                    <div className="col-4 today-weather-conditions">
                        <ul>
                            <li>
                            Feels Like: {Math.round(props.data.feelsLikeTemp)}
                            {props.unit} 
                            </li>
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Wind: {Math.round(props.data.wind)}km/h</li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
        )
    } else {
        let fahrenheitTemperature = (props.data.temperature * 9) / 5 + 32;
        let fahrenheitFeelsLikeTemp = (props.data.feelsLikeTemp * 9) / 5 + 32;
        return (
            <div className="WeatherConditions">
                <ul className="todays-date">
                    <li className="temp-conversion">
                        <a href="/" onClick={showCelsius}>°C</a>
                        {" "}/{" "}
                        °F
                    </li>
                </ul>
                 
                <hr className="top" />
    
                <h1>{props.data.city}, {props.data.country}</h1>

                <FormattedDate date={props.data.date} />

                <div className="row">
                    <div className="col-3 today-weather-icon">
                        <img src={props.data.icon} alt={props.data.description} />
                    </div>
                    <div className="col-5 today-weather-basic">
                        <ul>
                            <li>
                            {Math.round(fahrenheitTemperature)}
                            {props.unit}
                            </li>
                            <li>{props.data.description}</li>
                        </ul>
                    </div>
                    <div className="col-4 today-weather-conditions">
                        <ul>
                            <li>
                            Feels Like: {Math.round(fahrenheitFeelsLikeTemp)}
                            {props.unit} 
                            </li>
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Wind: {Math.round(props.data.wind)}km/h</li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            
        )
    }
    
}