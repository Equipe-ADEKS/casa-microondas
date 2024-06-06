function Header ()
{
    return (
        <header>
		<div className="inicio">
			<div className="inicio_barra">
                <i id="barra_lateral_esquerdo" className="fa-solid fa-bars"></i>
                <h1 className="nome"><strong>Casa do Microondas</strong></h1>
            </div>
			<nav className="navegacao">
				<a className="navegacao_botao" href="./index.html">home</a>
				<a className="navegacao_botao" href="./html/localization.html">localização</a>
				<a className="navegacao_botao" href="./html/informations.html">conserto em 30 minutos</a>
				<a className="navegacao_botao" href="./html/contact.html">contato</a>
			</nav>
			<div className="utilidades">
				<button className="botao"><i className="fa-regular fa-moon"></i> Night</button> 
                <button className="botao"><i className="fa-solid fa-magnifying-glass"></i></button>
                <a href="../src/html/account_login.html"><i id="icon" className="fa-regular fa-user"></i></a>                            
                <button className="botao"><i className="fa-solid fa-cart-shopping"></i></button>    
			</div>
		</div>
	    </header>
    )
}

export default Header 