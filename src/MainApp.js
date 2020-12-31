import React, { useState } from "react";
import axios from "axios";
import WeatherConditions from "./WeatherConditions";
import WeatherForecast from "./WeatherForecast";
import "./MainApp.css";

export default function MainApp(props) {
  let [weatherData, setWeatherData] = useState({loaded: false});
  let [city, setCity] = useState(props.defaultCity);
  let [unit, setUnit] = useState("°C")

  function handleResponse(response) {
    setWeatherData({
    loaded: true,
    city: response.data.name,
    country: response.data.sys.country,
    date: new Date((response.data.dt) * 1000),
    temperature: response.data.main.temp,
    description: response.data.weather[0].description,
    feelsLikeTemp: response.data.main.feels_like,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    })
  }

function search() {
    let apiKey="79432bad8a08e24accbb2ab649dcc7be";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse)
}

function handleSubmit(event) {
  event.preventDefault();
  search(city);
}

function handleCityChange(event) {
  setCity(event.target.value);
}

  if (weatherData.loaded) {
    return (
      <div className="MainApp">
        <div className="row">
            <div className="col-12">
              <div className="search-engine">
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search location"
                      id="location-input"
                      autoComplete="off"
                      autoFocus="on"
                      onChange={handleCityChange}
                    />
                    <div className="input-group-append">
                      <button className="btn btn-secondary" type="button">
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
      </div>
      <WeatherConditions data={weatherData} unit={unit} setUnit={setUnit} />
      <WeatherForecast city={weatherData.city} unit={unit} />
    </div>
  )
  } else {
    search(city);
    return "Loading"
  }
    
}
