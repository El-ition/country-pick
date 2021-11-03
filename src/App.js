import { useEffect, useState } from 'react';
import CountryList from './components/CountryList';
import Navbar from './components/Navbar';
import HomePage from './components/pages/HomePage';

function App() {
  const [allData, setAllData] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://restcountries.com/v2/all');
      const data = await res.json();
      setAllData(data);
    };
    fetchData();
  }, []);
  console.log(allData);
  return (
    <>
      <Navbar />
      <HomePage allData={allData} />
    </>
  );
}

export default App;
