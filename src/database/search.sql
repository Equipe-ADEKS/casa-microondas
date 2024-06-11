

-- Selecionando todos os dados da tabela Filial
SELECT * FROM Filial;

-- Selecionando todos os dados da tabela Departamento
SELECT * FROM Departamento;

-- Selecionando todos os dados da tabela Pessoa
SELECT * FROM Pessoa;

-- Selecionando todos os dados da tabela Telefone
SELECT * FROM Telefone;

-- Selecionando todos os dados da tabela Email
SELECT * FROM Email;

-- Selecionando todos os dados da tabela Endereco
SELECT * FROM Endereco;

-- Selecionando todos os dados da tabela Funcionario
SELECT * FROM Funcionario;

-- Selecionando todos os dados da tabela Fornecedor
SELECT * FROM Fornecedor;

-- Selecionando todos os dados da tabela Cliente
SELECT * FROM Cliente;

-- Selecionando todos os dados da tabela Usuario
SELECT * FROM Usuario;

-- Selecionando todos os dados da tabela TBStatus
SELECT * FROM TBStatus;

-- Selecionando todos os dados da tabela Acessorio
SELECT * FROM Acessorio;

-- Selecionando todos os dados da tabela Categoria
SELECT * FROM Categoria;

-- Selecionando todos os dados da tabela Marca
SELECT * FROM Marca;

-- Selecionando todos os dados da tabela Modelo
SELECT * FROM Modelo;

-- Selecionando todos os dados da tabela Cor
SELECT * FROM Cor;

-- Selecionando todos os dados da tabela Tipo_Atendimento
SELECT * FROM Tipo_Atendimento;

-- Selecionando todos os dados da tabela Produto
SELECT * FROM Produto;

-- Selecionando todos os dados da tabela Equipamento
SELECT * FROM Equipamento;

-- Selecionando todos os dados da tabela Os
SELECT * FROM Os;

-- Selecionando todos os dados da tabela Plano_Pagamento
SELECT * FROM Plano_Pagamento;

-- Selecionando todos os dados da tabela Forma_Pagamento
SELECT * FROM Forma_Pagamento;

-- Selecionando todos os dados da tabela Servico
SELECT * FROM Servico;

-- Selecionando todos os dados da tabela Venda
SELECT * FROM Venda;

-- Selecionando todos os dados da tabela Itens_Vendidos
SELECT * FROM Itens_Vendidos;

-- Selecionando todos os dados da tabela Os_Servico
SELECT * FROM Os_Servico;

-- Selecionando todos os dados da tabela Acessorio_OS
SELECT * FROM Acessorio_OS;

-- Selecionando todos os dados da tabela Faturamento
SELECT * FROM Faturamento;

--

SELECT 
    s.id_servico, 
    s.desc_servico, 
    os.id_o_s
FROM Servico s
LEFT JOIN Os_Servico os ON s.id_servico = os.id_servico;


SELECT desc_marca,
	   logo_marca,
       url_marca
FROM Marca
WHERE fl_marca = TRUE;

SELECT titulo_servico,
	   desc_servico
FROM Servico
WHERE fl_servico = TRUE;      



SELECT titulo_servico,
	   desc_servico,
       img_servico,
       url_servico
FROM Servico
WHERE fl_servico = TRUE
order by ordem_apresentacao;







