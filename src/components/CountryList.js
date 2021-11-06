import React from 'react';
import CountryLowDet from './CountryLowDet';

function CountryList({ allData, clickedCountry }) {
  return (
    <>
      {allData.map((data) => (
        <CountryLowDet
          key={data.id}
          data={data}
          clickedCountry={clickedCountry}
        />
      ))}
    </>
  );
}

export default CountryList;
