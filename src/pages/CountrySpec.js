import React from 'react';
import { useHistory } from 'react-router-dom';
import { countries } from 'country-data';

function CountrySpec({ highDetCount, clickedCountry }) {
  const history = useHistory();

  // useEffect(() => {
  //   clickedCountry(highDetCount.id);
  // }, [clickedCountry, highDetCount.id]);
  // console.log(highDetCount);
  // console.log(highDetCount.currencies[0].name);
  return (
    <>
      <div>
        <div>
          <button onClick={() => history.push('/')}>Back</button>
        </div>
        <div>
          <img src={highDetCount.flags.svg} alt={highDetCount.name} />
        </div>
        <div>
          <h1>{highDetCount.name}</h1>
          <h3>Native Name: {highDetCount.nativeName}</h3>
          <h3>Population: {highDetCount.population.toLocaleString()}</h3>
          <h3>Region: {highDetCount.region}</h3>
          <h3>SubRegion: {highDetCount.subregion}</h3>
          <h3>Capital: {highDetCount.capital}</h3>
          <h3>Timezones: {highDetCount?.timezones[0]}</h3>
          <h3>
            Currencies:
            {highDetCount?.currencies[0]?.name}
          </h3>
          <div>
            Languages:
            {highDetCount?.languages.map((lang, i) => (
              <h4 key={i}>{lang.name}</h4>
            ))}
          </div>
          <div>
            Border Countries:
            {highDetCount?.borders?.map((bord, i) => (
              <h4 key={i}>{countries[`${bord}`].name}</h4>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CountrySpec;
