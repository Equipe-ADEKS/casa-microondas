import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import API from '../api/api';

export default function Admin_Service_Post() {
    const [tit, setTit] = useState('');
    const [desc, setDesc] = useState('');
    const [url, setURL] = useState('');
    const [img, setImagem] = useState('');
    const [ordem, setOrdem] = useState(0);
    const [ativo, setAtivo] = useState(false);

    const postServico = () => {
        API.post(`/servicos`, {
            tit,
            desc,
            url,
            img,
            ordem,
            ativo
        }).then(() => {
            alert('Serviço gravado com sucesso');
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Título</label>
                    <input placeholder='Título' onChange={(e) => setTit(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Descrição</label>
                    <input placeholder='Descrição' onChange={(e) => setDesc(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Link</label>
                    <input placeholder='URL da página' onChange={(e) => setURL(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Imagem</label>
                    <input placeholder='URL da Imagem' onChange={(e) => setImagem(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Ordem</label>
                    <input placeholder='Ordem' onChange={(e) => setOrdem(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox disabled label='Ativo' onChange={(e) => setAtivo(!ativo)}/>
                </Form.Field>
                <Button onClick={postServico} type='submit'>Gravar</Button>
            </Form>
        </div>
    )
}
