import React from 'react';
import { useHistory } from 'react-router-dom';
import { countries } from 'country-data';

function CountrySpec({ highDetCount, clickedCountry }) {
  const history = useHistory();
  console.log(highDetCount);

  // useEffect(() => {
  //   clickedCountry(highDetCount.id);
  // }, [clickedCountry, highDetCount.id]);
  // console.log(highDetCount);
  // console.log(highDetCount.currencies[0].name);
  return (
    <div className="countrySpec">
      <div className="countrySpec__back">
        <button onClick={() => history.push('/')}>Back</button>
      </div>
      <div className="countrySpec__body">
        <img src={highDetCount.flags.svg} alt={highDetCount.name} />

        <div className="countrySpec__body-detail">
          <div className="countrySpec__body-detail-base">
            <div>
              <h1>{highDetCount.name}</h1>
            </div>
            <div className="countrySpec__body-detail-base-divide">
              <div className="div1">
                <h2>
                  Native Name: <span>{highDetCount.nativeName}</span>{' '}
                </h2>
                <h2>
                  Population:{' '}
                  <span>{highDetCount.population.toLocaleString()}</span>{' '}
                </h2>
                <h2>
                  Region: <span>{highDetCount.region}</span>{' '}
                </h2>
                <h2>
                  SubRegion: <span>{highDetCount.subregion}</span>{' '}
                </h2>
                <h2>
                  Capital: <span>{highDetCount.capital}</span>{' '}
                </h2>
              </div>
              <div className="div2">
                <h2>
                  Timezones: <span> {highDetCount?.timezones[0]}</span>
                </h2>
                <h2>
                  Currencies:
                  <span> {highDetCount?.currencies[0]?.name}</span>
                </h2>
                <h2>
                  Languages:{' '}
                  {highDetCount?.languages.map((lang, i) => (
                    <span key={i}>{lang.name}, </span>
                  ))}
                </h2>
              </div>
            </div>
          </div>
          <div className="countrySpec__body-detail-neib">
            <h2>Border Countries:</h2>
            {highDetCount?.borders?.map((bord, i) => (
              <h4 key={i}>{countries[`${bord}`].name}</h4>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountrySpec;
