import React, { useState } from "react";
import axios from "axios";
import SearchEngine from "./SearchEngine";
import Date from "./Date";
import TempConversion from "./TempConversion";
import CurrentLocation from "./CurrentLocation";
import "./WeatherConditions.css";

export default function WeatherConditions(props) {
  let [weatherData, setWeatherData] = useState({loaded: false})

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
    loaded: true,
    city: response.data.name,
    date: new Date((response.data.dt) * 1000),
    temperature: response.data.main.temp,
    description: response.data.weather[0].description,
    feelsLikeTemp: response.data.main.feels_like,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    unit: "°C"
    })

  }
  if (weatherData.loaded) {
    return (
      <div className="weather-conditions">
        <div className="row">
            <div className="col-7">
              <SearchEngine />
            </div>
            <div className="col-5">
              <ul className="todays-date">
                <Date date={weatherData.date} />
                <TempConversion />
              </ul>
            </div>
          </div>
          <CurrentLocation />

        <hr className="top" />
 
      <h1>{weatherData.city}</h1>

      <div className="row">
        <div className="col-3 today-weather-icon">
          <img src={weatherData.icon} alt={weatherData.description} />
        </div>
        <div className="col-5 today-weather-basic">
          <ul>
            <li>
              {Math.round(weatherData.temperature)}
              {weatherData.unit}
            </li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="col-4 today-weather-conditions">
          <ul>
            <li>
              Feels Like: {Math.round(weatherData.feelsLikeTemp)}
              {weatherData.unit}
            </li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {Math.round(weatherData.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  )
  } else {
    let apiKey="79432bad8a08e24accbb2ab649dcc7be";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse)
    return "Loading"
  }
    
}
