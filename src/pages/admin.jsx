import '../assets/css/admin.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFlag, faScrewdriverWrench, faUser , faBuilding, faPaperPlane, faPhone, faToolbox, faRightFromBracket, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';


 library.add( faUser, faFlag, faScrewdriverWrench , faBuilding, faPaperPlane, faPhone, faToolbox, faRightFromBracket, faPencil, faTrashCan)

const Admin_logged = () => {
    return(
        <>
        <Header/>
        <main className='lgd'>
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
                    <FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench" />
                    <p>Serviços</p>
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
           <section className='main_service'>
           <h2 className='tittle_service'>Serviços</h2>
            <div className='table'>
                <div className='input_form'>
                    <span>id</span>
                    <input type="text" />
                </div>
                <div className='input_form'>
                    <span>Nome</span>
                    <input type="text" />
                </div>
                <div className='input_form'>
                    <span>Opções</span>
                    <div className='options'>
                        <button><FontAwesomeIcon icon="fa-solid fa-pencil" /></button>
                        <button><FontAwesomeIcon icon="fa-solid fa-trash-can" /></button>
                    </div>
                </div>
            </div>
           </section>
        </main>
        <Footer/>
        </>
    )
}

export default Admin_logged