import React, { useState } from 'react';
import './Country.css';

const Country = ({country,handleVisitedCountries}) => {
    const [Visited,setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!Visited);
        handleVisitedCountries(country.name.common);
    }
    return (
        <div className={`country ${Visited?'country-visited':''}`}>
            <h3>Name: {country.name.common}</h3>
            <img src={country.flags.png} alt="" />
            <p>Capital: {country.capital}</p>
            <button onClick={handleVisited}>{Visited?'Visited':'Not Visited'}</button>
        </div>
    );
};

export default Country;