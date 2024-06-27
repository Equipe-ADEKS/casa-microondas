import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import API from '../api/api.js';
import { useNavigate } from 'react-router-dom';

export default function TProductUpdate() {
    const navigate = useNavigate();
    const [id, setID] = useState(null);
    const [desc, setDesc] = useState('');
    const [ativo, setAtivo] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'));
        setDesc(localStorage.getItem('Desc'));
        setAtivo(localStorage.getItem('Ativo') === 'true');
    }, []);

    const updateAPIData = () => {
        API.put(`tipoProduto/${id}`, {id,
            desc,
            ativo
        }).then(() => {
            navigate('/admin/tproduct');
        });
    };

    return (
        <div>
            <Form className="create-form">
            <Form.Field>
                    <label>Id</label>
                    <input 
                        desabled
                        placeholder='id' 
                        value={id}
                        onChange={(e) => setID(e.target.value)}
                    />
                </Form.Field>
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
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    );
}
