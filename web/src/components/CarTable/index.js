import React from 'react';
import EditIcon from '@material-ui/icons/Edit';

import './styles.css';
import api from '../../services/api';

function CarTable({ carros }) {
  async function handleUpdate(x) {
    let txt;
    const person = prompt('Entre o novo valor:');
    if (person == null || person === '') {
      txt = 'Nenhum valor digitado.';
    } else {
      txt = person;
      for (const i in carros) {
        if (carros[i] === x) {
          carros[i] = txt;
        }
      }
    }
    api.put('', {
      nome: carros.nome,
      modelo: carros.modelo,
      ano: carros.ano,
      cor: carros.cor,
      cpf: carros.cpf,
      foto: carros.foto,
      ultimodono: carros.ultimodono,
      kmrod: carros.kmrod,
    });
    window.location.reload();
  }

  return (
    <div id="car-form">
      <header>
        <img src={carros.foto} alt={carros.nome} />
        <strong>{carros.nome}</strong>
        <table className="blueTable">
          <thead>
            <tr>
              <th> Dados </th>
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Modelo:</td>
              <td>{carros.modelo}</td>
              <td>
                <button
                  type="button"
                  className="button-carform"
                  onClick={() => handleUpdate(carros.modelo)}
                >
                  <EditIcon />
                  Editar
                </button>
              </td>
            </tr>
            <tr>
              <td>Ano:</td>
              <td>{carros.ano}</td>
              <td>
                <button
                  type="button"
                  className="button-carform"
                  onClick={() => handleUpdate(carros.ano)}
                >
                  <EditIcon />
                  Editar
                </button>
              </td>
            </tr>
            <tr>
              <td>Cor:</td>
              <td>{carros.cor}</td>
              <td>
                <button
                  className="button-carform"
                  onClick={() => handleUpdate(carros.cor)}
                >
                  <EditIcon />
                  Editar
                </button>
              </td>
            </tr>
            <tr>
              <td>CPF:</td>
              <td>{carros.cpf}</td>
              <td>
                <button
                  className="button-carform"
                  onClick={() => handleUpdate(carros.cpf)}
                >
                  <EditIcon />
                  Editar
                </button>
              </td>
            </tr>
            <tr>
              <td>Ultimo dono:</td>
              <td>{carros.ultimodono}</td>
              <td>
                <button
                  className="button-carform"
                  onClick={() => handleUpdate(carros.ultimodono)}
                >
                  <EditIcon />
                  Editar
                </button>
              </td>
            </tr>
            <tr>
              <td>Kilometros rodados:</td>
              <td>{carros.kmrod}</td>
              <td>
                <button
                  className="button-carform"
                  onClick={() => handleUpdate(carros.kmrod)}
                >
                  <EditIcon />
                  Editar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default CarTable;
