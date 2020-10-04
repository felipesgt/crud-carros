import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import api from '../../services/api';
import CarTable from '../../components/CarTable';
import './styles.css'
const Comprar = () => {
  const [cars, setCars] = useState([]);
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    api.get('get').then((response) => {
      setCars(response.data);
    });
  }, []);

  async function handleBuy() {
    await api.delete(`${location.state}`).then(
      history.push('/'),
      alert('Parabéns! Carro comprado com sucesso.'),
    );
  }

  return (
    <div id="comprar">
      <Header />
      {cars.map((carros) => {
        if (carros.nome === location.state) {
          return <CarTable carros={carros} />;
        }
        return true;
      })}
      <div id="botao">
      <button onClick={handleBuy}>Comprar Carro</button>

      </div>
    </div>
  );
};

export default Comprar;
