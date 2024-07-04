import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import api from '../api/api';
import '../assets/css/admin_pages.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFlag, faScrewdriverWrench, faUser, faBuilding, faPaperPlane, faPhone, faToolbox, faRightFromBracket, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faFlag, faScrewdriverWrench, faBuilding, faPaperPlane, faPhone, faToolbox, faRightFromBracket, faPencil, faTrashCan);

function Admin_Tproduct() {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        api.get(`/tipoProduto`)
            .then((response) => {
                setAPIData(response.data);
            })
            .catch(error => {
                console.error("Houve um erro ao buscar os dados!", error);
            });
    }, []);

    const setData = (data) => {
        const { id_tipo, desc_tipo, ativo } = data;
        localStorage.setItem('ID', id_tipo);
        localStorage.setItem('Desc', desc_tipo);
        localStorage.setItem('Checkbox Value', ativo);
    }

    const getData = () => {
        api.get(`/tipoProduto`)
            .then((response) => {
                setAPIData(response.data);
            })
            .catch(error => {
                console.error("Houve um erro ao buscar os dados!", error);
            });
    }

    const onDelete = (id) => {
        if (window.confirm('Tem certeza de excluir esse serviço do site?')) {
            console.log(`Deletando tipo de produto com ID: ${id}`);
            api.delete(`/tipoProduto/${id}`)
                .then(() => {
                    console.log(`Tipo de produto com ID: ${id} deletado com sucesso`);
                    getData();
                })
                .catch(error => {
                    console.error("Houve um erro ao deletar o tipo de produto!", error);
                });
        }
    }

    return (
        <div>
            <Link to='/admin/tproductpost'>
                <Button>
                    Novo
                </Button>
            </Link>
            <h1>Cadastro de Tipos de Produto</h1>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Descrição</Table.HeaderCell>
                        <Table.HeaderCell>Ativo</Table.HeaderCell>
                        <Table.HeaderCell>Alterar</Table.HeaderCell>
                        <Table.HeaderCell>Desativar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => (
                        <Table.Row key={data.id_tipo}>
                            <Table.Cell>{data.id_tipo}</Table.Cell>
                            <Table.Cell>{data.desc_tipo}</Table.Cell>
                            <Table.Cell>{data.ativo ? 'Ativo' : 'Desativado'}</Table.Cell>
                            <Table.Cell>
                                <Link to='/admin/tproductupdate'>
                                    <Button onClick={() => setData(data)}>Alterar</Button>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>
                                <Button onClick={() => onDelete(data.id_tipo)}>Desativar</Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}

export default Admin_Tproduct;
