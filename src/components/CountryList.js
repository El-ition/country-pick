import React from 'react';
import { v4 } from 'uuid';
import CountryLowDet from './CountryLowDet';

function CountryList({ allData }) {
  return (
    <>
      {allData.map((data) => (
        <CountryLowDet key={v4()} data={data} />
      ))}
    </>
  );
}

export default CountryList;
