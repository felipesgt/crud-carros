import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import Header from '../../components/Header';
import CarItem from '../../components/CarItem';

import './styles.css';

function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    api.get('get').then((response) => {
      setCars(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {cars.map((carros) => {
          return <CarItem key={carros.nome} carros={carros} />;
        })}
      </div>
    </>
  );
}

export default Home;
