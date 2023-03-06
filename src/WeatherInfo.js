import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="date">
        <li>
          {" "}
          <span className="timeDate">
          <FormattedDate date={props.data.date}/>
          </span>
        </li>
        <li className="text-capitalize" id="description">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.iconUrl} size={52} />
            </div>

            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <span className="humidity">Humidity: </span>
              {props.data.humidity} %{" "}
            </li>
            <li>
              <span className="wind">Wind: </span>
              {props.data.wind} km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
