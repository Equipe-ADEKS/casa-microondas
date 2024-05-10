USE CASA_MICROONDAS_LOGIN;

CREATE TABLE Os (
	id_o_s INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	data_abertura DATE,
	descricao_problema VARCHAR(200),
	garantia VARCHAR(100),
	dia_recebimento DATE NOT NULL,
	valor_desconto FLOAT,
	valor_produto FLOAT,
	frete BOOLEAN NOT NULL,
	prazo_entrega DATE,
	id_status INTEGER NOT NULL,
	id_acessorio INTEGER NOT NULL,
	id_funcionario INTEGER NOT NULL,
	id_produto INTEGER NOT NULL
);

CREATE TABLE TBStatus (
	id_status INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	desc_status VARCHAR(100),
	tipo_status VARCHAR(100)
);

CREATE TABLE Acessorio_OS (
	id_acessorio_os INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	id_acessorio INTEGER NOT NULL,
	id_o_s INTEGER NOT NULL
);

CREATE TABLE Acessorio (
	id_acessorio INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	desc_acessorio VARCHAR(100)
);

CREATE TABLE Equipamento (
	id_equipamento INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	tamanho VARCHAR(100) NOT NULL,
	voltagem VARCHAR(100),
	observacao VARCHAR(200) NOT NULL,
    id_categoria INTEGER NOT NULL,
	id_modelo INTEGER NOT NULL,
	id_cor INTEGER NOT NULL
);

CREATE TABLE Categoria (
	id_categoria INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	desc_categoria VARCHAR(100)
);

CREATE TABLE Modelo (
	id_modelo INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	desc_modelo VARCHAR(100),
	id_marca INTEGER NOT NULL
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
	acessorio BOOLEAN,
	ft_balcao BOOLEAN,
	codigo FLOAT
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
    valor_mo FLOAT,
	quant INTEGER,
	id_o_s INTEGER NOT NULL,
    id_plano_pagto INTEGER NOT NULL,
    id_forma_pagto INTEGER NOT NULL,
	id_servico INTEGER NOT NULL
);

CREATE TABLE Servico (
	id_servico INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	desc_servico VARCHAR(200) NOT NULL,
	valor FLOAT
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

CREATE TABLE Faturamento (
	id_faturamento INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	id_venda INTEGER NOT NULL,
	id_forma_pagto INTEGER NOT NULL
);

CREATE TABLE Venda (
	id_venda INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	desconto FLOAT,
	valor_final_venda FLOAT NOT NULL,
	id_plano_pagto INTEGER NOT NULL
);

ALTER TABLE Os ADD CONSTRAINT fk_os_status
FOREIGN KEY (id_status) REFERENCES TBStatus(id_status);

ALTER TABLE Os ADD CONSTRAINT fk_os_acessorio
FOREIGN KEY (id_acessorio) REFERENCES Acessorio(id_acessorio);

ALTER TABLE Os ADD CONSTRAINT fk_os_funcionario
FOREIGN KEY (id_funcionario) REFERENCES Funcionario(id_funcionario);

ALTER TABLE Acessorio_OS ADD CONSTRAINT fk_acessorioos_acessorio
FOREIGN KEY (id_acessorio) REFERENCES Acessorio(id_acessorio);

ALTER TABLE Acessorio_OS ADD CONSTRAINT fk_acessorioos_os
FOREIGN KEY (id_o_s) REFERENCES Os(id_o_s);

ALTER TABLE Os_Servico ADD CONSTRAINT fk_osservico_planopagto
FOREIGN KEY (id_plano_pagto) REFERENCES Plano_Pagamento(id_plano_pagto);

ALTER TABLE Os_Servico ADD CONSTRAINT fk_osservico_formapagto
FOREIGN KEY (id_forma_pagto) REFERENCES Forma_Pagamento(id_forma_pagto);

ALTER TABLE Equipamento ADD CONSTRAINT fk_equipamento_categoria
FOREIGN KEY (id_categoria) REFERENCES Categoria(id_categoria);

ALTER TABLE Equipamento ADD CONSTRAINT fk_equipamento_modelo
FOREIGN KEY (id_modelo) REFERENCES Modelo(id_modelo);

ALTER TABLE Equipamento ADD CONSTRAINT fk_equipamento_cor
FOREIGN KEY (id_cor) REFERENCES Cor(id_cor);

ALTER TABLE Os ADD CONSTRAINT fk_os_produto
FOREIGN KEY (id_produto) REFERENCES Produto(id_produto);

ALTER TABLE Modelo ADD CONSTRAINT fk_modelo_marca
FOREIGN KEY (id_marca) REFERENCES Marca(id_marca);

ALTER TABLE Itens_Vendidos ADD CONSTRAINT fk_itensvendidos_produto
FOREIGN KEY (id_produto) REFERENCES Produto(id_produto);

ALTER TABLE Itens_Vendidos ADD CONSTRAINT fk_itensvendidos_venda
FOREIGN KEY (id_venda) REFERENCES Venda(id_venda);

ALTER TABLE Os_Servico ADD CONSTRAINT fk_osservico_os
FOREIGN KEY (id_o_s) REFERENCES Os(id_o_s);

ALTER TABLE Os_Servico ADD CONSTRAINT fk_osservico_servico
FOREIGN KEY (id_servico) REFERENCES Servico(id_servico);

ALTER TABLE Faturamento ADD CONSTRAINT fk_faturamento_formapagto
FOREIGN KEY (id_forma_pagto) REFERENCES Forma_Pagamento(id_forma_pagto);

ALTER TABLE Faturamento ADD CONSTRAINT fk_faturamento_venda
FOREIGN KEY (id_venda) REFERENCES Venda(id_venda);

ALTER TABLE Venda ADD CONSTRAINT fk_venda_planopagto
FOREIGN KEY (id_plano_pagto) REFERENCES Plano_Pagamento(id_plano_pagto);
