import "../assets/css/contact.css"
import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx"

const Contact = () => {
    return (
        <>
        <Header />
        <main>
		    <h2>Envie uma mensagem</h2>
		    <h3>Dúvidas?, Quer fazer um orçamento?, Entre em contato preenchendo esse formulário</h3>
		    <fieldset class="formulario">
			    <div class="conectar">
				    <p><label for="nome">Nome de Usuário ou Endereço de Email  *</label></p>
				    <input type="text" id="nome" name="nome" />
				    <p><label for="subject">Assunto *</label></p>
				    <input type="text" id="subjet" name="subject" />
				    <p><label for="telephone">Telefone *</label></p>
				    <input type="tel" id="telephone" name="telephone" />
				    <p><label for="message">Mensagem *</label></p>
				    <input class="message" type="text" id="message" name="message" />
				    <div class="formulario_centro">
					    <button type="submit">Enviar</button>
				    </div>
			    </div>
            </fieldset> 
	    </main>
        <Footer />
        </>
    )
};

export default Contact;