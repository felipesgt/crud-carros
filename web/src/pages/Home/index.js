import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import CarItem from '../../components/CarItem';
import './styles.css'
function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    api.get('get').then(response =>{
      setCars(response.data);
    })  
  }, [])
 
  return (
    <div id="home">
      <Header />
            <button><a href="/adicionar">Adicionar Carro</a></button>
      <div id="container">
        <main>
        {cars.map((carros) => {
          return <CarItem key={carros.nome} carros={carros} />
        })}
      </main>
      </div>
    </div>
  );
}

export default Home;