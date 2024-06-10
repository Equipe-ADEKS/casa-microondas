// import '../assets/css/informations.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

const Informations = () => {
    return (
        <>
        <Header />
        <main>
            <div className="banner">
                <img className="banner_content" src="./banner/banner-microondas2.png" alt=""></img>
            </div>
            <h1 className="title">conserto em 30 minutos</h1>
            <div className="text_info">
                <p>INFORMAMOS AOS NOSSOS CLIENTES QUE ORÇAMENTO E CONSERTO EM 30 MINUTOS SERÃO REALIZADOS DESDE QUE:</p>
                <h3><li>O CLIENTE AGUARDE NO BALCÃO;</li></h3>
                <p>A PREFERENCIA SERÁ DE QUEM ESTIVER AGUARDANDO</p>
                <h3><li>NÃO SEJA APARELHO IMPORTADO;</li></h3><br />
                <p>POIS PODE HAVER DIFICULDADE EM ENCONTRAR PEÇAS OU FAZER ADAPTAÇÕES</p>
                <h3><li>NÃO TENHA VINDO DE OUTRA OFICINA;</li></h3><br />
                <p>POIS ALGUMAS VEZES VEM TODO MEXIDO, FALTANDO PEÇAS OU COM A FIAÇÃO TROCADA</p>
                <h3><li>SEJA DENTRO DO HORÁRIO QUE O TÉCNICO ESTÁ TRABALHANDO</li></h3><br />
                <p>(08:30h às 11:30h e 13h às 16:30h) APÓS ESTE HORARIO SERÁ ORÇADO E CONSERTADO NO DIA SEGUINTE</p>
                <h3><li>NÃO NECESSITE DE PINTURA OU DE RETOQUE DE PINTURA;</li></h3><br />
                <p>NESSE CASO PRECISA-SE DE ATÉ 15 DIAS PARA FICAR PRONTO</p>
                <h3><li>Não serão avaliados na hora os micro-ondas de Convecção, Fornos Elétricos Fischer Lumen, Fornos Elétricos de Embutir 60L de qualquer marca, maquinas de pão ou qualquer outro aparelho que o técnico julgar necessário mais tempo para avaliação.</li></h3><br />
                <h3>DENTRO DOS 30 MINUTOS ESTÁ INCLUSO A LIMPEZA E HIGIENIZAÇÃO. MAS CASO O APARELHO ESTEJA MUITO ENGORDURADO, COM PÓ INCRUSTADOS OU PRECISE DE CUIDADOS EXTRAS (POLIMENTO, TIRAR MANCHAS, LIMPEZA DOS DUTOS) PODE DEMORAR UM POUCO MAIS.</h3><br />
                <div className="logo_agradecimento">
                    <img className="logo_branca" src="./logo-branca.png" alt=""></img>
                    <h3>CONTAMOS COM SUA COMPREENSÃO.</h3>
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}

export default Informations;