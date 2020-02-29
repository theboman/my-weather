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
    <div>
      hello weather
      <div className="city">
        {name} the temperature is: {temp} in Kelvin {celsius} C and {farhenheit}
        F.
      </div>
    </div>
  );
};

export default WeatherResults;
