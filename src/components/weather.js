import React, { useState } from 'react';
import styles from './Weather.module.css';
import GetandShowWeather from './GetandShowWeather';

function Weather() {
  const [submitted, setSubmission] = useState(false);
  const [formError, setFormError] = useState({
    errorForm: '',
    errorCity: '',
    errorZipcode: '',
    errorLat: '',
    errorLon: ''
  });

  const [locationData, setLocationData] = useState({
    city: '',
    zipcode: '',
    lat: '',
    lon: ''
  });

  const callbackValidate = (name, value) => {
    const regex_StringOnly = /[^a-z\s]/gim;
    const regex_IntOnly = /[^0-9]/gm;
    const regex_NumOnly = /[^0-9./+-]/gm;
    //const regex_NumOnly5digits = '/';
    //const regex_NumOnlyFloat = /^[-+]?\d*\.?\d*$/g;

    switch (name) {
      case 'city':
        if (regex_StringOnly.test(value)) {
          setFormError({
            ...formError,
            errorCity: 'Please only A-Z a-z characters'
          });
        } else {
          setFormError({ ...formError, errorCity: '' });
        }
        break;

      case 'zipcode':
        if (regex_IntOnly.test(value)) {
          setFormError({ ...formError, errorZipcode: 'Please only 0-9!' });
        } else {
          setFormError({ ...formError, errorZipcode: '' });
        }

        break;

      case 'lat':
        if (regex_NumOnly.test(value)) {
          setFormError({ ...formError, errorLat: 'Please only 0-9!' });
        } else if (value > 180 || value < -180) {
          console.log('Please enter a value between 180 and -180!');
          setFormError({
            ...formError,
            errorLat: 'Please enter a value between 180 and -180!'
          });
        } else {
          setFormError({ ...formError, errorLat: '' });
        }
        break;

      case 'lon':
        if (regex_NumOnly.test(value)) {
          setFormError({ ...formError, errorLon: 'Please only 0-9!' });
        } else if (value > 180 || value < -180) {
          console.log('Please enter a value between 180 and -180!');
          setFormError({
            ...formError,
            errorLon: 'Please enter a value between 180 and -180!'
          });
        } else {
          setFormError({ ...formError, errorLon: '' });
        }
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
    setSubmission(true);
    alert(
      `These are the inputs:    
      City: ${locationData.city} 
      Zip: ${locationData.zipcode}
      Lat: ${locationData.lat}
      Long: ${locationData.lon}`
    );
  };

  return (
    <div className={styles.weather}>
      <div className="grid_container">
        <div className="side_left"></div>
        <div className="center_input_box">
          <form onSubmit={handleSubmit} action="" className="input_container">
            <div className="input_group_city input_group">
              <div className="title_city title">City:</div>
              <input
                className="input_city"
                type="text"
                name="city"
                value={locationData.city}
                onChange={handleLocationInput}
              ></input>
              <div className="error_message">{formError.errorCity}</div>
            </div>

            <div className="divider">|</div>

            <div className="input_group_zip input_group">
              <div className="title_zip title"> Zip Code: </div>
              <input
                className="input_zip"
                type="text"
                name="zipcode"
                value={locationData.zipcode}
                onChange={handleLocationInput}
              ></input>
              <div className="error_message">{formError.errorZipcode}</div>
            </div>

            <div className="divider">|</div>

            <div className="input_group_lat_lon input_group">
              <div className="group_lat_lon ">
                <div className="input_lat input_group">
                  <div className="title_lat title">Lat:</div>
                  <input
                    className="narrow"
                    type="text"
                    name="lat"
                    value={locationData.lat}
                    onChange={handleLocationInput}
                  ></input>
                </div>
                <div className="input_lon input_group">
                  <div className="title_lon title">Lon:</div>
                  <input
                    className="narrow"
                    type="text"
                    name="lon"
                    value={locationData.lon}
                    onChange={handleLocationInput}
                  ></input>
                </div>
              </div>
              <div className="error_message">{formError.errorLat}</div>
            </div>

            <div className="divider">|</div>

            <div className="input_submit">
              <input className="submit" type="submit" value="SUBMIT"></input>
            </div>
          </form>
          <GetandShowWeather locationData={submitted ? locationData : ''} />
        </div>
        <div className="side_right"></div>
      </div>
    </div>
  );
}

export default Weather;
