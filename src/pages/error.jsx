import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

import '../assets/css/error.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

library.add( faTriangleExclamation )

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
        </main>
        <Footer />
        </>
    )
};

export default Error;