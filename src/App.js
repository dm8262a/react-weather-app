import React from "react";
import Weather from "./Weather";

import background from "./images/tiffanyblue.jpg";

import "./App.css";

export default function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Weather defaultCity="New York" />
          </div>
        </div>
      </div>
      <div>
        <div className="card">
          <div className="card-github">
            <span className="github-link">
              <a
                href="https://github.com/dm8262a/react-weather-app"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Open-source code{" "}
              </a>
              <span className="creator-name"> by Daniela Mojica</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
