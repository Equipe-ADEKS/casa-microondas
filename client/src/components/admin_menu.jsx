import '../assets/css/admin_menu.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFlag, faScrewdriverWrench, faUser , faBuilding, faPaperPlane, faPhone, faToolbox, faRightFromBracket, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

library.add( faUser, faFlag, faScrewdriverWrench , faBuilding, faPaperPlane, faPhone, faToolbox, faRightFromBracket, faPencil, faTrashCan)

function Admin_Menu () {
    return (
        <div className='menu_bar'>
                <div>
                    <Link to="/admin/service">
                        <p><FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench" />Serviços</p>
                    </Link>
                </div>
                <div>
                    <Link to="/admin/brand">
                        <p><FontAwesomeIcon icon="fa-solid fa-flag" />Marcas</p>
                    </Link>
                </div>
                {/*<div>
                    <Link to="/admin/order">
                    <p><FontAwesomeIcon icon="fa-solid fa-paper-plane" />Chamados</p>
                    </Link>
                </div>*/}
                 <div>
                    <Link to="/admin/contact">
                        <p><FontAwesomeIcon icon="fa-solid fa-phone" />Contatos</p>
                    </Link>
                </div>
                <div>
                    <Link to="/admin/tproduct">
                        <p><FontAwesomeIcon icon="fa-solid fa-toolbox" />Tipo Produtos</p>
                    </Link>
                </div>
                <div>
                    <Link to="/"><p>
                        <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />Sair</p>
                    </Link>
                </div>
            </div>
    )
}

export default Admin_Menu