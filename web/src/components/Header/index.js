import React from 'react';
import { Link } from 'react-router-dom';

import car from '../../assets/car.svg';
import './styles.css';

const Header = () => (
  <header className="page-header">
    <img alt="" src={car} />
    <nav>
      <ul className="header-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/adicionar">Monte o Seu</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
