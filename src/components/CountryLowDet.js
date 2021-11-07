import React from 'react';
import { Link } from 'react-router-dom';

function CountryLowDet({ data, clickedCountry }) {
  const switchTomoreDetail = () => {
    clickedCountry(data.id);
  };
  return (
    <div className="countryLowDet__container">
      <img src={data.flags.png} alt={data.name} />
      <h1>{data.name}</h1>
      <h3>Population: {data.population.toLocaleString()}</h3>
      <h3>region: {data.region}</h3>
      <h3>capital: {data.capital}</h3>
      <Link to={`/country/${data.name}`} onClick={switchTomoreDetail}>
        Click to see More!!
      </Link>
    </div>
  );
}

export default CountryLowDet;
