import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);
  const [CountriesVisited, setCountriesVisited] = useState([]);
  const handleVisitedCountries = (country) => {
    const newVisited = [...CountriesVisited,country];
    setCountriesVisited(newVisited);
  };
  return (
    <div>
      <h1>Traveling Countries</h1>
      <h2>Visited so far: {CountriesVisited.length}</h2>
      <ol>
        {CountriesVisited.map(con=> <li>{con}</li>)}
      </ol>
      <div className="countries">
        {countries.map((country) => (
            <Country 
                key={country.cca3} 
                country={country}
                handleVisitedCountries={handleVisitedCountries}>
            </Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
