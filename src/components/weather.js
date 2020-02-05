import React, { useState } from 'react';
import styles from './Weather.module.css';

function Weather() {
  const [locationData, setLocationData] = useState({
    city: '',
    zipcode: '',
    lat: '',
    lon: ''
  });

  const callbackValidate = (name, value) => {
    console.log('name in callback: ' + name);
    console.log('value in callback: ' + value);

    switch (name) {
      case (name = 'city'):
        console.log('you have a city input! ');
        if ((value = 'la')) {
          console.log('your awesome to live in la');
        }
        break;

      case (name = 'zipcode'):
        console.log('you have a zipcode! ');
        break;

      case (name = 'lat'):
        console.log('you have a latitude! ');
        break;

      case (name = 'lon'):
        console.log('you have a longitude! ');
        break;

      default:
        console.log('this is the default');
        break;
    }
  };

  const handleLocationInput = e => {
    const name = e.target.name;
    const value = e.target.value;

    setLocationData(
      { ...locationData, [name]: value },
      callbackValidate(name, value)
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(
      'A name was submitted: ' +
        locationData.city +
        locationData.lat +
        locationData.lon
    );
  };

  return (
    <div className={styles.weather}>
      <form onSubmit={handleSubmit} className="form_city">
        <label>
          City:
          <input
            type="text"
            name="city"
            value={locationData.city}
            onChange={handleLocationInput}
          ></input>
          <br></br>
          Zip Code:
          <input
            type="text"
            name="zipcode"
            value={locationData.zipcode}
            onChange={handleLocationInput}
          ></input>
          <fieldset>
            <legend>Latitude /Longitude</legend>
            <br></br>
            Latitude:
            <input
              type="text"
              name="lat"
              value={locationData.lat}
              onChange={handleLocationInput}
            ></input>
            <br></br>
            Longitude:
            <input
              type="text"
              name="long"
              value={locationData.long}
              onChange={handleLocationInput}
            ></input>
          </fieldset>
        </label>

        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Weather;
