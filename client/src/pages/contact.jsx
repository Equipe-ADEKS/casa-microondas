import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import API from "../api/api.js";
import "../assets/css/contact.css";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

const Contact = () => {
  const [cliente, setCliente] = useState("");
  const [fone, setFone] = useState("");
  const [email, setEmail] = useState("");
  const [tipoProdutos, setTipoProdutos] = useState([]); // Estado para armazenar os tipos de produtos
  const [tipoProd, setTipoProd] = useState("");
  const [marca, setMarca] = useState("");
  const [problema, setProblema] = useState("");
  const [tipoCham, setTipoCham] = useState("");

  useEffect(() => {
	fetch("/tipoProduto")
	  .then((response) => {
		if (!response.ok) {
		  throw new Error(`Erro ao carregar tipos de produtos: ${response.statusText}`);
		}
		return response.json();
	  })
	  .then((data) => {
		setTipoProdutos(data);
	  })
	  .catch((error) => {
		console.error("Erro na requisição GET para /tipoProduto:", error);
		alert("Erro ao carregar tipos de produtos. Verifique o console para mais detalhes.");
	  });
  }, []);
  
  const fetchTipoProdutos = () => {
    fetch("/tipoProduto")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao carregar tipos de produtos.");
        }
        return response.json();
      })
      .then((data) => {
        // Define os tipos de produtos obtidos na resposta
        setTipoProdutos(data);
      })
      .catch((error) => {
        console.error("Erro ao carregar tipos de produtos:", error);
        alert("Erro ao carregar tipos de produtos. Verifique o console para mais detalhes.");
      });
  };

  const postChamado = () => {
    API.post("/chamado", {
      cliente,
      fone,
      email,
      tipoProd,
      marca,
      problema,
      tipoCham,
      produto: "" // Certifique-se de incluir o campo produto com um valor padrão vazio ou definir conforme necessário
    })
      .then(() => {
        alert("Chamado gravado com sucesso");
      })
      .catch((error) => {
        console.error("Erro ao gravar o chamado:", error);
        alert("Erro ao gravar o chamado. Verifique o console para mais detalhes.");
      });
  };

  return (
    <>
      <Header />
      <main className="contact">
        <section className="form_contact">
          <p>Se quiser fazer um pré-orçamento preencha o formulário abaixo:</p>
          <fieldset>
            <div>
              <input
                type="text"
                id="username"
                name="username"
                onChange={(e) => setCliente(e.target.value)}
              />
              <label htmlFor="username">Digite seu nome:</label>
            </div>
            <div>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                onChange={(e) => setFone(e.target.value)}
              />
              <label htmlFor="telephone">Digite seu telefone:</label>
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Digite seu E-mail:</label>
            </div>
            <div>
              <label>Escolha o tipo de produto:</label><br />
              <select onChange={(e) => setTipoProd(e.target.value)}>
                <option value="">Selecione...</option>
                {/* Mapeia os tipos de produtos para opções do select */}
                {tipoProdutos.map((tipo) => (
                  <option key={tipo.id_tipo} value={tipo.desc_tipo}>
                    {tipo.desc_tipo}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input
                type="text"
                id="model"
                name="model"
                onChange={(e) => setMarca(e.target.value)}
              />
              <label htmlFor="model">Se souber digite o modelo do seu produto:</label>
            </div>
            <div>
              <input
                type="text"
                id="service"
                name="service"
                onChange={(e) => setTipoCham(e.target.value)}
              />
              <label htmlFor="service">Descreva o tipo de serviço que você precisa:</label>
            </div>
            <div>
              <textarea
                className="texto_problema"
                id="os"
                name="os"
                onChange={(e) => setProblema(e.target.value)}
              />
              <label htmlFor="os">Escreva brevemente o motivo do seu orçamento:</label>
            </div>
            <button type="button" id="btn_os" onClick={postChamado}>
              Enviar
            </button>
          </fieldset>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
