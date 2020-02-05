import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetShowWeather = props => {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [testInfo, setTestInfo] = useState({
    cod: '400',
    no: 20,
    cnt: 400,
    city: {
      name: 'london',
      country: 'GB'
    }
  });
  const url = 'http://api.openweathermap.org/data/2.5/forecast';

  useEffect(() => {
    axios
      .get(url, {
        params: {
          APPID: 'b11492f1aa8188079043aa8f50e9f9cd',
          q: 'London'
        }
      })
      .then(function(response) {
        setWeatherInfo(response.data);
        console.log('this is the response: ' + response.data.city.name);
        //console.log('this is weather info: ' + weatherInfo.city);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);
  //console.log('this is the response state: ' + weatherInfo.city.name);
  return (
    <div className="data">
      <ul>
        <li key="city">
          We hope this will work this is the number in javascript cod = plus
          this for my own test:
          {weatherInfo.city.name}
          {testInfo.city.name}
        </li>
      </ul>
      {/* This is working? This is the weather for {weatherInfo.city.name} */}
    </div>
  );
};

export default GetShowWeather;
