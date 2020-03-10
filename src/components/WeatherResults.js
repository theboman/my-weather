import React from 'react';
import kelvin_convert from '../utilities/kelvin_convert';

const WeatherResults = props => {
  const { name } = props.results.city;
  const { temp } = props.results.list[0].main;
  const [celsius, farhenheit] = kelvin_convert(temp);

  // console.log(props);
  // console.log(name);
  // console.log('this is temp: ', props.results.list[0].main.temp);
  // console.log(celsius);
  // console.log(farhenheit);

  return (
    <div key="weather01">
      <div className="display_weather">
        <div className="city">
          <div className="name">{name} </div>
          <div className="icon"> ICON </div>
        </div>
        <div className="temp">{celsius} C</div>
        <div className="temp">{farhenheit} F</div>
      </div>
    </div>
  );
};

export default WeatherResults;
