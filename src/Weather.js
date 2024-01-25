import axios from "axios";
import "./Weather.css";
import { useState} from "react";


export default function Weather() {
  const [city,setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [heading, setHeading] = useState("Johannesburg");


function displayWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
    setHeading(city);
}



function searchCity(event) {
    event.preventDefault();
    let apiKey = `616b14cbd38253313b3b8852fa77335d`
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
}

  function updateCity(event) {
    setCity(event.target.value);
  }

 

   return (
    <div className="weather">
        <div className="weather-app">
        <header>
        <form onSubmit={searchCity}>
          <i class="fa-solid fa-magnifying-glass magnifying-icon"></i>
          <input
            type="search"
            placeholder= "Enter a city.."
            required
            className="search-input"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </header>
      <main>
        <div className="current-weather">
          <div>
            <h1 className="current-city">{heading} </h1>
            <p className="current-details">
              <span>Wednesday</span>,  <span>{weather.description}</span>
               <br />
              Humidity: <strong> {weather.humidity}</strong>, Wind: <strong> {weather.wind}km/h </strong>
            </p>
          </div>
          <div className="current-temperature">
            <span className="current-temperature-icon"> 
             <img src={weather.icon} alt={weather.description} />
            </span>
            <span className="current-temperature-value"id="temperature">{Math.round(weather.temperature)}</span>
            <span className="current-temperature-unit">°C</span>
          </div>
        </div>
        <div className = "weather-forecast"></div>
      </main>
      <footer>
        <p>
          This project was coded by
          <a href="https://github.com/LesaN99" target="_blank" rel="noreferrer">Palesa Ndlovu</a> and is
          <a href="https://github.com/LesaN99/project2.git" target="_blank"  rel="noreferrer"> on GitHub</a> and
          <a href="https://my-awesome-weather-app-project.netlify.app/" target="_blank"  rel="noreferrer"> hosted on Netlify</a>
        </p>
      </footer>
      </div>
    </div>
   )



}