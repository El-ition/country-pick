import React from 'react';

function CountryLowDet({ data }) {
  const switchTomoreDetail = () => {
    console.log(data);
  };
  return (
    <div onClick={switchTomoreDetail}>
      <h1>{data.name}</h1>
      {/* <img src={data.flags.png} alt="" /> */}
      <h3>capital: {data.capital}</h3>
      <h3>region: {data.region}</h3>
      <h5>native name: {data.nativeName}</h5>
    </div>
  );
}

export default CountryLowDet;
