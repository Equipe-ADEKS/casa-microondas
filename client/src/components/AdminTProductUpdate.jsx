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
        // Carregar dados do localStorage ao montar o componente
        const storedId = localStorage.getItem('ID');
        const storedDesc = localStorage.getItem('Desc');
        const storedAtivo = localStorage.getItem('Ativo');

        if (storedId && storedDesc && storedAtivo) {
            setID(storedId);
            setDesc(storedDesc);
            setAtivo(storedAtivo === 'true'); // Converte para booleano
        }
    }, []);

    const updateAPIData = () => {
        // Enviar dados atualizados para o backend
        const data = {
            desc_tipo: desc,
            ativo: ativo ? 1 : 0 // Converter booleano para 0 ou 1
        };

        API.put(`/tipoProduto/${id}`, data)
            .then(() => {
                navigate('/admin/tproduct');
                alert('Tipo de produto atualizado com sucesso');
            })
            .catch(error => {
                console.error('Erro ao atualizar tipo de produto:', error);
                alert('Erro ao atualizar tipo de produto. Verifique o console para mais detalhes.');
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
                <Button type='button' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    );
}
