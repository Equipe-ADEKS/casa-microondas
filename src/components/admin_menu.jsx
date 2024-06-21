import '../assets/css/admin_menu.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFlag, faScrewdriverWrench, faUser , faBuilding, faPaperPlane, faPhone, faToolbox, faRightFromBracket, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

library.add( faUser, faFlag, faScrewdriverWrench , faBuilding, faPaperPlane, faPhone, faToolbox, faRightFromBracket, faPencil, faTrashCan)

function Admin_Menu () {
    return (
        <section className='user_bar'>
            <div className='user_icon'>
                <FontAwesomeIcon className='icon' icon="fa-solid fa-user" /> 
                <div> 
                    <h1>Nome do Cara</h1> 
                    <p>Administrador</p>
                </div>
            </div>
            <div className='menu_bar'>
                <div>
                    <Link to="/admin/admin_service"><FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench" /><p>Serviços</p></Link>
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-flag" />
                    <p>Marcas</p>
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-building" />
                    <p>Filiais</p>
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
                    <p>Chamados</p>
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-phone" />
                    <p>Contatos</p>
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-toolbox" />
                    <p>Tipo Produtos</p>
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
                    <p>Sair</p>
                </div>
            </div>
        </section>
    )
}

export default Admin_Menu