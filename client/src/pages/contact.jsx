import "../assets/css/contact.css"
import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx"
// import API from "../api.jsx"



const Contact = () => {
//     function btnEnviarClick(){
// 		let cliente = document.getElementById("nome").values;
// 		let assunto = document.getElementById("subjet").values;
// 		let phone = document.getElementById("telephone").values;
// 		let message = document.getElementById("message").values; 
// 		let tipoCham = 'Contato';

		// api.post('/chamado', {cliente, assunto, phone, message, tipoCham})
	// 		.then( (resp) =>{
	// 			console.log(resp);
	// 			alert('OS dados foram enviados com sucesso');
	// 		})
	// 		.catch((err) => {
	// 			console.error(err);
	// 			alert('Erro ao enviar os dados de contato');
	// 		})
	// }
	return (
        <>
        <Header />
        <main className="contact">
			<section className="form_contact">
				<p>Se tiver uma duvida ou sugestão preencha o formulário abaixo:</p>
				<fieldset>
					<div>
						<input type="text" id="assunto" name="assunto" />
						<label htmlFor="assunto">Assunto: *</label>
					</div>
					<div>
						<input type="text" id="mensagem" name="mensagem"/>
						<label htmlFor="mensagem">Mensagem: *</label>
					</div>
					<button type="submit" id="btn_cont">Enviar</button>
				</fieldset>
			</section>
			<section className="form_contact">
				<p>Se quiser fazer um pré-orçamento preencha o formulário abaixo:</p>
				<fieldset>
					<div>
						<input type="text" id="username" name="username"/>
						<label htmlFor="username">Digite seu nome: </label>
					</div>
					<div>
						<input type="tel" id="telephone" name="telephone"/>
						<label htmlFor="telephone">Digite seu telefone: *</label>
					</div>
					<div>
						<input type="email" id="email" name="email" />
						<label htmlFor="email">Digite seu E-mail: *</label>
					</div>
					<div>
						<input type="radio" value='microondas' id="t_produto" name="t_produto"	/>Microondas
						<input type="radio" value='forno_eletrico' id="t_produto" name="t_produto" />Forno Elétrico
						<label htmlFor="t_produto">Escolha o tipo de produto:</label>
					</div>
					<div>
						<input type="text" id="model" name="model" />
						<label htmlFor="model">Se souber digite o modelo do seu produto:</label>
					</div>
					<div>
						<input type="text" id="service" name="service" />
						<label htmlFor="service">Descreva o tipo de serviço que você precisa:</label>
					</div>
					<div>
						<input type="text" id="os" name="os" />
						<label htmlFor="os">Escreva brevemente o motivo do seu orçamento:</label>
					</div>
					<button type="submit" id="btn_os">Enviar</button>
				</fieldset>
			</section>
	    </main>
        <Footer />
        </>
    )
}

export default Contact