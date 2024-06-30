import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import API from '../api/api.js';
import { useNavigate } from 'react-router-dom';

export default function ServicoUpdate() {
    const navigate = useNavigate();
    const [id, setID] = useState(null);
    const [tit, setTitulo] = useState('');
    const [desc, setDesc] = useState('');
    const [img, setImagem] = useState('');
    const [url, setURL] = useState('');
    const [ordem, setOrdem] = useState(0);
    const [ativo, setAtivo] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'));
        setTitulo(localStorage.getItem('Titulo'));
        setDesc(localStorage.getItem('Desc'));
        setImagem(localStorage.getItem('Imagem'));
        setURL(localStorage.getItem('URL'));
        setOrdem(Number(localStorage.getItem('Ordem')));
        setAtivo(localStorage.getItem('Ativo') === 'true');
    }, []);

    const updateAPIData = () => {
        const atv = ativo ? 1 : 0;
        console.log(`Enviando dados para servicos/${id}:`, {
            titulo: tit,
            desc,
            img,
            url,
            ordem,
            ativo: atv
        }); // Log para depuração

        API.put(`servicos/${id}`, {
            titulo: tit,
            desc,
            img,
            url,
            ordem,
            ativo: atv
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(() => {
            alert('Serviço atualizado com sucesso');
            navigate('/admin/service');
        }).catch(error => {
            console.error("Erro ao atualizar o serviço:", error.response ? error.response.data : error.message);
        });
    };

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Título</label>
                    <input
                        placeholder='Título'
                        value={tit}
                        onChange={(e) => setTitulo(e.target.value)}
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
                    <label>Imagem</label>
                    <input
                        placeholder='URL da Imagem'
                        value={img}
                        onChange={(e) => setImagem(e.target.value)}
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
                    <label>Ordem</label>
                    <input
                        placeholder='Ordem'
                        type='number'
                        value={ordem}
                        onChange={(e) => setOrdem(Number(e.target.value))}
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
