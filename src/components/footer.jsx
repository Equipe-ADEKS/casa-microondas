function Footer () 
{
    return (
        <footer>
		<div className="footer_content">
			<div className="footer_social">
				<h1>Casa do Microondas</h1>
				<p>Uma loja para quem quer comprar menos, mas melhor. Oferecemos uma coleção exclusiva de itens de alta qualidade para cada casa.</p>
				<div className="social_media">
					<a href="https://wa.me/5541987327813"><i className="fa-brands fa-whatsapp"></i></a>
                    <a href="https://br.linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://instagram.com"><i className="fa-brands fa-instagram"></i></a>
				</div>
			</div>
			<div className="footer_links">
				<div className="links_rapidos">
					<p>links rápidos</p>
					<li><a href="./html/error.html">Nossa história</a></li>
					<li><a href="./html/account_login.html">Minha conta</a></li>
				</div>
				<div className="links_rapidos">
					<p>Customer Care</p>
					<li><a href="./html/contact.html">Contate-nos</a></li>
					<li><a href="./html/error.html">FAQs</a></li>
				</div>
			</div>
		</div>
		<div className="footer_footer">
			<div className="rodape_esc">
				<a className="rodape_botao" href="./html/error.html">Sobre nós</a>
				<a className="rodape_botao" href="./html/contact.html">Contate-nos</a>
			</div>
			<p>© 2024 Casa do Microondas. Todos os direitos reservados.</p>
		</div>
	    </footer>
    )
}

export default Footer