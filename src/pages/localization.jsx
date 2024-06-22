import '../assets/css/localization.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

library.add( faWhatsapp )

const Localization = () =>
{
    return (
        <>
        <Header />
        <main>
        <div className="banner">
            <img className="banner_content" src="./banner/banner-microondas1.png" alt=""/>
        </div>
        <div className="title_localization">
            <h1 >localização</h1>
            <p>Confira a Casa do Microondas mais próxima de você</p>
        </div>
        <h2 className="name_map">Avenida Presidente Kennedy 410, Rebouças - Curitiba</h2>
        <section className='try'>
            
            <div className="map">
                <iframe className="map_content" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5505576231662!2d-49.26796712494707!3d-25.453285333812794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce48c9e3e3e4b%3A0x94da37baf10ee50e!2sAv.%20Pres.%20Kennedy%2C%20410%20-%20Rebou%C3%A7as%2C%20Curitiba%20-%20PR%2C%2080220-200!5e0!3m2!1spt-BR!2sbr!4v1713643516486!5m2!1spt-BR!2sbr" title="reb" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>    
            <div className='maps_info'>
                
                <div className='maps_img'>
                    <img src="https://www.casadomicroondas.com.br/cache/preview/0bca1465ea663f8ae8f5ab2322a9c5da.jpg" alt="" />
                    <img src="https://www.casadomicroondas.com.br/cache/preview/043afc48a04759294e5ffa46d4018010.jpg" alt="" />
                </div>
                <div className='maps_desc'>
                    <div>
                        <p>Entrada com acessibilidade para cadeirantes </p>
                        <p>Pagamento via NFc e cartão de crédiro e débito</p>
                    </div>
                    <a href="https://wa.me/5541987327813" className='btn_whats'> <FontAwesomeIcon icon="fa-brands fa-whatsapp" />Whatsapp</a>
                </div>
            </div>
        </section>
        <h2 className="name_map">Rua Saturnino Miranda, 84 - Santa Felicidade - Curitiba </h2>
        <section className='try'>
            
            <div className="map">
                <iframe className="map_content" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.1417315555277!2d-49.336728024949196!3d-25.400065931707324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce1ae328a748b%3A0x7cfdac29470a291d!2sR.%20Saturnino%20Miranda%2C%2084%20-%20Santa%20Felicidade%2C%20Curitiba%20-%20PR%2C%2082030-320!5e0!3m2!1spt-BR!2sbr!4v1713643624124!5m2!1spt-BR!2sbr" title="santaFe" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>    
            <div className='maps_info'>
                
                <div className='maps_img'>
                    <img src="https://www.casadomicroondas.com.br/cache/preview/0bca1465ea663f8ae8f5ab2322a9c5da.jpg" alt="" />
                    <img src="https://www.casadomicroondas.com.br/cache/preview/043afc48a04759294e5ffa46d4018010.jpg" alt="" />
                </div>
                <div className='maps_desc'>
                    <div>
                        <p>Entrada com acessibilidade para cadeirantes </p>
                        <p>Pagamento via NFc e cartão de crédiro e débito</p>
                    </div>
                    <a href="https://wa.me/5541987327813" className='btn_whats'> <FontAwesomeIcon icon="fa-brands fa-whatsapp" />Whatsapp</a>
                </div>
            </div>
        </section>
        </main>
        <Footer />
        </>
    )
}

export default Localization