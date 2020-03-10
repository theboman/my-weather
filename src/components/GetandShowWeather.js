import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner/Spinner';
import WeatherResults from './WeatherResults';

const url = 'https://api.openweathermap.org/data/2.5/forecast';
const appID = {
  APPID: 'b11492f1aa8188079043aa8f50e9f9cd'
};
const GetandShowWeather = ({ locationData }) => {
  // console.log('Location Data:');
  // console.dir(locationData);
  const params = { ...appID, ...locationData };
  console.dir('this is params' + params);
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
  // console.log('this is the response state: ', weatherInfo);
  // console.log('loading is:', loading);

  // needs to get correct fileds from weather i.e. city plus correct params q: san franscico
  // needs to make sure no error gets returned if so show user

  return (
    <div>
      {loading ? <Spinner /> : <WeatherResults results={weatherInfo} />}
    </div>
  );
};
export default GetandShowWeather;
