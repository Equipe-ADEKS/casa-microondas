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
                    <section className='form_user'>
                        <h2>Registrar-se</h2>
                        <fieldset className='formulario'>
                            <div>
                                <input type="text" id='new_user' name='new_user' onChange={(e) => setUsu(e.target.value)}/>
                                <label htmlFor="new_user">Nome de usuário (Opcional)</label>
                            </div>
                            <div>
                                <input type="email" id='new_user' name='new_user' onChange={(e) => setEmail(e.target.value)}/>
                                <label htmlFor="new_user">Endereço de email  *</label>
                            </div>
                            <div>
                                <input type="password" id='password_newuser' name='password_newuser' onChange={(e) => setSen(e.target.value)}/>
                                <label htmlFor="password_newuser">Senha  *</label>
                            </div>
                            <button onClick={postCadastro}>Registrar</button>
                        </fieldset>
                    </section>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Account_Login

