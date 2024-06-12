import '../assets/css/account_login.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

const Account_Login = () => {
    return (
        <>
        <Header />
        <main>
            <h2 class="minha_conta">Minha Conta</h2>
            <fieldset class="formulario">
                <div class="conectar">
                    <h3>Conecte-se</h3>
                    <label for="nome">Nome de Usuário ou Endereço de Email  *</label>
                    <input type="text" id="nome" name="nome" />
                    <label for="senha">Senha *</label>
		            <input type="password" id="senha" name="senha" />
		        <div class="formulario_centro">
                    <button type="submit">Conecte-se</button>
                </div>
                </div>
                <div class="registrar">
                    <h3>Registro</h3>
                    <label for="email">Endereço de email  *</label>
                    <input type="email" id="email" name="email" />
                    <p>Um link para definir uma nova senha será enviado para seu endereço de e-mail.</p>
                    <p>Os seus dados pessoais serão utilizados para apoiar a sua experiência neste website, para gerir o acesso à sua conta e para outros fins descritos na nossa política de privacidade .</p>
                    <div class="formulario_centro">
                        <button type="submit">Registro</button>
                    </div>
                </div>
            </fieldset>
        </main>
        <Footer />
        </>
    )
}

export default Account_Login