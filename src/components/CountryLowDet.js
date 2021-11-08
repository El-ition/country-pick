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
      <h3>
        Population: <span>{data.population.toLocaleString()}</span>
      </h3>
      <h3>
        region: <span>{data.region}</span>
      </h3>
      <h3>
        capital: <span>{data.capital}</span>
      </h3>
      <Link
        className="countryLowDet__container-link"
        to={`/country/${data.name}`}
        onClick={switchTomoreDetail}
      >
        More details...
      </Link>
    </div>
  );
}

export default CountryLowDet;
