import '../assets/css/shop_menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBox } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

library.add(faBox)

function ShopMenu () {
    return (
        <>
        <div className="menu_carrinho">
            <div className="principal">
                <FontAwesomeIcon icon="fa fa-box"/>
                <p>Seu carrinho está vazio no momento!</p>
            </div>
            <div>
                <Link to="/shop"><button>Comece a comprar</button></Link>
            </div>
        </div>
        </>
    )
}

export default ShopMenu