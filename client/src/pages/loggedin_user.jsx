import '../assets/css/loggedin_user.css'
import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx"
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faPaperPlane, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import API from '../api/api.js'

library.add(faUser, faHome, faPaperPlane, faRightFromBracket)

function LoggedInUser() {

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        API.get(`/login`)
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

    return (
        <>
            <Header />
            <main className='lgd'>
                <div className='div1'>
                    <div className='user_name'>
                        <FontAwesomeIcon icon="fa-solid fa-user" />
                        <h2>Nome do Cliente</h2>
                    </div>
                    <div className='menu_bar'>
                        <div>
                            <FontAwesomeIcon icon="fa-solid fa-home" />
                            <p>Meu perfil</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
                            <p>Meus orçamentos</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
                            <p>Sair</p>
                        </div>
                    </div>
                </div>
                <div className='div2'>
                    <div className='titulo'>
                        <h2>Meu Perfil</h2>
                    </div>
                    <div>
                        <h3><strong>Dados do cadastro</strong></h3>
                    </div>
                    <div className='plmdd'>
                        <FontAwesomeIcon icon="fa-solid fa-user" />
                        <div className='main_div2'>

                            <div className='fgh'>
                                <h4>Nome de usuario</h4>
                                <p>Fulano Costa da Silva</p>
                            </div>
                            <div className='fgh'>
                                <h4>Email</h4>
                                <p>fulanodasilva.gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="" alt="" />
            </main>
            <Footer />
        </>
    )
}

export default LoggedInUser