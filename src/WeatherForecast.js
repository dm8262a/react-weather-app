import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "6df7e1335a2ad82c3029b7821a8d1f8c";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thus </div>
          <WeatherIcon code="10d" size={24} />
          <div className="WeatherForecast-temps">
            <span className="WeatherForecast-temp-max">19° </span>
            <span className="WeatherForecast-temp-min">10° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
