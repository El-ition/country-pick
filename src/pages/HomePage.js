import React from 'react';
import CountryList from '../components/CountryList';

function HomePage({ allData, clickedCountry }) {
  return (
    <div>
      {!allData ? (
        <div>Loading!</div>
      ) : (
        <CountryList allData={allData} clickedCountry={clickedCountry} />
      )}
    </div>
  );
}

export default HomePage;
