import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFontAwesome, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faFontAwesome, faTwitter, faFacebook, faInstagram)

function Header ()
{
    return (
        <header>
		<div className="inicio">
			<div className="inicio_barra">
                <i id="barra_lateral_esquerdo" className="fa-solid fa-bars"></i>
                <h1 className="nome"><strong>Casa do Microondas</strong></h1>
            </div>
			<nav className="navegacao">
				<Link to="/" className="navegacao_botao">home</Link>
				<Link to="/localization" className="navegacao_botao">localização</Link>
				<Link to="/informations" className="navegacao_botao">conserto em 30 minutos</Link>
				<Link to="/contacts" className="navegacao_botao">contato</Link>
			</nav>
			<div className="utilidades">
				<button className="botao"><i className="fa-regular fa-moon"></i> Night</button> 
                <button className="botao"><i className="fa-solid fa-magnifying-glass"></i></button>
                <Link to="/user_login"><i id="icon" className="fa-regular fa-user"></i></Link>                            
                <button className="botao"><i className="fa-solid fa-cart-shopping"></i></button>    
			</div>
		</div>
	    </header>
    )
}

export default Header 