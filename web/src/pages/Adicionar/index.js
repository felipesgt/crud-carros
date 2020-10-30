import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Input from '../../components/Input';
import api from '../../services/api';

import './styles.css';

function Adicionar() {
  const [nome, setNome] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState(0);
  const [cor, setCor] = useState('');
  const [foto, setFoto] = useState('');
  const [cpf, setCpf] = useState('');
  const [ultimodono, setUltimodono] = useState('');
  const [kmrod, setKmrod] = useState(0);
  const [error, setError] = React.useState(null);

  const history = useHistory();

  function validateCpf(value) {
    if (value.length === 0) {
      alert('Preencha um Valor');
    } else if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value)) {
      setError('Preencha um CPF válido');
    } else {
      setError(null);
      return true;
    }
    return null;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (validateCpf(cpf)) {
      api.post('cars', {
        nome,
        modelo,
        ano,
        cor,
        foto,
        cpf,
        ultimodono,
        kmrod,
      });
      history.push('/');
    } else {
      alert(error);
    }
  }
  function handleBlur({ target }) {
    validateCpf(target.value);
  }
  return (
    <>
      <Header />
      <div id="form-container">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados do veículo</legend>
            <Input
              name="nome"
              label="Nome do Carro"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
            <Input
              name="modelo"
              label="Modelo"
              value={modelo}
              onChange={(e) => {
                setModelo(e.target.value);
              }}
            />
            <Input
              name="ano"
              label="Ano"
              value={ano}
              onChange={(e) => {
                setAno(e.target.value);
              }}
            />
            <Input
              name="cor"
              label="Cor"
              value={cor}
              onChange={(e) => {
                setCor(e.target.value);
              }}
            />
            <Input
              name="foto"
              label="Foto"
              value={foto}
              onChange={(e) => {
                setFoto(e.target.value);
              }}
            />
            <Input
              name="cpf"
              label="CPF"
              value={cpf}
              onBlur={handleBlur}
              onChange={(e) => {
                setCpf(e.target.value);
              }}
            />
            <Input
              name="ultimodono"
              label="Ultimo dono"
              value={ultimodono}
              onChange={(e) => {
                setUltimodono(e.target.value);
              }}
            />
            <Input
              name="kmrod"
              label="Kilometros rodados"
              value={kmrod}
              onChange={(e) => {
                setKmrod(e.target.value);
              }}
            />
            <div id="button-style">
              <button id="submit-button" type="submit">
                Cadastrar
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default Adicionar;
