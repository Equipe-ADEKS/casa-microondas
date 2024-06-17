// import '../assets/css/shop_menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBox, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import React, { Component, useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

library.add( faBox , faShoppingCart )

const ShopMenuEmpty = () => {
    const [state, setState] = useState({
      isPaneOpen: false,
      isPaneOpenLeft: false,
    });

    return (
        <SlidingPane className="some-custom-class" overlayClassName="some-custom-overlay-class" isOpen={state.isPaneOpen} title="Hey, it is optional pane title.  I can be React component too." subtitle="Optional subtitle." onRequestClose={() => { setState({ isPaneOpen: false });}}>
            <div className="menu_carrinho">
                <div className="principal">
                    <FontAwesomeIcon icon="fa fa-box"/>
                    <p>Seu carrinho está vazio no momento!</p>
                </div>
                <div>
                    <Link to="/shop"><button>Comece a comprar</button></Link>
                </div>
            </div>
        </SlidingPane>
    )
}

function ShopMenuButton () {
    return (
        <button className='botao'><FontAwesomeIcon icon="fa-solid fa-shopping-cart" /><ShopMenuEmpty /></button>
    )
}

export default ShopMenuButton