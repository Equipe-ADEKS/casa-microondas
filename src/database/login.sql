--  DROP DATABASE CASA_MICROONDAS_LOGIN;
CREATE DATABASE CASA_MICROONDAS_LOGIN;

USE CASA_MICROONDAS_LOGIN;

CREATE TABLE Pessoa (
	id_pessoa INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	documento_principal VARCHAR(100) NOT NULL,
	documento_secundario VARCHAR(100),
	nome_pessoa VARCHAR(100),
	id_filial INTEGER NOT NULL
);

CREATE TABLE Telefone (
	id_telefone INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	tipo_telefone BOOLEAN,
	num_tel VARCHAR(10) NOT NULL,
	ddd VARCHAR(3) NOT NULL DEFAULT '041',
	cod_area VARCHAR(4) NOT NULL DEFAULT '+55',
	id_pessoa INTEGER NOT NULL
);

CREATE TABLE Email (
	id_email INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	desc_email VARCHAR(200) NOT NULL,
	id_pessoa INTEGER NOT NULL
);

CREATE TABLE Endereco (
	id_endereco INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	tipo_endereco VARCHAR(100),
	cep VARCHAR(9) NOT NULL,
	rua VARCHAR(100) NOT NULL,
	bairro VARCHAR(100) NOT NULL,
	logradouro VARCHAR(100) NOT NULL,
	cidade VARCHAR(100) NOT NULL DEFAULT 'Curitiba',
	numero INTEGER NOT NULL,
	complemento VARCHAR(200),
	observacao VARCHAR(200),
	id_pessoa INTEGER NOT NULL
);

CREATE TABLE Filial (
	id_filial INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nome_filial VARCHAR(100)
);

CREATE TABLE Fornecedor (
	id_fornecedor INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	data_cadastro_fornecedor DATE,
	id_pessoa INTEGER NOT NULL
);

CREATE TABLE Funcionario (
	id_funcionario INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	data_adm DATE,
	data_demi DATE,
	funcao VARCHAR(200),
	id_departamento INTEGER NOT NULL,
    id_pessoa INTEGER NOT NULL,
	id_filial INTEGER NOT NULL
);

CREATE TABLE Departamento (
	id_departamento INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	desc_departamento VARCHAR(100)
);

CREATE TABLE Cliente (
	id_cliente INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nome_fonetico VARCHAR(100),
	data_cadastro_cliente DATE,
	data_atualizacao DATE,
	id_pessoa INTEGER NOT NULL
);

CREATE TABLE Usuario (
	id_usuario INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	tipo_usuario VARCHAR(100),
	desc_senha VARCHAR(10),
	id_cliente INTEGER NOT NULL,
	id_funcionario INTEGER NOT NULL
);

ALTER TABLE Pessoa ADD CONSTRAINT fk_pessoa_filial
FOREIGN KEY (id_filial) REFERENCES Filial(id_filial);

ALTER TABLE Funcionario ADD CONSTRAINT fk_funcionario_filial
FOREIGN KEY (id_filial) REFERENCES Filial(id_filial);

ALTER TABLE Funcionario ADD CONSTRAINT fk_funcionario_pessoa
FOREIGN KEY (id_pessoa) REFERENCES Pessoa(id_pessoa);

ALTER TABLE Funcionario ADD CONSTRAINT fk_funcionario_departamento
FOREIGN KEY (id_departamento) REFERENCES Departamento(id_departamento);

ALTER TABLE Telefone ADD CONSTRAINT fk_telefone_pessoa
FOREIGN KEY (id_pessoa) REFERENCES Pessoa(id_pessoa);

ALTER TABLE Email ADD CONSTRAINT fk_email_pessoa
FOREIGN KEY (id_pessoa) REFERENCES Pessoa(id_pessoa);

ALTER TABLE Endereco ADD CONSTRAINT fk_endereco_pessoa
FOREIGN KEY (id_pessoa) REFERENCES Pessoa(id_pessoa);

ALTER TABLE Fornecedor ADD CONSTRAINT fk_fornecedor_pessoa
FOREIGN KEY (id_pessoa) REFERENCES Pessoa(id_pessoa);

ALTER TABLE Cliente ADD CONSTRAINT fk_cliente_pessoa
FOREIGN KEY (id_pessoa) REFERENCES Pessoa(id_pessoa);

ALTER TABLE Usuario ADD CONSTRAINT fk_usuario_cliente
FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente);

ALTER TABLE Usuario ADD CONSTRAINT fk_usuario_funcionario
FOREIGN KEY (id_funcionario) REFERENCES Funcionario(id_funcionario);
