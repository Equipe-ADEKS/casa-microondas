import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import API from '../api/api.js';

export default function TProductPost() {
    const [desc, setDesc] = useState('');
    const [ativo, setAtivo] = useState(false);

    const postServico = () => {
        API.post(`/tipoProduto`, {
            desc,
            ativo,
        }).then(() => {
            alert('Tipo de produto gravado com sucesso');
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Descrição</label>
                    <input placeholder='Descrição' onChange={(e) => setDesc(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Ativo' onChange={(e) => setAtivo(!ativo)}/>
                </Form.Field>
                <Button onClick={postServico} type='submit'>Gravar</Button>
            </Form>
        </div>
    )
}
