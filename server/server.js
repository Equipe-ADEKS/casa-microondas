import express from "express";
import bodyParser from "body-parser";
import sqlServer from "mssql"
import jwt from "jsonwebtoken";
import cors from 'cors';

const dbConfig = {
    server: "52.5.245.24",
    database: "cmo",
    user: "adminCMO",
    password: "@Uniandrade_2024",
    port: 1433,
    options: {
        trustServerCertificate: true,
    }
};

const conexao = sqlServer.connect(dbConfig, (err) => {
    if (err)
        console.log(err)
    else
        console.log('conectado com sql server.');
});

const SEGREDO = 'REMOTA';


const app = express();
const porta = 5000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/*
const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "cmo2",
    user: "root"
});

conexao.connect();
*/

app.listen(porta, () => {
    console.log("Servidor rodando e escutando na porta 5000.")
});

app.get("/", (req, resp) => {
    resp.status(200).send("Nosso servidor da PD")
});



let html = '';

/*app.get("/marcas", (req, resp) => {
    html = `
        <html>
            <head>
                <title>Biblioteca</title>
            </head>
            <body>
                <h1>Prateleira Digital</h1>
                <p>Este é o projeto pd!!!!!!!!!!</p>
            </body>
        </html>`;
    resp.status(200).send(html

    );
});*/



/*app.get("/modelos", (req, resp) => {
    resp.status(200).send("Rota para trazer os modelos");
});

app.get("/cadastro", (req, resp) => {
    resp.status(200).send("Rota para cadastro");
});
*/


// middleware
function verificarToken(req, res, next) {
    const token = req.headers['x-access-token'];
    jwt.verify(token, SEGREDO, (erro, decodificado) => {
        if (erro)
            return res.status(401).end();
        req.id = decodificado.id;
        next();
    });
}

app.post("/login", (req, res) => {
    let usu = req.body.usuario;
    let sen = req.body.senha;

    // conectar ao bd pra buscar o ID desse usuario

    //if usu e a senha for igual ao registrado na tabela do BD
    if (usu == "marcos" && sen == "123") {
        const id = 1; // isso vem do BD

        //token tem 3 partes = 1.) identifica o usuário 2.) segredo, opções 
        const token = jwt.sign({ id }, SEGREDO, { expiresIn: 300 }); // 5 min

        console.log("usuário marcos logou no sistema");
        return res.status(500).json({ autenticado: true, token: token });
    };
    res.status(504).send("Usuário inválido ou inexitente");
});


// Rota para inclusão de novos tipos produto


app.get("/Marca/:id_marca", (req, res) => {
    let id_marca = req.params.id_marca;

    conexao.query(`SELECT id_marca,
          desc_marca,
          ativo
      FROM Marca WHERE id_marca = ${id_marca}`)
        .then(resut => res.json(resut.recordset))
        .catch(err => res.json(err));


});

app.get("/marca", (req, resp) => {
    let desc_marca = req.body.desc_marca;
    let logo_marca = req.body.logo_marca;
    let url_marca = req.body.URL_marca;

    conexao.query(`SELECT id_marca,
        desc_marca,
        ativo
    FROM Marca `)
        .then(resut => resp.json(resut.recordset))
        .catch(err => resp.json(err));


});

app.get("/Marca", (req, res) => {
    conexao.query(`SELECT id_marca, desc_marca, logo_marca, url_marca
                   FROM Marca
                   WHERE ativo = 1`)
        .then(result => {
            res.json(result.recordset); // Retorna os resultados como JSON
        })
        .catch(err => {
            console.error("Erro ao consultar marcas:", err);
            res.status(500).json({ error: "Erro ao consultar marcas" });
        });
});





app.put('/marca/:id', (req, res) => {
    let id = req.params.id;
    let { desc, logo, url, ativo } = req.body;
    
    console.log('Dados recebidos:', req.body); // Log para depuração
    console.log('ID da marca:', id);

    conexao.query(`exec SP_Upd_Marca @id = ${id}, @desc_marca = '${desc}', @logo_marca = '${logo}', @url_marca = '${url}', @ativo = ${ativo}`, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(500).send('Problema ao atualizar a Marca');
        } else {
            console.log('Resultado da query:', resultado.recordset); // Log para depuração
            res.status(200).send('Marca atualizada com sucesso');
        }
    });
});

// CRUD MARCA COMPLETA 
app.post("/marca", (req, res) => {
    console.log('Dados recebidos:', req.body); // Log para depuração
    let { desc, logo, url } = req.body;
    conexao.query(`exec SP_Ins_Marca '${desc}','${logo}', '${url}'`, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(500).send('Problema ao atualizar a Marca');
        } else {
            console.log('Resultado da query:', resultado.recordset); // Log para depuração
            res.status(200).send('Marca atualizada com sucesso');
        }
    });
});

app.delete('/marca/:id', (req, res) => {

    let id = req.params.id;

    conexao.query(`exec SP_Del_Marca '${id}'`, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(500).send('Problema ao excluir o serviço');
        } else {
            console.log(resultado);
            res.status(200).send('Servico excluido com sucesso');
        }
    });
});





// GET PARA O SITE 
app.get("/tipoProduto", (req, resp) => {
    let id_tipo = req.body.id_tipo;
    let desc_tipo = req.body.desc_tipo;
    let ativo = '1';

    conexao.query(`SELECT id_tipo,
        desc_tipo,
        ativo
    FROM TipoProduto`)
        .then(resut => resp.json(resut.recordset))
        .catch(err => resp.json(err));


});

// GET PARA O SITE 
app.get("/tipoProduto", (req, resp) => {
    let id_tipo = req.body.id_tipo;
    let desc_tipo = req.body.desc_tipo;
    let ativo = '1';

    conexao.query(`SELECT id_tipo,
        desc_tipo,
        ativo
    FROM TipoProduto WHERE ativo = 1`)
        .then(resut => resp.json(resut.recordset))
        .catch(err => resp.json(err));


});

// GET PARA O FORMULARIO
app.get("/tipoProduto/:id_tipo", (req, res) => {
    let id_tipo = req.params.id_tipo;


    conexao.query(`SELECT id_tipo,
        desc_tipo,
        ativo
    FROM TipoProduto WHERE id_tipo = ${id_tipo}`)
        .then(resut => res.json(resut.recordset))
        .catch(err => res.json(err));


});



app.post("/tipoProduto", (req, res) => {
    console.log('Dados recebidos:', req.body); // Log para depuração
    let { desc } = req.body;

    // Ajuste a chamada para a procedure conforme necessário
    conexao.query(`exec SP_Ins_TipoProduto @desc_tipo = '${desc}'`, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(500).send('Problema ao atualizar o Tipo de Produto');
        } else {
            console.log('Resultado da query:', resultado.recordset); // Log para depuração
            res.status(200).send('Tipo de produto atualizado com sucesso');
        }
    });
});


app.put('/tipoProduto/:id', (req, res) => {
    let id = req.params.id;
    let { desc_tipo, ativo } = req.body;
    
    console.log('Dados recebidos:', req.body); // Log para depuração
    console.log('ID do tipo de produto:', id);

    conexao.query(`exec SP_Upd_TipoProduto @id = ${id}, @desc_tipo = '${desc_tipo}', @ativo = ${ativo}`, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(500).send('Problema ao atualizar o Tipo de Produto');
        } else {
            console.log('Resultado da query:', resultado.recordset); // Log para depuração
            res.status(200).send('Tipo de Produto atualizado com sucesso');
        }
    });
});






app.post("/servicos", (req, res) => {
    console.log('Dados recebidos:', req.body); // Log para depuração
    let { tit, desc, url, img, ordem, ativo } = req.body;
    ativo = ativo ? '1' : '0'; // Convertendo booleano para string '1' ou '0'
    conexao.query(`exec SP_Ins_Servico
        '${tit}', '${desc}', '${url}', 
        '${img}', ${ordem}, ${ativo}`, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(500).send('Problema ao inserir serviço');
        } else {
            console.log('Resultado da query:', resultado); // Log para depuração
            res.status(200).send('Servico inserido com sucesso');
        }
    });
});



app.put('/servicos/:id', (req, res) => {
    let id = req.params.id;
    let { titulo, desc, url, img, ordem, ativo } = req.body;
    
    console.log('Dados recebidos:', req.body); // Log para depuração
    console.log('ID do serviço:', id);

    conexao.query(`exec SP_Upd_Servico @id = ${id}, @titulo = '${titulo}', @desc_servico = '${desc}', @img_servico = '${img}', @url_servico = '${url}', @ordem = ${ordem}, @ativo = ${ativo}`, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(500).send('Problema ao atualizar serviço');
        } else {
            console.log('Resultado da query:', resultado.recordset); // Log para depuração
            res.status(200).send('Serviço atualizado com sucesso');
        }
    });
});
// GET PARA O FORMULARIO
app.get("/servico/:id", (req, res) => {
    let id_servico = req.params.id;
    conexao.query(`SELECT id_servico,
                    titulo_servico,
                    desc_servico,
                    url_servico,
                    ordem_apresentacao,
                    ativo
                FROM servico WHERE id_servico = ${id_servico}`)
        .then(resut => res.json(resut.recordset))
        .catch(err => res.json(err));

});

// GET PARA O SITE
app.get("/servicos", (req, resp) => {
    conexao.query(`SELECT id_servico,
        titulo_servico,
        desc_servico,
        url_servico,
        ordem_apresentacao,
        ativo
    FROM servico WHERE ativo = 1
    ORDER BY ORDEM_APRESENTACAO`)
        .then(resut => resp.json(resut.recordset))
        .catch(err => resp.json(err))

});

// GET PARA O ADMINISTRADOR
app.get("/servico", (req, res) => {
    conexao.query(`SELECT id_servico,
                    titulo_servico,
                    desc_servico,
                    url_servico,
                    ordem_apresentacao,
                    ativo
                FROM servico 
                ORDER BY ORDEM_APRESENTACAO`)
        .then(resut => res.json(resut.recordset))
        .catch(err => res.json(err))
});


app.delete('/servicos/:id', (req, res) => {
    let id = req.params.id;

    console.log(`Recebendo pedido de exclusão para o ID: ${id}`);

    conexao.query(`exec SP_Del_Servico '${id}'`, (erro, resultado) => {
        if (erro) {
            console.error("Erro ao excluir o serviço:", erro);
            res.status(500).send('Problema ao excluir o serviço');
        } else {
            console.log("Resultado da exclusão:", resultado);
            res.status(200).send('Serviço excluído com sucesso');
        }
    });
});


app.delete('/tipoProduto/:id', (req, res) => {

    let id = req.params.id;
    let ativo = "1";

    conexao.query(`exec SP_Del_TipoProduto '${id}', ${ativo}`, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(500).send('Problema ao excluir o Tipo de Produto');
        } else {
            console.log(resultado);
            res.status(200).send('Tipo de Produto excluido com sucesso');
        }
    });
});


app.post("/chamado", (req, res) => {
    let {
      cliente,
      fone,
      email,
      tipoProd,
      marca,
      problema,
      tipoCham,
      produto // Certifique-se de incluir produto no objeto desestruturado
    } = req.body;
  
    conexao.query(
      `exec SP_Ins_Chamado 
        @cliente = '${cliente}', 
        @fone = '${fone}', 
        @email = '${email}', 
        @tipoProd = '${tipoProd}', 
        @marca = '${marca}', 
        @problema = '${problema}', 
        @tipoCham = '${tipoCham}', 
        @produto = '${produto}'`, // Certifique-se de passar produto para a procedure
      (erro, resultado) => {
        if (erro) {
          console.error(erro);
          res.status(500).send("Problema ao inserir o chamado");
        } else {
          console.log(resultado);
          res.status(200).send("Chamado inserido com sucesso");
        }
      }
    );
  });


 app.get("/chamado", (req, resp) => {

    conexao.query(`SELECT  id_chamado,
                    nome_cliente,
                    fone_cliente,
                    email_cliente,
                    desc_tipo,
                    desc_marca,
                    desc_produto,
                    nr_serie,
                    capacidade,
                    problema,
                    solucao,
                    dt_chamado
                        FROM VW_CHAMADO`)
    .then(result => {
        resp.status(200).json(result.recordset);
    })
    .catch(err => {
        resp.status(500).json({ error: err.message });
    });
});






