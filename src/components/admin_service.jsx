import '../assets/css/admin_pages.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFlag, faScrewdriverWrench, faUser , faBuilding, faPaperPlane, faPhone, faToolbox, faRightFromBracket, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

library.add( faUser, faFlag, faScrewdriverWrench , faBuilding, faPaperPlane, faPhone, faToolbox, faRightFromBracket, faPencil, faTrashCan)

function Admin_Service () {
    return (
        <>
        <main>
            <section className='main_service'>
                <h2 className='tittle_service'>Serviços</h2>
                <div className='table'>
                    <div className='input_form'>
                        <span>id_serviço</span>
                        <input type="number" />
                    </div>
                    <div className='input_form'>
                        <span>Titulo_serviço</span>
                        <input type="text" />
                    </div>
                    <div className='input_form'>
                        <span>Descrição_serviço</span>
                        <input type="text" />
                    </div>
                    <div className='input_form'>
                        <span>Imagem_serviço</span>
                        <input type="url" />
                    </div>
                    <div className='input_form'>
                        <span>Ordem apresentação</span>
                        <input type="number" />
                    </div>
                    <div className='input_form'>
                        <span>Url_serviço</span>
                        <input type="url" />
                    </div>
                    <div className='input_form'>
                        <span>Ativo</span>
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

export default Admin_Service