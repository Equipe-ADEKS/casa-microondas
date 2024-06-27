import '../assets/css/admin_pages.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, Button } from 'semantic-ui-react';
import React, { useEffect, useState } from 'react';
import API from '../api/api.js';
import { Link } from 'react-router-dom';
import Admin_Service_Post from './admin_service_post.jsx';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFlag, faScrewdriverWrench, faUser, faBuilding, faPaperPlane, faPhone, faToolbox, faRightFromBracket, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faFlag, faScrewdriverWrench, faBuilding, faPaperPlane, faPhone, faToolbox, faRightFromBracket, faPencil, faTrashCan);

function AdminService() {
    const [APIData, setAPIData] = useState([]);
    
    useEffect(() => {
        API.get(`/servico`)
            .then((response) => {
                console.log(response.data);
                setAPIData(response.data);
            })
            .catch(error => {
                console.error("Houve um erro ao buscar os dados!", error);
            });
    }, []);

    const setData = (data) => {
        const { id_servico, titulo_servico, desc_servico, url_servico, ordem_apresentacao, ativo } = data;
        localStorage.setItem('ID', id_servico);
        localStorage.setItem('Titulo', titulo_servico);
        localStorage.setItem('Desc', desc_servico);
        localStorage.setItem('URL', url_servico);
        localStorage.setItem('Ordem', ordem_apresentacao);
        localStorage.setItem('Checkbox Value', ativo);
    }

    const getData = () => {
        API.get(`/servico`)
            .then((response) => {
                setAPIData(response.data);
            })
            .catch(error => {
                console.error("Houve um erro ao buscar os dados!", error);
            });
    }

    const onDelete = (id) => {
        if (window.confirm('Tem certeza de excluir esse serviço do site?')) {
            console.log(`Deletando serviço com ID: ${id}`);
            API.delete(`/servico/${id}`)
                .then(() => {
                    console.log(`Serviço com ID: ${id} deletado com sucesso`);
                    getData();
                })
                .catch(error => {
                    console.error("Houve um erro ao deletar o serviço!", error);
                });
        }
    }

    return (
        <div>
            <Link to="/admin/servicepost">
                <Button>
                    Novo
                </Button>
            </Link>
            <h1>Cadastro de Serviços</h1>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Título</Table.HeaderCell>
                        <Table.HeaderCell>Descrição</Table.HeaderCell>
                        <Table.HeaderCell>Link</Table.HeaderCell>
                        <Table.HeaderCell>Ordem</Table.HeaderCell>
                        <Table.HeaderCell>Ativo</Table.HeaderCell>
                        <Table.HeaderCell>Alterar</Table.HeaderCell>
                        <Table.HeaderCell>Desativar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => (
                        <Table.Row key={data.id_servico}>
                            <Table.Cell>{data.id_servico}</Table.Cell>
                            <Table.Cell>{data.titulo_servico}</Table.Cell>
                            <Table.Cell>{data.desc_servico}</Table.Cell>
                            <Table.Cell>{data.url_servico}</Table.Cell>
                            <Table.Cell>{data.ordem_apresentacao}</Table.Cell>
                            <Table.Cell>{data.ativo ? 'Ativo' : 'Desativado'}</Table.Cell>
                            <Table.Cell>
                                <Link to='/admin/servicoupdate'>
                                    <Button onClick={() => setData(data)}>Alterar</Button>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>
                                <Button onClick={() => onDelete(data.id_servico)}>Desativar</Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}

export default AdminService;
