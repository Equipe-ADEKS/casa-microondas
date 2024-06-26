import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import API from '../api/api.js';
import { Link } from 'react-router-dom';

export default function ServicoUpdate() {
    const [id, setID] = useState(null);
    const [tit, setTitulo] = useState('');
    const [desc, setDesc] = useState('');
    const [img, setImagem] = useState('');
    const [url, setURL] = useState('');
    const [ordem, setOrdem] = useState(0);
    const [ativo, setAtivo] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setTitulo(localStorage.getItem('Titulo'));
        setDesc(localStorage.getItem('Desc'));
        setImagem(localStorage.getItem('Imagem'));
        setURL(localStorage.getItem('url'));
        setOrdem(localStorage.getItem('Ordem'));
        setAtivo(localStorage.getItem('Ativo'));
    }, []);

    const updateAPIData = () => {
        API.put(`servicos/${id}`, {
            tit,
            desc,
            img,
            url,
            ordem,
            ativo
        }).then(() => {
            document.link('/admin/service')
        })
    }
    return (
        <div>
            <Form className="create-form">
            <Form.Field>
                    <label>Título</label>
                    <input placeholder='Título' onChange={(e) => setTitulo(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Descrição</label>
                    <input placeholder='Descrição' onChange={(e) => setDesc(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Imagem</label>
                    <input placeholder='URL da Imagem' onChange={(e) => setImagem(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Link</label>
                    <input placeholder='URL da página' onChange={(e) => setURL(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Ordem</label>
                    <input placeholder='Ordem' onChange={(e) => setOrdem(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox disabled label='Ativo' onChange={(e) => setAtivo(!ativo)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}
