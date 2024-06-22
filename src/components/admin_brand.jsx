import '../assets/css/admin_pages.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFlag, faScrewdriverWrench, faUser , faBuilding, faPaperPlane, faPhone, faToolbox, faRightFromBracket, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

library.add( faUser, faFlag, faScrewdriverWrench , faBuilding, faPaperPlane, faPhone, faToolbox, faRightFromBracket, faPencil, faTrashCan)

function Admin_Brand () {
    return (
        <>
        <main>
            <section className='main_brand'>
                <h2 className='tittle_brand'>Serviços</h2>
                <div className='table'>
                    <div className='input_form'>
                        <span>id_marca</span>
                        <input type="text" />
                    </div>
                    <div className='input_form'>
                        <span>Descrição_marca</span>
                        <input type="text" />
                    </div>
                    <div className='input_form'>
                        <span>Logo_marca</span>
                        <input type="url" />
                    </div>
                    <div className='input_form'>
                        <span>Url_marca</span>
                        <input type="url" />
                    </div>
                    <div className='input_form'>
                        <span>Ativo</span>
                        <input type="number" />
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

export default Admin_Brand