import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thus </div>
          <WeatherIcon code="10d" size={24}/>
          <div className="WeatherForecast-temps">
            <span className="WeatherForecast-temp-max">19° </span>
            <span className="WeatherForecast-temp-min">10° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
