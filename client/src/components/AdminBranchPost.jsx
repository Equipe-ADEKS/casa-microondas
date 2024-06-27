import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import API from '../api/api';

export default function BrandPost() {
    const [desc, setDesc] = useState('');
    const [logo, setLogo] = useState('');
    const [url, setURL] = useState('');

    const postMarca = () => {
        API.post('/marca', {
            desc,
            logo,
            url,
        }).then(() => {
            alert('Marca gravada com sucesso');
        }).catch((error) => {
            console.error('Erro ao gravar a marca:', error);
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
                    <label>Logo</label>
                    <input
                        placeholder='URL da Imagem'
                        value={logo}
                        onChange={(e) => setLogo(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Link</label>
                    <input
                        placeholder='URL da página'
                        value={url}
                        onChange={(e) => setURL(e.target.value)}
                    />
                </Form.Field>
                <Button onClick={postMarca} type='submit'>Gravar</Button>
            </Form>
        </div>
    );
}
