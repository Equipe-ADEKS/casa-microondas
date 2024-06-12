import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome, faWhatsapp, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faFontAwesome, faWhatsapp, faLinkedin, faInstagram)

function Footer () {
    return (
        <footer>
		<div className="footer_content">
			<div className="footer_social">
				<h1>Casa do Microondas</h1>
				<p>Uma loja para quem quer comprar menos, mas melhor. Oferecemos uma coleção exclusiva de itens de alta qualidade para cada casa.</p>
				<div className="social_media">
					<a href="https://wa.me/5541987327813"><FontAwesomeIcon icon="fa-brands fa-whatsapp" /></a>
                    <a href="https://br.linkedin.com"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                    <a href="https://instagram.com"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
				</div>
			</div>
			<div className="footer_links">
				<div className="links_rapidos">
					<p>Links Rápidos</p>
					<li><Link to="/account_login">Minha conta</Link></li>
					<li><Link to="/contacts">Contate-nos</Link></li>
				</div>
			</div>
		</div>
		<div className="footer_footer">
			<div className="rodape_esc">
				Implantado e Customizado por Equipe JEKAD
			</div>
			<p>© 2024 Casa do Microondas. Todos os direitos reservados.</p>
		</div>
	    </footer>
    )
}

export default Footer