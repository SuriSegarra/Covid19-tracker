import React, { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import './App.css';

function App() {
  // state how to write a variable in react<<
  const [countries, setCountries] = useState([]);
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
  return (
    <div className='app'>
      <div className='app__header'>
        <h1> COVID-19 TRACKER</h1>
        <FormControl className='app_dropdown'>
          <Select variant='outlined' value='abc'>
            {/* Loop through all the countries and show the dropdown of those countries */}

            {countries.map((country) => (
              <MenuItem value={country.value}> {country.name}</MenuItem>
            ))}

            {/* <MenuItem value='worldwide'> Worldwide</MenuItem>
            <MenuItem value='worldwide'> Option two</MenuItem>
            <MenuItem value='worldwide'> Option 3</MenuItem>
            <MenuItem value='worldwide'> Option 4</MenuItem> */}
          </Select>
        </FormControl>
      </div>

      {/* Header */}
      {/* Title + dropdown */}

      {/* Info boxes */}
      {/* Info boxes */}
      {/* Info boxes */}

      {/* Table  */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
