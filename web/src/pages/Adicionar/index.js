import React, { useState } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import api from '../../services/api';
import './styles.css';
import { useHistory } from 'react-router-dom';

function Adicionar() {
  const [nome, setNome] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState(0);
  const [cor, setCor] = useState('');
  const [foto, setFoto] = useState('');
  const [cpf, setCpf] = useState('');
  const [ultimodono, setUltimodono] = useState('');
  const [kmrod, setKmrod] = useState(0);
  const history = useHistory();

  async function handleSubmit() {
    api.post('cars', {
      nome,
      modelo,
      ano,
      cor,
      foto,
      cpf,
      ultimodono,
      kmrod,
    }).then(
      alert('Cadastro realizado com sucesso!'),
    )
    history.push('/');
  }

  return (
    <div id="form" className="container">
      <Header />
      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados do veículo</legend>
            <Input
              name="nome"
              label="Nome do Carro"
              value={nome}
              onChange={(e) => { setNome(e.target.value); }}
            />
            <Input
              name="modelo"
              label="Modelo"
              value={modelo}
              onChange={(e) => { setModelo(e.target.value); }}
            />
            <Input
              name="ano"
              label="Ano"
              value={ano}
              onChange={(e) => { setAno(e.target.value); }}
            />
            <Input
              name="cor"
              label="Cor"
              value={cor}
              onChange={(e) => { setCor(e.target.value); }}
            />
            <Input
              name="foto"
              label="Foto"
              value={foto}
              onChange={(e) => { setFoto(e.target.value); }}
            />
            <Input
              name="cpf"
              label="CPF"
              value={cpf}
              onChange={(e) => { setCpf(e.target.value); }}
            />
            <Input
              name="ultimodono"
              label="Ultimo dono"
              value={ultimodono}
              onChange={(e) => { setUltimodono(e.target.value); }}
            />
            <Input
              name="kmrod"
              label="Kilometros rodados"
              value={kmrod}
              onChange={(e) => { setKmrod(e.target.value); }}
            />
            <button id="submit-button" type="submit">
              Cadastrar
            </button>
          </fieldset>

        </form>
      </main>
    </div>
  );
}

export default Adicionar;
