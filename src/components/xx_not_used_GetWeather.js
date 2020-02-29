import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner/Spinner';
import WeatherResults from './WeatherResults';

const url = 'http://api.openweathermap.org/data/2.5/forecast';
const params = {
  APPID: 'b11492f1aa8188079043aa8f50e9f9cd',
  q: 'London'
};

// need to set the params dynamically ...params add key and value for field entry

const GetandShowWeather = props => {
  console.dir('this is locationdata:', props);
  const [weatherInfo, setWeatherInfo] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(url, { params });
      let { data } = res;

      setWeatherInfo(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log('this is the response state: ', weatherInfo);
  console.log('loading is:', loading);

  return (
    <div>
      {loading ? <Spinner /> : <WeatherResults results={weatherInfo} />}
    </div>
  );
};
export default GetandShowWeather;
