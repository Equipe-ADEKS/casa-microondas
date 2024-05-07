DROP DATABASE CASA_MICROONDAS;
CREATE DABASE CASA_MICROONDAS;

USE CASA_MICROONDAS;

CREATE TABLE Os (
	id_o_s INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	data_abertura DATE,
	descricao_problema VARCHAR(200),
	acessorio VARCHAR(200),
	garantia VARCHAR(100),
	valor_mo FLOAT,
	valor_desconto FLOAT,
	valor_produto FLOAT,
	prazo_entrega DATE NOT NULL,
	id_status INTEGER NOT NULL,
	id_acessorio INTEGER NOT NULL,
	id_funcionario INTEGER NOT NULL,
	id_filial INTEGER NOT NULL,
	id_produto INTEGER NOT NULL
);

CREATE TABLE Status (
	id_status INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	desc_status VARCHAR(100),
	tipo_status VARCHAR(100)
);

CREATE TABLE Acessorio (
	id_acessorio INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	desc_acessorio VARCHAR(100),
);

CREATE TABLE Categoria (
	id_categoria INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	desc_categoria VARCHAR(100)
);

CREATE TABLE Microondas (
	id_microondas INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	tamanho VARCHAR(100) NOT NULL,
	voltagem BOOLEAN(3),
	observacao VARCHAR(200) NOT NULL,
	dia_recebimento DATE NOT NULL,
	frete BOOLEAN(3) NOT NULL,
	id_modelo INTEGER NOT NULL,
	id_status BOOLEAN
);

CREATE TABLE Modelo (
	id_modelo INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	desc_modelo VARCHAR(100),
	id_marca INTEGER NOT NULL,
	id_cor INTEGER NOT NULL
);

CREATE TABLE Marca (
	id_marca INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	desc_marca VARCHAR(100) NOT NULL
);

CREATE TABLE Cor (
	id_cor INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	desc_cor VARCHAR(100) NOT NULL
);

CREATE TABLE Tipo_Atendimento (
	id_tipo_atendimento INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	desc_tipo_atendimento VARCHAR(100)
);

CREATE TABLE Produto (
	id_produto INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	desc_produto VARCHAR(100) NOT NULL,
	quant_produto INTEGER NOT NULL,
	valor_custo FLOAT,
	valor_venda FLOAT,
	data_cadastro DATE,
	quant_min FLOAT,
	quant_estoque FLOAT,
	acessorio,
	ft_balcao,
	codigo FLOAT,
	unidade BOOLEAN,
	id_filial INTEGER,
	id_status BOOLEAN
);

CREATE TABLE Itens_Vendidos (
	id_itens_vendidos INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	total_itens_vendidos FLOAT,
	id_produto INTEGER NOT NULL,
	id_venda INTEGER NOT NULL
);

CREATE TABLE Os_Servico (
	id_registro INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	desc_os_servico VARCHAR(200),
	valor_unit FLOAT,
	quant INTEGER,
	id_o_s INTEGER NOT NULL
);

CREATE TABLE Plano_Pagamento (
	id_plano_pagto INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	desc_plano_pagto VARCHAR(100),
	parcelas INTEGER NOT NULL,
	juros FLOAT
);

CREATE TABLE Forma_Pagamento (
	id_forma_pagto INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	desc_forma_pagto VARCHAR(100)
);

CREATE TABLE Venda (
	id_venda INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	desconto FLOAT,
	valor_final_venda FLOAT NOT NULL
);

ALTER TABLE Os ADD CONSTRAINT fk_os_status
FOREIGN KEY (id_status) REFERENCES Status(id_status);

ALTER TABLE Os ADD CONSTRAINT fk_os_acessorio
FOREIGN KEY (id_acessorio) REFERENCES Acessorio(id_acessorio);

ALTER TABLE Os ADD CONSTRAINT fk_os_funcionario
FOREIGN KEY (id_funcionario) REFERENCES Funcionarioid_funcionario);

ALTER TABLE Os ADD CONSTRAINT fk_os_filial
FOREIGN KEY (id_filial) REFERENCES Filial(id_filial);

ALTER TABLE Microondas ADD CONSTRAINT fk_microondas_modelo
FOREIGN KEY (id_modelo) REFERENCES Modelo(id_modelo);

ALTER TABLE Microondas ADD CONSTRAINT fk_microondas_status
FOREIGN KEY (id_status) REFERENCES Status(id_status);

ALTER TABLE Os ADD CONSTRAINT fk_os_produto
FOREIGN KEY (id_produto) REFERENCES Produto(id_produto);

ALTER TABLE Modelo ADD CONSTRAINT fk_modelo_marca
FOREIGN KEY (id_marca) REFERENCES Marca(id_marca);

ALTER TABLE Modelo ADD CONSTRAINT fk_modelo_cor
FOREIGN KEY (id_cor) REFERENCES Cor(id_cor);

ALTER TABLE Produto ADD CONSTRAINT fk_produto_filial
FOREIGN KEY (id_filial) REFERENCES Filial(id_filial);

ALTER TABLE Produto ADD CONSTRAINT fk_produto_status
FOREIGN KEY (id_status) REFERENCES Status(id_status);

ALTER TABLE Itens_Vendidos ADD CONSTRAINT fk_itens-vendidos_produto
FOREIGN KEY (id_produto) REFERENCES Produto(id_produto);

ALTER TABLE Itens_Vendidos ADD CONSTRAINT fk_itens-vendidos_venda
FOREIGN KEY (id_venda) REFERENCES Venda(id_venda);

ALTER TABLE Os_Servico ADD CONSTRAINT fk_os-servico_os
FOREIGN KEY (id_o_s) REFERENCES Os(id_o_s);
