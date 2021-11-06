import React from 'react';
import { Link } from 'react-router-dom';

function CountryLowDet({ data, clickedCountry }) {
  const switchTomoreDetail = () => {
    clickedCountry(data.id);
  };
  return (
    <div>
      <h1>{data.name}</h1>
      {/* <img src={data.flags.png} alt="" /> */}
      <h3>capital: {data.capital}</h3>
      <h3>region: {data.region}</h3>
      <h5>native name: {data.nativeName}</h5>
      <Link to={`/country/${data.name}`} onClick={switchTomoreDetail}>
        Click to see More!!
      </Link>
    </div>
  );
}

export default CountryLowDet;
