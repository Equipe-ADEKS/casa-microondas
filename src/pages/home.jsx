import '../assets/css/home.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import Gallery from '../components/carousel.jsx'

const Home = () => {
    return (
        <>
        <Header />
        <main>
		<div className="imagem_principal">
			<img className="imagem_principal_content" src="./cabecalho.png" alt=""/>
		</div>
		<h2 className="title_carousel">Marcas com que trabalhamos</h2>
		<Gallery />
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
		<section className="services">
			<div className='services_desc'>
				<img src="./conserto-microondas.jpg" alt="" />
				<p>Conserto microondas</p>
			</div>
			<div className='service_desc'> 
				<img src="./conserto-forno-eletrico.jpg" alt="" />
				<p>Conserto Forno Elétrico</p>
			</div>
			<div className='service_desc'>
				<img src="./refora-microondas.jpg" alt="" />
				<p>Reforma Microondas</p>
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