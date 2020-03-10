import React, { useState } from 'react';
import styles from './Weather.module.css';
import GetandShowWeather from './GetandShowWeather';

// needed to add the correct case
// this is updated

function Weather() {
  const [submitted, setSubmission] = useState(false);
  //const [valid, setValid] = useState(true);
  const [formError, setFormError] = useState({
    errorForm: '',
    errorCity: '',
    errorZip: '',
    errorLatLon: ''
  });

  const [locationData, setLocationData] = useState({
    q: '',
    zip: '',
    lat: '',
    lon: ''
  });

  // const [locationData, setLocationData] = useState({});

  let enabledCity = true;
  let enabledZip = false;
  let enabledLatLon = true;
  // don't think I need two error fields for lat/lon can be one only displays one error to user

  const formValid = (formError, locationData) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formError).forEach(val => {
      val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(locationData).forEach(val => {
      val.length > 0 && (valid = false);
    });

    return valid;
  };

  const callbackValidate = (name, value) => {
    const regex_StringOnly = /[^a-z\s]/gim;
    const regex_IntOnly = /[^0-9]/gm;
    const regex_NumOnly = /[^0-9./+-]/gm;

    switch (name) {
      case 'q':
        if (regex_StringOnly.test(value)) {
          setFormError({
            ...formError,
            errorCity: 'Please only A-Z a-z characters'
          });
        } else {
          setFormError({ ...formError, errorCity: '' });
        }
        if (value.length > 0) {
          enabledLatLon = false;
          enabledZip = false;
        }
        break;

      case 'zip':
        if (regex_IntOnly.test(value)) {
          setFormError({ ...formError, errorZip: 'Please only 0-9!' });
        } else {
          setFormError({ ...formError, errorZip: '' });
        }

        break;

      case 'lat':
        if (regex_NumOnly.test(value)) {
          setFormError({ ...formError, errorLatLon: 'Please only 0-9!' });
        } else if (value > 180 || value < -180) {
          console.log('Please enter a value between 180 and -180!');
          setFormError({
            ...formError,
            errorLat: 'Please enter a value between 180 and -180!'
          });
        } else {
          setFormError({ ...formError, errorLatLon: '' });
        }
        break;

      case 'lon':
        if (regex_NumOnly.test(value)) {
          setFormError({ ...formError, errorLatLon: 'Please only 0-9!' });
        } else if (value > 180 || value < -180) {
          console.log('Please enter a value between 180 and -180!');
          setFormError({
            ...formError,
            errorLatLon: 'Please enter a value between 180 and -180!'
          });
        } else {
          setFormError({ ...formError, errorLatLon: '' });
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
    //else {
    //   console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    // }
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
                name="q"
                value={locationData.q || ''}
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
                // maxLength="5"
                name="zip"
                value={locationData.zip || ''}
                onChange={handleLocationInput}
                // disabled={enabledZip ? 'disabled' : ''}
              ></input>
              <div className="error_message">{formError.errorZip}</div>
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
                    value={locationData.lat || ''}
                    onChange={handleLocationInput}
                  ></input>
                </div>
                <div className="input_lon input_group">
                  <div className="title_lon title">Lon:</div>
                  <input
                    className="narrow"
                    type="text"
                    name="lon"
                    value={locationData.lon || ''}
                    onChange={handleLocationInput}
                  ></input>
                </div>
              </div>
              <div className="error_message">{formError.errorLatLon}</div>
            </div>

            <div className="divider">|</div>

            <div className="input_submit">
              <input className="submit" type="submit" value="SUBMIT"></input>
            </div>
          </form>
          {submitted ? <GetandShowWeather locationData={locationData} /> : ''}
          {/* <GetandShowWeather locationData={submitted ? locationData : ''} /> */}
        </div>
        <div className="side_right"></div>
      </div>
    </div>
  );
}

export default Weather;
