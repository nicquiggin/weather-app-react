import React from "react";
import "./App.css";
import MainApp from "./MainApp";
import Tagline from "./Tagline";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="weather-app">

        <MainApp defaultCity="London"/>
        
      </div>
      <Tagline />
      </div>
    </div>
  );
}