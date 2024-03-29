
import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Weatherinfo(props) {
    return (
        <div className="Weatherinfo">
             <h1>{props.data.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={props.data.date} />
                </li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <div className="float-left">
                        <WeatherIcon code={props.data.icon} size={52} />
                        </div>
                    <WeatherTemperature celsius= {props.data.temperature} />
                   </div>
                </div>
                <div className="col-6">
                    <uL>
                        <li>humidity: {props.data.humidity}%</li>
                        <li>wind: {props.data.wind}km/h</li> 
                    </uL>
                </div>
            </div>
        </div>
    )
}
