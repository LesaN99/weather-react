import React, {useState} from "react";
import "./Weather.css";
import Weatherinfo from "./Weatherinfo";
import axios from "axios";



export default function Weather(props) {
    const [weather, setWeather] = useState({ready: false});
    const [city,setCity] = useState(props.defaultCity);

function showTemperature(response) {
  setWeather({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
}

function handleSubmit(event) {
    event.preventDefault();
    search();
}

function search() {
  const apiKey= "e450bc345a80a08ada69fd5c714d871d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(showTemperature);
}

function changeCity(event) {
setCity(event.target.value);

}

if (weather.ready) {
    return (
        <div className="Weather">
            <div className="weather-app">
                <header>
            <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder= "Enter a city.."
            required
            className="search-input"
            onChange={changeCity}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <Weatherinfo data={weather}/>
        </header>
        </div>
        </div>
    );

} else {
    search();
    return "Loading...";
}
   
}

