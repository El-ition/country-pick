import React from 'react';
import CountryLowDet from './CountryLowDet';

function CountryList({ allData, clickedCountry }) {
  return (
    <div className="countryList">
      {allData.map((data) => (
        <CountryLowDet
          key={data.id}
          data={data}
          clickedCountry={clickedCountry}
        />
      ))}
    </div>
  );
}

export default CountryList;
