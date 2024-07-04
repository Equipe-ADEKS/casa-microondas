import '../assets/css/account_login.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import { useState } from 'react'
import API from '../api/api.js'
import { Link, redirect } from 'react-router-dom'

const Account_Login = () => {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = () => {

        const usuario = document.getElementById('user').value;
        const senha = document.getElementById('password_user').value;

        if (usuario == 'marcos' && senha == '123') {
            window.location.href = '/admin';
        } else {
            alert('Usuário ou senha inválidos');
        }
    };

    return (
        <>
            <Header />
            <main>
                <h1 className="minha_conta">Minha Conta</h1>
                <section className='main_user'>
                    <section className='form_user'>
                        <h2>Conectar-se</h2>
                        <fieldset className="formulario">
                            <div>
                                <input type="text" id='user' name='user' value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                                <label htmlFor="user">Nome de Usuário  *</label>
                            </div>
                            <div>
                                <input type="password" id='password_user' name='password_user' value={senha} onChange={(e) => setSenha(e.target.value)} />
                                <label htmlFor="password_user">Senha  *</label>
                            </div>
                            <button type="submit" onClick={handleSubmit}>Conectar</button>
                        </fieldset>
                    </section>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Account_Login

