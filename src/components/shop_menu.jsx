import '../assets/css/shop_menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBox, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from "react";

library.add( faBox , faShoppingCart )

const ShopMenu = () => {
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

function ShopMenuButton () {
    const [show, setShow] = useState(true);

    /* return (

    ) */
}

export default ShopMenuButton