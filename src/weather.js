import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Dublin",
    country: "Ireland",
    date: "Feb 9th, 2021",
    time: "11:00",
    temperature: 10,
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    wind: 15,
    humidity: 10,
    sunrise: 8,
    sunset: 5
  };

  return (
    <div className="Weather">
      <form className="search-form">
        <div className="row">
          <div className="col-1">
            <input
              type="search"
              placeholder="...type to search"
              autoFocus="on"
              autoComplete="off"
              class="form-control shadow-sm"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-outline-info shadow-sm"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Current Location"
              className="form-control btn btn-outline-info shadow-sm"
            />
          </div>
          <div className="col-3">
            <ul>
              <li>{weatherData.date}</li>
              <li>{weatherData.time}</li>
            </ul>
          </div>
        </div>
      </form>
      <h1>
        {weatherData.city}, {weatherData.country}
      </h1>
      <h6>{weatherData.description}</h6>
      <div className="row">
        <div className="col-4">
          <div className="clearfix">
            <img
              src={weatherData.imgUrl}
              alt="weather icon"
              className="weather-icon float-left"
            />
          </div>
        </div>

        <div className="col-4">
          <div className="float-left temperature">
            <strong>{weatherData.temperature}</strong>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>
        </div>

        <div className="col-4">
          <ul>
            <li>
              <strong>Wind: </strong>
              {weatherData.wind} km/h
            </li>
            <li>
              <strong>Humidity:</strong> {weatherData.humidity}%
            </li>
            <li>
              <strong>Sunrise:</strong> {weatherData.sunrise} am
            </li>
            <li>
              <strong>Sunset:</strong> {weatherData.sunset}pm
            </li>
          </ul>
        </div>
      </div>
      <p class="footnote">
        <a href="https://github.com/SiobhanWhyte/Weather-App-SW">
          Open source code
        </a>
        , by Siobhan Whyte
      </p>
    </div>
  );
}