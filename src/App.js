import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dublin" />

        <footer>
          Coded by{" "}
          <a href="https://www.linkedin.com/in/siobhankwhyte/" target="_blank">
            Siobhan Whyte
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/SiobhanWhyte/weather-app-react"
            target="_blank"
          >
          open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://jolly-northcutt-469a3b.netlify.app/?"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}