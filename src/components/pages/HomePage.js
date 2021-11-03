import React from 'react';
import CountryList from '../CountryList';

function HomePage({ allData }) {
  return (
    <div>
      {!allData ? <div>Loading!</div> : <CountryList allData={allData} />}
    </div>
  );
}

export default HomePage;
