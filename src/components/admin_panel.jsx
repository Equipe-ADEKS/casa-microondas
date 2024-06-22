import '../assets/css/admin_menu.css'
import Admin_Menu from './admin_menu.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFlag, faScrewdriverWrench, faUser , faBuilding, faPaperPlane, faPhone, faToolbox, faRightFromBracket, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';

library.add( faUser, faFlag, faScrewdriverWrench , faBuilding, faPaperPlane, faPhone, faToolbox, faRightFromBracket, faPencil, faTrashCan)

function Admin_Panel () {
    return (
        <section className='user_bar'>
            <div className='user_icon'>
                <FontAwesomeIcon className='icon' icon="fa-solid fa-user" /> 
                <div> 
                    <h1>Nome do Cara</h1> 
                    <p>Administrador</p>
                </div>
            </div>
            <Admin_Menu />
            <Outlet />
        </section>
    )
}

export default Admin_Panel