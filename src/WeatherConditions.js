import React from "react";
import "./WeatherConditions.css";

export default function WeatherConditions() {
  let weatherData = {
    city: "New York",
    temperature: -5,
    description: "Cold and sunny",
    feelsLikeTemp: -8,
    humidity: 60,
    wind: 3,
    unit: "°C"
  };
  return (
    <div className="weather-conditions">
      <h1>{weatherData.city}</h1>

      <div className="row">
        <div className="col-3 today-weather-icon">
          <i className="far fa-sun today-weather-icon"></i>
        </div>
        <div className="col-5 today-weather-basic">
          <ul>
            <li>
              {weatherData.temperature}
              {weatherData.unit}
            </li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="col-4 today-weather-conditions">
          <ul>
            <li>
              Feels Like: {weatherData.feelsLikeTemp}
              {weatherData.unit}
            </li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
