import '../assets/css/home.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

const Home = () => {
    return (
        <>
        <Header />
        <main>
        <div className="menu_lateral">
            <div className="menu_lateral_back">
                <button><i className="fa-solid fa-x"></i></button>
            </div>
            <div className="menu_lateral_content">
                <div>
                    <img src="https://heim.nordicmade.com/wp-content/uploads/2023/03/category-accessories-400x400.jpg" alt=""/>
                    <a href="">Acessórios</a>
                </div>
                <div>
                    <img src="https://heim.nordicmade.com/wp-content/uploads/2023/03/category-decoration-400x400.jpg" alt=""/>
                    <a href="">Decoração</a>
                </div>
                <div>
                    <img src="https://heim.nordicmade.com/wp-content/uploads/2023/03/category-essentials-400x400.jpg" alt=""/>
                    <a href="">Essenciais</a>
                </div>
                <div>
                    <img src="https://heim.nordicmade.com/wp-content/uploads/2023/03/category-living-400x400.jpg" alt=""/>
                    <a href="">Vivendo</a>
                </div>
            </div>
            <div className="menu_lateral_functions">
                <a href="">Sobre</a>
                <a href="">Contate-nos</a>
                <a href="">Perguntas frequentes</a>
                <a href="">Acompanhamento de serviços</a>
            </div>
            <div className="menu_lateral_other">
                <a href="">Minha conta</a>
                <button className="botao"><i id="icon_moon" className="fa-regular fa-moon"></i>Night</button>
            </div>
            <div className="menu_carrinho">
                <div className="principal">
                    <i className="fa-solid fa-box"></i>
                    <p>Seu carrinho está vazio no momento!</p>
                </div>
                <div>
                    <button>Comece a comprar</button>
                </div>
            </div>
        </div>
		<div className="imagem_principal">
			<img className="imagem_principal_conteudo" src="./cabecalho.png" alt=""/>
		</div>
		<section className="shop">
			<div className="shop_content">
				<img src="./shop/shop_cadeira.jpg" alt=""/>
				<div className="shop_text">
					<span>Mais Vendidos</span>
					<h2>Cadeira de jantar formada</h2>
					<p>R$ 268,00</p>
					<div className="ret"><button type="submit">Adicionar ao carrinho</button></div>
				</div>
			</div>
			<div className="shop_content">
				<img src="./shop/shop_ampulheta.jpg" alt=""/>
				<div className="shop_text">
					<span>Mais Vendidos</span>
					<h2>Ampulheta de Areia Clarevelas</h2>
					<p>R$ 18,00</p>
					<div className="ret"><button type="submit">Adicionar ao carrinho</button></div>
				</div>
			</div>
			<div className="shop_content">
				<img src="./shop/shop_lampada.jpg" alt=""/>
				<div className="shop_text">
					<span>Mais Vendidos</span>
					<h2>Candeeiro pendente intemporal</h2>
					<p>R$ 18,00</p>
					<div className="ret"><button type="submit">Adicionar ao carrinho</button></div>
				</div>
			</div>
			<div className="shop_content">
				<img src="./shop/shop_quadro.jpg" alt=""/>
				<div className="shop_text">
					<span>Mais Vendidos</span>
					<h2>Arte de folhas emolduradas</h2>
					<p>R$ 36,00</p>
					<div className="ret"><button type="submit">Adicionar ao carrinho</button></div>
				</div>
			</div>
		</section>
		<section className="info">
			<div className="info_coluna">
				<a href="./html/error.html">
                    <img className="info_img" src="./conserto-microondas.jpg" alt=""/>
                    <p>Conserto microondas</p>
                </a>
			</div>
			<div className="info_coluna">
				<a href="./html/error.html">
                    <img className="info_img" src="./conserto-forno-eletrico.jpg" alt=""/>
                    <p>Conserto forno-eletrico</p>
                </a>
			</div>
			<div className="info_coluna">
				<a href="./html/error.html">
                    <img className="info_img" src="./refora-microondas.jpg" alt=""/>
                    <p>Reforma microondas</p>
                </a>
			</div>
		</section>
		<section className="author_section">
			<div className="author">
				<h3>Nosso mantra</h3>
				<p className="author_content">“Atender bem para atender sempre"</p>
				<div className="bio">
					<img src="https://heim.nordicmade.com/wp-content/uploads/2023/04/profile.jpg" alt=""/>
					<div className="bio_content">
						<h3>Matt Wilkinson, founder of Heim</h3>
						<p>Read more About Us</p>
					</div>
				</div>
			</div>
		</section>
		<section className="info">
			<div className="info_coluna">
				<a href="./html/error.html">
                    <img className="info_img" src="./acessorio.jpg" alt=""/>
                    <p>Acessórios</p>
                </a>
			</div>
			<div className="info_coluna">
				<a href="./html/error.html">
                    <img className="info_img" src="./venda-microondas.jpg" alt=""/>
                    <p>Venda microondas</p>
                </a>
			</div>
			<div className="info_coluna">
				<a href="./html/error.html">
                    <img className="info_img" src="./busca-e-entrega.jpg" alt=""/>
                    <p>Busca e entrega</p>
                </a>
			</div>
		</section>
	</main>
    <Footer />
    </>
    )
}

export default Home