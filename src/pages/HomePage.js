import React, { useState } from 'react';
import CountryList from '../components/CountryList';

function HomePage({ allData, clickedCountry }) {
  const [searchInput, setSearchInput] = useState('');
  const [searchedData, SetsearchedData] = useState(allData);

  const handleSearch = () => {
    if (searchInput.trim()) {
      const userSearched = allData.filter((dat) => {
        return dat.name.toLowerCase().includes(searchInput.toLowerCase());
      });
      // console.log(userSearched);
      SetsearchedData(userSearched);
      setSearchInput('');
    } else {
      SetsearchedData(allData);
    }
  };
  console.log(searchedData);
  // console.log(allData);

  // console.log(searchInput);

  return (
    <div>
      <div>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <label htmlFor="region"> Filter by region</label>
        <select
          id="region"
          value="Filter by region"
          onChange={(e) => e.target.value}
        >
          {allData.map((data) => (
            <option key={data.id} value={data.region}>
              {data.region}
            </option>
          ))}
        </select>
      </div>
      <CountryList allData={searchedData} clickedCountry={clickedCountry} />
    </div>
  );
}

export default HomePage;
