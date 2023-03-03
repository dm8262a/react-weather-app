import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="contaire">
        <Weather defaultCity="New York"/>
        <footer>
          This project was coded by Daniela Mojica and it is {""}
          <a
            href="https://github.com/dm8262a/react-weather-app"
            target="_blank"
            className="footer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
