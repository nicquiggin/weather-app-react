import React, { useState } from "react";
import axios from "axios";
import ForecastBlock from "./ForecastBlock";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);


    function handleForecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);
        
    }

    if (loaded && props.city === forecast.city.name) {
        return (
            <div className="WeatherForecast row">
                {forecast.list.slice(0, 5).map(function (forecastItem) {
                    return <ForecastBlock data={forecastItem} unit={props.unit} />;
                })}
            </div>
        )
    } else {    
        let apiKey = "79432bad8a08e24accbb2ab649dcc7be";
        let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleForecastResponse);
        return null;
    }
    
}