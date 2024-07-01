import { Link, Outlet } from "react-router-dom"
import ThemeChangerButton from "./theme.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faClipboard, faClock, faHome, faLocationDot, faMagnifyingGlass, faMoon, faShop, faShoppingCart, faSun, faUser } from "@fortawesome/free-solid-svg-icons"
import AccountLoginButton from "./disconnect_user.jsx"
import AdminLoggedButton from "./admin_logged.jsx"

library.add(faUser, faShoppingCart, faMagnifyingGlass, faMoon, faSun, faClock, faHome ,faShop, faLocationDot, faClipboard)

function Header() {
	return (
		<header>
			<div className="inicio">
				<div className="inicio_barra">
					<Link to="/"><h1 className="nome"><strong>Casa do Microondas</strong></h1></Link>
				</div>
				<nav className="navegacao">
					<Link to="/" className="navegacao_botao">Home</Link>
					<Link to="/shop" className="navegacao_botao">Vendas</Link>
					<Link to="/localization" className="navegacao_botao">Localização</Link>
					<Link to="/informations" className="navegacao_botao">Conserto em 30 minutos</Link>
					<Link to="/contacts" className="navegacao_botao">Faça um orçamento</Link>
				</nav>
				<div className="utilidades">
					{/* <ThemeChangerButton /> */}
					<AccountLoginButton />
					<Link to='/admin'>admin</Link>
				</div>
			</div>
			<div className="nave_mobile">
				<nav>
					<Link to="/" className="icon_mobile">
						<FontAwesomeIcon icon="fa-solid fa-house" />
					</Link>
					<Link to="/shop" className="icon_mobile">
						<FontAwesomeIcon icon="fa-solid fa-shop" />
					</Link>
					<Link to="/localization" className="icon_mobile">
						<FontAwesomeIcon icon="fa-solid fa-location-dot" />
					</Link>
					<Link to="/informations" className="icon_mobile">
						<FontAwesomeIcon icon="fa-solid fa-clock" />
					</Link>
					<Link to="/contacts" className="icon_mobile">
						<FontAwesomeIcon icon="fa-solid fa-clipboard" />
					</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header 