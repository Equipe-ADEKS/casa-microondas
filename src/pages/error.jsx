import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../assets/css/error.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

const Error = () => {
    return (
        <>
        <Header />
        <main>
            <section className="aviso">
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" className="warning"/>
                    <p>Desculpe-nos, essa página ainda não esta pronta.</p>
                    <img src="./logo-branca.png" alt=""></img>
                </div>
            </section>
            <div className="menu_lateral">
                <div className="menu_lateral_back">
                    <button><i className="fa-solid fa-x"></i></button>
                </div>
                <div className="menu_lateral_content">
                    <div>
                        <img src="https://heim.nordicmade.com/wp-content/uploads/2023/03/category-accessories-400x400.jpg" alt=""></img>
                            <a href="">Acessórios</a>
                    </div>
                    <div>
                        <img src="https://heim.nordicmade.com/wp-content/uploads/2023/03/category-decoration-400x400.jpg" alt=""></img>
                            <a href="">Decoração</a>
                    </div>
                    <div>
                        <img src="https://heim.nordicmade.com/wp-content/uploads/2023/03/category-essentials-400x400.jpg" alt=""></img>
                            <a href="">Essenciais</a>
                    </div>
                    <div>
                        <img src="https://heim.nordicmade.com/wp-content/uploads/2023/03/category-living-400x400.jpg" alt=""></img>
                            <a href="">Vivendo</a>
                    </div>
                </div>
                <div className="menu_lateral_functions">
                    <a href="">Sobre</a>
                    <a href="">Contate-nos</a>
                    <a href="">Perguntas frequentes</a>
                    <a href="">Acompanhamento de serviços</a>
                </div>
                <div className="menu_lateral_other">
                    <a href="">Minha conta</a>
                    <button className="botao"><i id="icon_moon" className="fa-regular fa-moon"></i>Night</button>
                </div>
                <div className="menu_carrinho">
                    <div className="principal">
                        <i className="fa-solid fa-box"></i>
                        <p>Seu carrinho está vazio no momento!</p>
                    </div>
                    <div>
                        <button>Comece a comprar</button>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
};

export default Error;