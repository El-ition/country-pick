import React from 'react';

function CountrySpec({ highDetCount }) {
  return (
    <div>
      <h1>{highDetCount.name}</h1>
      <h1>{highDetCount.region}</h1>
    </div>
  );
}

export default CountrySpec;
