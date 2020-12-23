import React from "react";
import "./App.css";
import SearchEngine from "./SearchEngine";
import Date from "./Date";
import TempConversion from "./TempConversion";
import CurrentLocation from "./CurrentLocation";
import WeatherConditions from "./WeatherConditions";
import Tagline from "./Tagline";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="weather-app">
        <div className="row">
          <div className="col-7">
            <SearchEngine />
          </div>
          <div className="col-5">
            <ul className="todays-date">
              <Date />
              <TempConversion />
            </ul>
          </div>
        </div>
        <CurrentLocation />

        <hr className="top" />

        <WeatherConditions />
      </div>
      <Tagline />
      </div>
    </div>
  );
}