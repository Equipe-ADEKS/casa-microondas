import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import API from '../api/api.js';

export default function TProductPost() {
    const [desc, setDesc] = useState('');
    const [ativo, setAtivo] = useState(false);

    const postServico = () => {
        const payload = {
            desc,
            ativo: ativo ? 1 : 0
        };
        console.log('Enviando dados:', payload); // Log para depuração
        API.post(`/tipoProduto`, { desc }, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(() => {
            alert('Tipo de produto gravado com sucesso');
        }).catch((error) => {
            console.error('Erro ao gravar o tipo de produto:', error.response ? error.response.data : error.message);
        });
    };

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Descrição</label>
                    <input 
                        placeholder='Descrição' 
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox 
                        label='Ativo' 
                        checked={ativo}
                        onChange={() => setAtivo(!ativo)}
                    />
                </Form.Field>
                <Button onClick={postServico} type='submit'>Gravar</Button>
            </Form>
        </div>
    );
}
