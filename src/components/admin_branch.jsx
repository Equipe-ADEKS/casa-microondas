import '../assets/css/admin_pages.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFlag, faScrewdriverWrench, faUser , faBuilding, faPaperPlane, faPhone, faToolbox, faRightFromBracket, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

library.add( faUser, faFlag, faScrewdriverWrench , faBuilding, faPaperPlane, faPhone, faToolbox, faRightFromBracket, faPencil, faTrashCan)

function Admin_Branch () {
    return (
        <>
        <main>
            <section className='main_branch'>
                <h2 className='tittle_branch'>Serviços</h2>
                <div className='table'>
                    <div className='input_form'>
                        <span>id_filial</span>
                        <input type="text" />
                    </div>
                    <div className='input_form'>
                        <span>Endereço_filial</span>
                        <input type="text" />
                    </div>
                    <div className='input_form'>
                        <span>Url do mapa</span>
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
        </>
    )
}

export default Admin_Branch