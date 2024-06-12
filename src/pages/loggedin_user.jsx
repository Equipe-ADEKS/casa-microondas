import '../assets/css/loggedin_user.css'
import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx"

const LoggedInUser = () => {
    return (
        <>
        <Header />
        <main>
            <div className='div1'>
                <div className='user_name'>
                    <img src="" alt="" />
                    <h2>Nome do Cliente</h2>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <p>Meu perfil</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p>Meus orçamentos</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p>Sair</p>
                    </div>
                </div>
            </div>
            <div className='div2'>
                <div>
                    <h2>Perfil</h2>    
                </div>
                <div>
                    <h3>Dados do cadastro</h3>    
                </div>  
                <div>
                    <div>
                        <img src="" alt="" />
                        <div>
                            <h4>Nome de usuario</h4>
                            <p>Nome do usuario</p> 
                        </div>
                        
                    </div>
                </div>  
            </div>
        </main>
        <Footer />
        </>
    )
}

export default LoggedInUser