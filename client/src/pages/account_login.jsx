import '../assets/css/account_login.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import { useState } from 'react'
import API from '../api/api.js'
import { Link, redirect } from 'react-router-dom'

const Account_Login = () => {

    const [usu, setUsu] = useState('');
    const [sen, setSen] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Enviar solicitação POST ao /login
        API.post('/login', {
            usu,
            sen,
        }).then((res) => {
                if (res.data.autenticado) {
                    // Se o login for bem-sucedido, redirecionar para a página admin
                    return redirect("/admin")
                } else {
                    alert('Usuário inválido ou inexistente');
                }
            }).catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <Header />
            <main>
                <h1 class="minha_conta">Minha Conta</h1>
                <section className='main_user'>
                    <section className='form_user'>
                        <h2>Conectar-se</h2>
                        <fieldset class="formulario">
                            <div>
                                <input type="text" id='user' name='user' value={usu} onChange={(e) => setUsu(e.target.value)} />
                                <label htmlFor="user">Nome de Usuário ou Endereço de Email  *</label>
                            </div>
                            <div>
                                <input type="password" id='password_user' name='password_user' value={sen} onChange={(e) => setSen(e.target.value)} />
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

