import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../assets/css/admin_pages.css'
import API from '../api/api.js';

function ContactRead() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    fetchChamados();
  }, []);

  const fetchChamados = () => {
    API.get(`/chamado`) // Ajuste para o endpoint correto do backend
      .then((response) => {
        setAPIData(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar os chamados:", error);
      });
  };

  const setData = (data) => {
    // Ajuste de acordo com os campos do chamado no backend
    let { id_chamado, nome_cliente, fone_cliente, email_cliente, desc_tipo, desc_marca, desc_produto, nr_serie, capacidade, problema, solucao, dt_chamado } = data;
    localStorage.setItem('ID', id_chamado);
    localStorage.setItem('NomeCliente', nome_cliente);
    localStorage.setItem('FoneCliente', fone_cliente);
    localStorage.setItem('EmailCliente', email_cliente);
    localStorage.setItem('DescTipo', desc_tipo);
    localStorage.setItem('DescMarca', desc_marca);
    localStorage.setItem('DescProduto', desc_produto);
    localStorage.setItem('NrSerie', nr_serie);
    localStorage.setItem('Capacidade', capacidade);
    localStorage.setItem('Problema', problema);
    localStorage.setItem('Solucao', solucao);
    localStorage.setItem('DtChamado', dt_chamado);
  };

  const onDelete = (id_chamado) => {
    if (window.confirm('Tem certeza de excluir este chamado?')) {
      API.delete(`/chamado/${id_chamado}`) // Ajuste para o endpoint correto de exclusão
        .then(() => {
          console.log(`Chamado com ID ${id_chamado} excluído com sucesso`);
          fetchChamados(); // Atualiza a lista após exclusão
        })
        .catch(error => {
          console.error(`Erro ao excluir o chamado com ID ${id_chamado}:`, error);
        });
    }
  };

  return (
    <div>
      <h1>Lista de Chamados</h1>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Cliente</Table.HeaderCell>
            <Table.HeaderCell>Telefone</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Tipo</Table.HeaderCell>
            <Table.HeaderCell>Marca</Table.HeaderCell>
            <Table.HeaderCell>Produto</Table.HeaderCell>
            <Table.HeaderCell>Número de Série</Table.HeaderCell>
            <Table.HeaderCell>Capacidade</Table.HeaderCell>
            <Table.HeaderCell>Problema</Table.HeaderCell>
            <Table.HeaderCell>Solução</Table.HeaderCell>
            <Table.HeaderCell>Data do Chamado</Table.HeaderCell>
            <Table.HeaderCell>Ações</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((chamado) => (
            <Table.Row key={chamado.id_chamado}>
              <Table.Cell>{chamado.id_chamado}</Table.Cell>
              <Table.Cell>{chamado.nome_cliente}</Table.Cell>
              <Table.Cell>{chamado.fone_cliente}</Table.Cell>
              <Table.Cell>{chamado.email_cliente}</Table.Cell>
              <Table.Cell>{chamado.desc_tipo}</Table.Cell>
              <Table.Cell>{chamado.desc_marca}</Table.Cell>
              <Table.Cell>{chamado.desc_produto}</Table.Cell>
              <Table.Cell>{chamado.nr_serie}</Table.Cell>
              <Table.Cell>{chamado.capacidade}</Table.Cell>
              <Table.Cell>{chamado.problema}</Table.Cell>
              <Table.Cell>{chamado.solucao}</Table.Cell>
              <Table.Cell>{chamado.dt_chamado}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ContactRead;
