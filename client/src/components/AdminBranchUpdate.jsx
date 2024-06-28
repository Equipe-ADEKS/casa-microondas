import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import API from '../api/api.js';
import { useNavigate } from 'react-router-dom';

export default function MarcaUpdate() {
    const navigate = useNavigate();
    const [id, setID] = useState(null);
    const [desc, setDesc] = useState('');
    const [logo, setLogo] = useState('');
    const [url, setURL] = useState('');
    const [ativo, setAtivo] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'));
        setDesc(localStorage.getItem('Desc'));
        setLogo(localStorage.getItem('Logo'));
        setURL(localStorage.getItem('URL'));
        setAtivo(localStorage.getItem('Ativo') === 'true');
    }, []);

    const updateAPIData = () => {
        const atv = ativo ? 1 : 0;
        console.log(desc+"|"+logo+"|"+url+"|"+atv)
        console.log(logo)
        API.put(`marca/${id}`, {
            desc,
            logo,
            url,
            ativo:atv
        }).then(() => {
           //navigate('/admin/service');
           alert('gravei alteração');
        }).catch(error => {
            console.error("Erro ao atualizar o marca:", error);
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
                        placeholder='URL da Logo'
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
                <Form.Field>
                    <Checkbox
                        label='Ativo'
                        checked={ativo}
                        onChange={() => setAtivo(!ativo)}
                    />
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    );
}
