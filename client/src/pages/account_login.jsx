import '../assets/css/account_login.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import { useState } from 'react'
import API from '../api/api.js'

const Account_Login = () => {

    const[usu, setUsu] = useState('')
    const[email, setEmail] = useState('')
    const[sen, setSen] = useState('')

    const postCadastro = () => {
        API.post('/login', {
            usu,
            email,
            sen,
        }).then(() => {
			alert('Serviço gravado com sucesso');
		})
    }


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
                                <input type="text" id='user' name='user' />
                                <label htmlFor="user">Nome de Usuário ou Endereço de Email  *</label>
                            </div>
                            <div>
                                <input type="password" id='password_user' name='password_user' />
                                <label htmlFor="password_user">Senha  *</label>
                            </div>
                            <button type="submit">Conectar</button>
                        </fieldset>
                    </section>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Account_Login

