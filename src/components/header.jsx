import { Link, Outlet } from "react-router-dom"
import ThemeChangerButton from "./theme.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faMagnifyingGlass, faMoon, faShoppingCart, faSun, faUser } from "@fortawesome/free-solid-svg-icons"
import AccountLoginButton from "./disconnect_user.jsx"
import AccountLoggedButton from "./user_login.jsx"
import AdminLoggedButton from "./admin_logged.jsx"

library.add( faUser, faShoppingCart, faMagnifyingGlass, faMoon, faSun, faBars)

function Header () {
    return (
        <header>
		<div className="inicio">
			<div className="inicio_barra">
				<FontAwesomeIcon className="fa_bars" icon="fa-solid fa-bars" />
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
				<AdminLoggedButton />
			</div>
		</div>
	    </header>
    )
}

export default Header 