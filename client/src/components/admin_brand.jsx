import '../assets/css/admin_pages.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFlag, faScrewdriverWrench, faUser , faBuilding, faPaperPlane, faPhone, faToolbox, faRightFromBracket, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import API from '../api/api.js';

library.add( faUser, faFlag, faScrewdriverWrench , faBuilding, faPaperPlane, faPhone, faToolbox, faRightFromBracket, faPencil, faTrashCan)

function Admin_Brand() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        API.get(`/marca`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, []);
  
    const setData = (data) => {
        let { id_marca, desc_marca, ativo } = data;
        localStorage.setItem('ID', id_marca);
        localStorage.setItem('Desc', desc_marca);
        localStorage.setItem('Checkbox Value', ativo)
    }
  
    const getData = () => {
        API.get(`/marca`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }
  
    const onDelete = (id) => {
        if (window.confirm('Tem certeza de excluir essa marca do site?')) {
            API.delete(`/marca/${id}`)
                .then(() => {
                    getData();
                })
                .catch(error => {
                    alert("Ocorreu um erro ao excluir a marca", error);
                });
            }
        };
    return (
        <div>
            <Link to='/admin/brandpost'>
                <Button>
                    Novo
                </Button>
            </Link>
            <h1>Cadastro de Marcas</h1>
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
                    {APIData.map( (data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id_marca}</Table.Cell>
                                <Table.Cell>{data.desc_marca}</Table.Cell>
                                <Table.Cell>{data.ativo ? 'Ativo' : 'Desativado'}</Table.Cell>
                                <Link to='/admin/brandupdate'>
                                    <Table.Cell> 
                                        <Button onClick={() => setData(data)}>Alterar</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id_marca)}>Desativar</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
  }
  
  export default Admin_Brand;