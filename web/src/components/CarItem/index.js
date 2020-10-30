import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

const CarItem = ({ carros }) => {
  return (
    <div className="lista-carros">
      <img src={carros.foto} alt={carros.nome} />
      <div>
        <NavLink
          className="NavLink"
          to={{
            pathname: '/comprar',
            state: carros.nome,
          }}
        >
          <strong>{carros.nome}</strong>
        </NavLink>
      </div>
    </div>
  );
};
export default CarItem;
