import '../assets/css/main_menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faUser, faX} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

library.add(faX, faMoon, faUser)

function MainMenu () {
    return (
        <>
        <div className="menu_lateral">
            <div className="menu_lateral_back">
                <button><FontAwesomeIcon icon="fa fa-x"/></button>
            </div>
            <div className="menu_lateral_content">
                <div>
                    <img src="https://heim.nordicmade.com/wp-content/uploads/2023/03/category-accessories-400x400.jpg" alt=""/>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <img src="https://heim.nordicmade.com/wp-content/uploads/2023/03/category-decoration-400x400.jpg" alt=""/>
                    <Link to="/shop">Vendas</Link>
                </div>
                <div>
                    <img src="https://heim.nordicmade.com/wp-content/uploads/2023/03/category-essentials-400x400.jpg" alt=""/>
                    <Link to="/localization">Localização</Link>
                </div>
                <div>
                    <img src="https://heim.nordicmade.com/wp-content/uploads/2023/03/category-living-400x400.jpg" alt=""/>
                    <Link to="/informations">Conserto em 30 Minutos</Link>    
                </div>
                <div>
                    <img src="https://heim.nordicmade.com/wp-content/uploads/2023/03/category-living-400x400.jpg" alt=""/>
                    <Link to="/contacts">Faça um orçamento</Link>    
                </div>
            </div>
            <div className="menu_lateral_functions">
                <a href="">Sobre</a>
                <a href="">Contate-nos</a>
                <a href="">Perguntas frequentes</a>
                <a href="">Acompanhamento de serviços</a>
            </div>
            <div className="menu_lateral_other">
                <Link to="/account_login">Minha Conta</Link>
                <button className="botao"><i id="icon_moon" className="fa-regular fa-moon"></i>Night</button>
            </div>
        </div>
        </>
    )
}

export default MainMenu