import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";

function Weather(props) {
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState({ init: true });

  useEffect(() => {
    if (props.name && cityName !== props.name) {
      setCityName(props.name);
      getWeatherInfo(props.name);
    }
  }, [props, cityName]);

  function getWeatherInfo(city) {
    axios
      .get(`https://goweather.herokuapp.com/weather/${city}`)
      .then((response) => {
        setWeather(response.data);
      });
  }

  function Forecast() {
    if (weather.init) {
      return (
        <div>
          <h3 className="subtitle"> Please enter city name</h3>
        </div>
      );
    } else if (weather.temperature) {
      return (
        <div>
          <h2 className="forecast-title">Weather for the upcoming 3 days</h2>
          
          {weather.forecast.map((cast) => {
            return (
              <div className="temperature">
                <ul className="forecast-day" key ={cast.day}>   
                  <li className="forecast-item">{cast.temperature}</li> 
                </ul>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div>
          <h3 className="warning-message">
            Sorry! Couldn't find the place {cityName}
          </h3>
        </div>
      );
    }
  }
  return (
    <div>
      <Forecast> </Forecast>
    </div>
  );
}

export default Weather;
