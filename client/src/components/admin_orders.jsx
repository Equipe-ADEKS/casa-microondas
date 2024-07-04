import '../assets/css/admin_pages.css'
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFlag, faScrewdriverWrench, faUser, faBuilding, faPaperPlane, faPhone, faToolbox, faRightFromBracket, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import API from '../api/api';

library.add(faUser, faFlag, faScrewdriverWrench, faBuilding, faPaperPlane, faPhone, faToolbox, faRightFromBracket, faPencil, faTrashCan)

function Admin_Order() {

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        API.get(`/chamado`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id_servico, titulo_servico, desc_servico, img_servico, url_servico, ordem, ativo } = data;
        localStorage.setItem('ID', id_servico);
        localStorage.setItem('Titulo', titulo_servico);
        localStorage.setItem('Desc', desc_servico);
        localStorage.setItem('Imagem', img_servico);
        localStorage.setItem('URL', url_servico);
        localStorage.setItem('Ordem', ordem);
        localStorage.setItem('Checkbox Value', ativo)
    }

    const getData = () => {
        API.get(`/chamado`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        if (window.confirm('Tem certeza de excluir esse serviço do site?')) {
            API.delete(`/chamado/${id}`)
                .then(() => {
                    getData();
                })
        }
    }

    return (
        <>
            <main>
                <section>
                    <ul>
                        <li>Id_chamado</li>
                        <li>Nome</li>
                        <li>Telefone</li>
                        <li>E-mail</li>
                        <li>Tipo de Produto</li>
                        <li>Modelo</li>
                        <li>Tipo Servico</li>
                        <li>Problema</li>
                    </ul>
                </section>
                <section>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </section>
            </main>
        </>
    )
}

export default Admin_Order