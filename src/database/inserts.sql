USE CASA_MICROONDAS_LOGIN;

-- Inserindo valores na tabela Filial
INSERT INTO Filial (nome_filial) VALUES
('Filial 1'),
('Filial 2'),
('Filial 3'),
('Filial 4'),
('Filial 5');

-- Inserindo valores na tabela Departamento
INSERT INTO Departamento (desc_departamento) VALUES
('Vendas'),
('Suporte Técnico'),
('Recursos Humanos'),
('Financeiro'),
('TI');

-- Inserindo valores na tabela Pessoa
INSERT INTO Pessoa (documento_principal, documento_secundario, nome_pessoa, id_filial) VALUES
('12345678900', '98765432100', 'João Silva', 1),
('22345678900', '18765432100', 'Maria Oliveira', 2),
('32345678900', '28765432100', 'Carlos Souza', 3),
('42345678900', '38765432100', 'Ana Lima', 4),
('52345678900', '48765432100', 'Paulo Fernandes', 5);

-- Inserindo valores na tabela Telefone
INSERT INTO Telefone (tipo_telefone, num_tel, ddd, cod_area, id_pessoa) VALUES
(1, '999999999', '041', '+55', 1),
(0, '888888888', '041', '+55', 2),
(1, '777777777', '041', '+55', 3),
(0, '666666666', '041', '+55', 4),
(1, '555555555', '041', '+55', 5);

-- Inserindo valores na tabela Email
INSERT INTO Email (desc_email, id_pessoa) VALUES
('joao.silva@example.com', 1),
('maria.oliveira@example.com', 2),
('carlos.souza@example.com', 3),
('ana.lima@example.com', 4),
('paulo.fernandes@example.com', 5);

-- Inserindo valores na tabela Endereco
INSERT INTO Endereco (tipo_endereco, cep, rua, bairro, logradouro, cidade, numero, complemento, observacao, id_pessoa) VALUES
('Residencial', '80000000', 'Rua A', 'Centro', 'Apto 101', 'Curitiba', 100, 'Bloco A', 'Próximo ao mercado', 1),
('Comercial', '81000000', 'Rua B', 'Batel', 'Sala 202', 'Curitiba', 200, 'Bloco B', 'Em frente ao shopping', 2),
('Residencial', '82000000', 'Rua C', 'Água Verde', 'Casa 303', 'Curitiba', 300, 'Bloco C', 'Ao lado do parque', 3),
('Comercial', '83000000', 'Rua D', 'Bigorrilho', 'Loja 404', 'Curitiba', 400, 'Bloco D', 'Próximo à escola', 4),
('Residencial', '84000000', 'Rua E', 'Portão', 'Apto 505', 'Curitiba', 500, 'Bloco E', 'Perto da padaria', 5);

-- Inserindo valores na tabela Funcionario
INSERT INTO Funcionario (data_adm, data_demi, funcao, id_departamento, id_pessoa, id_filial) VALUES
('2020-01-01', NULL, 'Vendedor', 1, 1, 1),
('2020-02-01', NULL, 'Técnico', 2, 2, 2),
('2020-03-01', NULL, 'Analista RH', 3, 3, 3),
('2020-04-01', NULL, 'Contador', 4, 4, 4),
('2020-05-01', NULL, 'Desenvolvedor', 5, 5, 5);

-- Inserindo valores na tabela Fornecedor
INSERT INTO Fornecedor (data_cadastro_fornecedor, id_pessoa) VALUES
('2020-06-01', 1),
('2020-07-01', 2),
('2020-08-01', 3),
('2020-09-01', 4),
('2020-10-01', 5);

-- Inserindo valores na tabela Cliente
INSERT INTO Cliente (nome_fonetico, data_cadastro_cliente, data_atualizacao, id_pessoa) VALUES
('João Silva', '2020-01-01', '2020-01-01', 1),
('Maria Oliveira', '2020-02-01', '2020-02-01', 2),
('Carlos Souza', '2020-03-01', '2020-03-01', 3),
('Ana Lima', '2020-04-01', '2020-04-01', 4),
('Paulo Fernandes', '2020-05-01', '2020-05-01', 5);

-- Inserindo valores na tabela Usuario
INSERT INTO Usuario (tipo_usuario, desc_senha, id_cliente, id_funcionario) VALUES
('Admin', 'senha123', 1, 1),
('User', 'senha123', 2, 2),
('Admin', 'senha123', 3, 3),
('User', 'senha123', 4, 4),
('Admin', 'senha123', 5, 5);

-- Inserindo valores na tabela TBStatus
INSERT INTO TBStatus (desc_status, tipo_status) VALUES
('Aberto', 'OS'),
('Fechado', 'OS'),
('Em Andamento', 'OS'),
('Pendente', 'OS'),
('Cancelado', 'OS');

-- Inserindo valores na tabela Acessorio
INSERT INTO Acessorio (desc_acessorio) VALUES
('Controle Remoto'),
('Cabo HDMI'),
('Manual de Instruções'),
('Antena'),
('Suporte de Parede');

-- Inserindo valores na tabela Categoria
INSERT INTO Categoria (desc_categoria) VALUES
('Microondas'),
('Geladeira'),
('Fogão'),
('Lava Roupas'),
('Televisão');

-- Inserindo valores na tabela Marca
INSERT INTO Marca (desc_marca) VALUES
('LG'),
('Samsung'),
('Sony'),
('Philips'),
('Panasonic');

-- Inserindo valores na tabela Modelo
/*INSERT INTO Modelo (desc_modelo, id_marca) VALUES
('Model A', 1),
('Model B', 2),
('Model C', 3),
('Model D', 4),
('Model E', 5);*/

-- Inserindo valores na tabela Cor
INSERT INTO Cor (desc_cor) VALUES
('Preto'),
('Branco'),
('Cinza'),
('Vermelho'),
('Azul');

-- Inserindo valores na tabela Tipo_Atendimento
INSERT INTO Tipo_Atendimento (desc_tipo_atendimento) VALUES
('Garantia'),
('Pós-Venda'),
('Técnico'),
('Instalação'),
('Consultoria');

-- Inserindo valores na tabela Produto
/*INSERT INTO Produto (desc_produto, quant_produto, valor_custo, valor_venda, data_cadastro, quant_min, quant_estoque, acessorio, ft_balcao, codigo) VALUES
('Microondas 20L', 100, 150.00, 300.00, '2020-01-01', 10, 100, 1, 0, 1001),
('Geladeira 300L', 50, 1000.00, 2000.00, '2020-02-01', 5, 50, 0, 1, 1002),
('Fogão 4 bocas', 75, 400.00, 800.00, '2020-03-01', 7, 75, 0, 0, 1003),
('Lava Roupas 10kg', 40, 1200.00, 2400.00, '2020-04-01', 4, 40, 0, 1, 1004),
('Televisão 50"', 60, 1500.00, 3000.00, '2020-05-01', 6, 60, 1, 0, 1005);

-- Inserindo valores na tabela Equipamento
-- Continuando a inserção na tabela Equipamento
INSERT INTO Equipamento (tamanho, voltagem, observacao, id_categoria, id_modelo, id_cor) VALUES
('300L', '220V', 'Geladeira grande', 2, 2, 2),
('4 bocas', '110V', 'Fogão econômico', 3, 3, 3),
('10kg', '220V', 'Lava roupas eficiente', 4, 4, 4),
('50"', '110V', 'TV de alta definição', 5, 5, 5);

-- Inserindo valores na tabela Os
INSERT INTO Os (data_abertura, descricao_problema, garantia, dia_recebimento, valor_desconto, valor_produto, frete, prazo_entrega, id_status, id_acessorio, id_funcionario, id_produto) VALUES
('2023-01-10', 'Não liga', 'Sim', '2023-01-09', 50.00, 300.00, 1, '2023-02-01', 1, 1, 1, 1),
('2023-02-10', 'Ruído estranho', 'Não', '2023-02-09', 20.00, 2000.00, 0, '2023-03-01', 2, 2, 2, 2),
('2023-03-10', 'Não aquece', 'Sim', '2023-03-09', 30.00, 800.00, 1, '2023-04-01', 3, 3, 3, 3),
('2023-04-10', 'Vazamento de água', 'Não', '2023-04-09', 40.00, 2400.00, 0, '2023-05-01', 4, 4, 4, 4),
('2023-05-10', 'Sem imagem', 'Sim', '2023-05-09', 60.00, 3000.00, 1, '2023-06-01', 5, 5, 5, 5);

-- Inserindo valores na tabela Plano_Pagamento
INSERT INTO Plano_Pagamento (desc_plano_pagto, parcelas, juros) VALUES
('À vista', 1, 0.00),
('2x sem juros', 2, 0.00),
('3x com juros', 3, 1.50),
('5x com juros', 5, 2.50),
('10x com juros', 10, 5.00);

-- Inserindo valores na tabela Forma_Pagamento
INSERT INTO Forma_Pagamento (desc_forma_pagto) VALUES
('Cartão de Crédito'),
('Cartão de Débito'),
('Boleto Bancário'),
('Transferência Bancária'),
('Dinheiro');

-- Inserindo valores na tabela Servico
INSERT INTO Servico (desc_servico, valor) VALUES
('Conserto de Microondas', 150.00),
('Manutenção de Geladeira', 200.00),
('Reparo de Fogão', 180.00),
('Assistência em Lava Roupas', 220.00),
('Serviço em Televisão', 250.00);

-- Inserindo valores na tabela Venda
INSERT INTO Venda (desconto, valor_final_venda, id_plano_pagto) VALUES
(50.00, 450.00, 1),
(100.00, 1900.00, 2),
(75.00, 725.00, 3),
(120.00, 2280.00, 4),
(150.00, 2850.00, 5);

-- Inserindo valores na tabela Itens_Vendidos
INSERT INTO Itens_Vendidos (total_itens_vendidos, id_produto, id_venda) VALUES
(1, 1, 1),
(1, 2, 2),
(1, 3, 3),
(1, 4, 4),
(1, 5, 5);

-- Inserindo valores na tabela Os_Servico
INSERT INTO Os_Servico (desc_os_servico, valor_unit, valor_mo, quant, id_o_s, id_plano_pagto, id_forma_pagto, id_servico) VALUES
('Reparo de microondas', 150.00, 50.00, 1, 1, 1, 1, 1),
('Manutenção de geladeira', 200.00, 100.00, 1, 2, 2, 2, 2),
('Reparo de fogão', 180.00, 90.00, 1, 3, 3, 3, 3),
('Assistência em lava roupas', 220.00, 110.00, 1, 4, 4, 4, 4),
('Serviço em televisão', 250.00, 125.00, 1, 5, 5, 5, 5);

-- Inserindo valores na tabela Acessorio_OS
INSERT INTO Acessorio_OS (id_acessorio, id_o_s) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Inserindo valores na tabela Faturamento
INSERT INTO Faturamento (id_venda, id_forma_pagto) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

INSERT INTO Marca (desc_marca) VALUES ('ELETROLUX'), ('BRASTEMP'),('PANASONIC'),('PHILCO'),('CONSUL'),('FISCHER'),('LG'),('SHARP'),('SAMSUNG'),('CCE'),('MIDEA'),('SANYO');
