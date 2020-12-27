import React from "react";
import "./App.css";
import WeatherConditions from "./WeatherConditions";
import Tagline from "./Tagline";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="weather-app">

        <WeatherConditions defaultCity="Zurich"/>
        
      </div>
      <Tagline />
      </div>
    </div>
  );
}