import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
const CarItem = ({carros}) => {
    return(
      <article id="lista-carros">
      <header>
       <img src={carros.foto} alt={carros.nome} />
        <div>
          <Link to={{
            pathname: "/comprar",
            state: carros.nome}}>
          <strong>{carros.nome}</strong>
          </Link>
        </div>
      </header>
    </article>
    );
}
export default CarItem;