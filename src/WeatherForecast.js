import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
    console.log(response.data);
    }
    let apiKey = `58a6775f97527351bf6c6966e209be39`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                   <div className="WeatherForecast-day"> Thu </div>
                   <div className="WeatherForecast-icon">
                    <WeatherIcon code="01d" size={36} />
                    </div>
                     <div className="WeatherForecast-temperature"> 
                     <span className="WeatherForecast-temperature-max">19°</span>
                     <span className="WeatherForecast-temperature-min">10°</span>
                     </div>
                </div>
            </div>

        </div>
    )
}