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
		
		<section className="services">
			<div className='services_desc'>
				<img src="./conserto-microondas.jpg" alt="" />
				<p>Conserto microondas</p>
			</div>
			<div className='services_desc'> 
				<img src="./conserto-forno-eletrico.jpg" alt="" />
				<p>Conserto Forno Elétrico</p>
			</div>
			<div className='services_desc'>
				<img src="./refora-microondas.jpg" alt="" />
				<p>Reforma Microondas</p>
			</div>
		</section>
		<section className="author_section">
			<div className="author">
				<h3>Nosso mantra</h3>
				<p className="author_content">“Atender bem para atender sempre"</p>
				<div className="bio">
					<img src="./logo-preta.png" alt=""/>
					<div className="bio_content">
						<h3>Fundador da Casa do Microondas</h3>
					</div>
				</div>
			</div>
		</section>
		<section className="services">
			<div className='services_desc'>
				<img src="./Busca-e-entrega.jpg" alt="" />
				<p>Busca e entrega</p>
			</div>
			<div className='services_desc'> 
				<img src="./venda-microondas.jpg" alt="" />
				<p>Venda microondas</p>
			</div>
			<div className='services_desc'>
				<img src="./acessorio.jpg" alt="" />
				<p>Acessório</p>
			</div>
		</section>
	</main>
    <Footer />
    </>
    )
}

export default Home