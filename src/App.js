import React, { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import InfoBox from './InfoBox';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  // useEffect = runs piece of code based on given condition
  // the code will run once
  // when component loads and not again after

  useEffect(() => {
    // async -> send req, wait for it, do something with data

    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, // United States, United Kingdom
            value: country.countryInfo.iso2, //UK, USAA, FR
          }));

          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = (e) => {
    const countryCode = e.target.value;

    setCountry(countryCode);
  };

  return (
    <div className='app'>
      <div className='app__header'>
        {/* header */}
        <h1> COVID-19 TRACKER</h1>
        {/* dropdown */}
        <FormControl className='app_dropdown'>
          <Select variant='outlined' onChange={onCountryChange} value={country}>
            <MenuItem value='worldwide'>Worldwide</MenuItem>
            {/* Loop through all the countries and show the dropdown of those countries */}

            {countries.map((country) => (
              <MenuItem value={country.value}> {country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* Info boxes */}
      <div className='app__stats'>
        <InfoBox title='Coronavirus cases' cases={123} total={200} />
        <InfoBox title='Recovered' cases={1234} total={3000} />
        <InfoBox title='Deaths' cases={12345} total={4000} />
      </div>

      {/* Table  */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
