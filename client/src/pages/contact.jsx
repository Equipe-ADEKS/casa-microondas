import "../assets/css/contact.css"
import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx"
import React, { useState, useEffect } from "react"
import API from "../api/api.js"



const Contact = () => {

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

	const [cliente, setCliente] = useState('')
	const [email, setEmail] = useState('')
	const [fone, setFone] = useState('')
	const [tipoProd, setTipoProd] = useState('')
	const [marca, setMarca] = useState('')
	const [problema, setProblema] = useState('')
	const [tipoCham, setTipoCham] = useState('')

	const postChamado = () => {
		API.post('/chamado', {
			cliente,
			fone,
			email,
			tipoProd,
			marca,
			problema,
			tipoCham
		}).then(() => {
			alert('Chamado gravado com sucesso');
		})
	}

	return (
		<>
			<Header />
			<main className="contact">
				<section className="form_contact">
					<p>Se quiser fazer um pré-orçamento preencha o formulário abaixo:</p>
					<fieldset>
						<div>
							<input type="text" id="username" name="username" onChange={(e) => setCliente(e.target.value)} />
							<label htmlFor="username">Digite seu nome: </label>
						</div>
						<div>
							<input type="tel" id="telephone" name="telephone" onChange={(e) => setFone(e.target.value)}/>
							<label htmlFor="telephone">Digite seu telefone: *</label>
						</div>
						<div>
							<input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
							<label htmlFor="email">Digite seu E-mail: *</label>
						</div>
						<div>
							<input type="radio" value='microondas' id="t_produto" name="t_produto" onChange={(e) => setTipoProd(e.target.value)}/>Microondas
							<input type="radio" value='forno_eletrico' id="t_produto" name="t_produto" onChange={(e) => setTipoProd(e.target.value)}/>Forno Elétrico
							<label htmlFor="t_produto">Escolha o tipo de produto:</label>
						</div>
						<div>
							<input type="text" id="model" name="model" onChange={(e) => setMarca(e.target.value)}/>
							<label htmlFor="model">Se souber digite o modelo do seu produto:</label>
						</div>
						<div>
							<input type="text" id="service" name="service" onChange={(e) => setTipoCham(e.target.value)}/>
							<label htmlFor="service">Descreva o tipo de serviço que você precisa:</label>
						</div>
						<div>
							<textarea className="texto_problema" id="os" name="os" onChange={(e) => setProblema(e.target.value)}/>
							<label htmlFor="os">Escreva brevemente o motivo do seu orçamento:</label>
						</div>
						<button type="submit" id="btn_os" onClick={postChamado}>Enviar</button>
					</fieldset>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default Contact