import '../assets/css/loggedin_user.css'
import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx"

const LoggedInUser = () => {
    return (
        <>
        <Header />
        <main className='lgd'>
            <div className='div1'>
                <div className='user_name'>
                    <img src="data:image/png;base64,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" alt="" />
                    <h2>Nome do Cliente</h2>
                </div>
                <div className='menu_bar'>
                    <div>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAZlBMVEX///8AAAAJCQkuLi7FxcV4eHh8fHz8/Pz19fXm5ubQ0NDMzMzt7e3d3d2wsLCnp6dnZ2eXl5dXV1cmJibW1tZDQ0OHh4dQUFC7u7ttbW1LS0thYWGRkZE0NDSfn585OTkWFhYcHBzCoFe+AAAEiElEQVR4nO2a63aqMBCFReUmeKmCotaq7/+SR1sziTCbJAq0a53Zv87RCF+TyZ6ZwGgkEolEIpFI9J8pz6Ld6bSLpjkesgwb+pz3yLQ8BQ+dlmBIMgkYjWd9IaWleZ8yZQd9cUxBcOiJKavNwYT96yMeKuiHadm8EbeEg0J9cHf6+FWofMXfatXYhcNB5Wtwq2BdpxoMaoaQ7qqF+1BQVRtTMK5+ASretjLd9BkPDgVC3NR+YKj52c705O4DQBUbF6abu1PG7R+KcXGkxVBQILnyWg4ClRzZq28KsKaruH+oOe/iu1v0zHfsV8e0b6iCv/bPdMS8T4zn/UIt+EtTWcAWDcGl6hEq/uRnYqGHLMbskGXYF1TMh/jlKffOLuyga09Q6YG97CF1GtYPVMbv+H3y+D5W+TfZDwYFQpxKgXi/p3/yodc5FLjPhUL8bl9rynQLPrC6hQIrspmqAT9uvinU/6eOGfsNqHnJXnBHIU5rSzOX8u7eHdQMJDVqDowM/aU+Q41OR1AoxNX3yVM2XKvdOHIK9xeZwLX1QtXWtmwuatdQOe/i+sBg2vySwn/GHrW8DZXzIb6h2VgyuW5MhwmpdRO+wFTxfhOpuElAng1pAKoOXocC7WZECQXusBUlHwuVLxK6HrW+xRXf7Eo+2t5IezKBpdEu3u7ajuP8mECMlsoxY2tP86VWGewWfyiwm7WLo1LSUKjGtri7DxMIhC3No1Mlp+s/eBriwQSuQS7u2rbrsgG5uzMS2OmbTA3waNvJR22Fq0UgLs9qLWK+jwL6UOGe8gc1JX5IYQjsYG3SfDaEOlrsfzJFJFqgcduqPxi07S2iKhkc/l0qxNL+Ox3irYevSFRS2EozVjlfi+sZ9ghxUxTuU97+wpbAAu5T0vx79E7Pok7MWu7XBTpuyviJdzhpUZUM/OYKHrKBBacQL5wOX5HOyketYWvIOhYUfM7Sm8zWbGsmkDPJxb0OOnlR+5Xx3+9rVLb48zq0gKKcAlrV8umZMmg3yYxBT+Oto9r6IC2YT1WB+1Daml27YTI2GUqg5Gi27ys+87wk/XALzcTPTPLuQ6XQ647JizYZKMrujgaebp6oPOskxE3Rw63ixH5/o+LveaRt+ZZj8jrTJuPDfT9i42VrmeI3tWl39/GIMyhy8Q4ckxf5KOfuJde3kFl0HOKmqIRiCrSqeWdy8dzxhPA17ZSPNtz9zhs/f0im63dI7y9qCmvpYvcdz4l5d5pW5jCsa1E9ay7W4ZHaUv0RuXhvIW6Kwt1wdypBs4cvTFShYj3r6kh0+qbedxpTqaQ2pja1N+peP61rJv1Uft5zcqg76KGYjLOE74qt9o7TvCqMuu8XoEbxrGp/b/A3oKwSKIESKIESKIH6C1DHqPk+fhhG7uchPUCZNZmpzPn0oQ8ocDA/FSiBEiiBEiiBEiiBEiiBEiiBEiiBEqj/Cuo6FNTFA8r1XYS3oVYeUOBdou6hwFESK9ur7V1BRY33uFrl8BL1XQjK7dch/2usbHWaWHVCJ3kuv135rJ1IJBKJRCLRX9U/50JNEoURwooAAAAASUVORK5CYII=" alt="" />
                        <p>Meu perfil</p>
                    </div>
                    <div>
                        <img src="data:image/png;base64,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" alt="" />
                        <p>Meus orçamentos</p>
                    </div>
                    <div>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACUCAMAAAAj+tKkAAAAZlBMVEX///8AAADZ2dkWFhZTU1OgoKDk5OT6+vomJiYaGhrr6+sqKipdXV3w8PDExMRISEioqKhDQ0NnZ2fQ0NC6urohISE+Pj55eXlvb2+NjY1iYmI1NTW0tLTKyspYWFiUlJQODg6CgoLX+aZNAAAD4ElEQVR4nO2c21rrIBCFSazQpk1t1B60tYf3f0m7cYcwSQoTEWYuWHdemP7fwOI4jBA9qeciTNd1/5N/qnofyFccovKpl0C8p4OKyVfP+j84239cnvHavMXEE+oA6Zp3WUUNyFSB/rfcV9Q8fb3bfK8lNc5A5bzDW2yoaUb02fHN4/b13+mr4zty5FNNFz9+3U8Ah7xTs4xJrQzfhZplVKXh29XULKP6MIAnapRxbY2DqUnGVT61gBxH6Ls2ZgZmOcQIcWsB4y7nfi1l1jEf1CjjqsxCmuUgLYTctYBMu6A8toA8R2lRmmGQp0esYZCa5IEyYKgyYKgyYKgyYKgyYKgyYKgyYKgyYF/1+rSesjZODfh236RdXyT+HxIDrn9+6wl/J5UYsL2NWX5h/yMtoGp/rNhiCdMC1gawWCJbmSqCd6vgTgoS90H7xneBimFiQPVqES4xdx7JB+qVRYhxSnJAGEN/K6efi5Udw4XXKRSLBTuGXqdQANbW5aX39pJmuTXBKTSA0ClOQqIFK3DK1tXKZCtqO4Zbh1PIAEEMHU4h3JOcUU4hBMQ5hXJXh3IK7bYT4RRaQAX64ei8TL1xByuHsRhSA3qdQg3Ya+WhU8gBYQzng1amB/SsYHGASpYRJZcOp6AA5d7K34ugq/1HzykYwPo6/GZEwfQTDODB9bkIAvknCMC6cX0tgo5yGmCXd5FIYM7DRDA0BXyqmokRtPLj0gikGKGGmUGWelSdQYIMCrB+Xrq++Ldq4Ak7g6lO1EeL77OXBc8AUNombPpZ+vSAYBQ7D25QyAGl3b6z4SsHasDKbt+xGyhiwGph8a3GXonQArr9oUUKCPrfavyGkRIQ+HfEH1qEgNLnDy06QL8/tMgAoT8e33BTAYKd3AN/aBEBAn+8uF7J0QBKe5szc2YwkAACf5zdrwwpALH+0CIAhP7wvdJMDwj6n9MfWskBJ/hDKzVgZR9DefyhlRiwsnewPn9oJQa03zF7/aFFlzezw72yTgtYTfKHFlUEH61PB0rcB9sTfZQ/tBID/p/l+ucbDqUeB+U/H98mVCFIn3lU15Pen1GfLHiVAUOVAUOVAUOVAUOVAUOVAUOVAUPFH9Ds9JlWCeiuKtgVA/tRdxbLsV7UXbVJPmNabqY7LblRkzyQSen4ZOqSruoW+qlbWkkzEPKsuiVEdyTLtI1NVSauIZQGkGdpOqFuhvCVZyN/Lbg3spVhyXM66XohzwqYQlwK5jEEZWwPEx6gJ1NpARY7jnUITzZhcT3xi+IFEBbz2+aNWSmzQSbt4nhsZmidb9GDHpzrG93/Gz+DW388lX8DdJYn5wMZcasAAAAASUVORK5CYII=" alt="" />
                        <p>Sair</p>
                    </div>
                </div>
            </div>
            <div className='div2'>
                <div className='titulo'>
                    <h2>Meu Perfil</h2>    
                </div>
                <div>
                    <h3><strong>Dados do cadastro</strong></h3>    
                </div>  
                <div className='plmdd'>
                    <img src="data:image/png;base64,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" alt="" />
                    <div className='main_div2'>
                        
                        <div className='fgh'>
                            <h4>Nome de usuario</h4>
                            <p>Fulano Costa da Silva</p> 
                        </div>
                        <div className='fgh'>
                            <h4>Email</h4>
                            <p>fulanodasilva.gmail.com</p>
                        </div>
                    </div>
                </div>  
            </div>
            <img src="" alt="" />
        </main>
        <Footer />
        </>
    )
}

export default LoggedInUser