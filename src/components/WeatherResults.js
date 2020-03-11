import React from 'react';
import kelvin_convert from '../utilities/kelvin_convert';

const WeatherResults = props => {
  const { name } = props.results.city;
  const { temp } = props.results.list[0].main;
  const [celsius, farhenheit] = kelvin_convert(temp);

  return (
    <div key="weather01">
      <div className="display_weather">
        <div className="city">
          <div className="name">{name} </div>
          <div className="icon">
            <div className="weather_sunny"> </div>
          </div>
        </div>
        <div className="temp">
          {celsius} <span className="smalltype">C.</span>
        </div>
        <div className="temp">
          {farhenheit} <span className="smalltype">F.</span>
        </div>
        <div className="delete_this">+</div>
      </div>
    </div>
  );
};

export default WeatherResults;
