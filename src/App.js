import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';
import Navbar from './components/Navbar';
import CountrySpec from './pages/CountrySpec';
import HomePage from './pages/HomePage';

function App() {
  const [allData, setAllData] = useState([]);
  const [highDetCount, setHighDetCount] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://restcountries.com/v2/all');
      const data = await res.json();
      const newData = data.map((dat) => {
        return { ...dat, id: v4() };
      });
      setAllData(newData);
    };
    fetchData();
  }, []);
  // console.log(allData);

  const clickedCountry = (id) => {
    const newOne = allData.filter((data) => {
      return id === data.id;
    });

    setHighDetCount(...newOne);
  };

  console.log(highDetCount);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage allData={allData} clickedCountry={clickedCountry} />
        </Route>
        <Route>
          <CountrySpec path="/country/:name" highDetCount={highDetCount} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
