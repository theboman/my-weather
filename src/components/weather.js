import React, { useState, useEffect } from 'react';

function Weather() {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [city, setCity] = useState('');
  const [lat, setLat] = useState(0.0);
  const [long, setLong] = useState(0.0);

  // useEffect(() => {
  //     fetch()
  //     };
  // }, [input])

  const handleChangeCity = e => {
    setCity(e.target.value);
  };

  const handleChangeLat = e => {
    setLat(e.target.value);
  };

  const handleChangeLong = e => {
    setLong(e.target.value);
  };

  const handleSubmit = e => {
    alert('A name was submitted: ' + city + lat + long);
    e.preventDefault();
  };

  return (
    <div className="weather">
      <form onSubmit={handleSubmit} className="form_city">
        <label>
          City:
          <input
            type="text"
            name="city"
            value={city}
            onChange={handleChangeCity}
          ></input>
          <br></br>
          Latitude:
          <input
            type="text"
            name="Lat"
            value={lat}
            onChange={handleChangeLat}
          ></input>
          <br></br>
          Longitude:
          <input
            type="text"
            name="Lat"
            value={long}
            onChange={handleChangeLong}
          ></input>
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Weather;
