-- DROP DATABASE CASA_MICROONDAS_LOGIN;
use CASA_MICROONDAS_LOGIN;

DELIMITER #

create procedure SP_Ins_Marca(
    in descricao varchar(100),
    in url_marca varchar(100),
    in logo varchar(100),
    in flag boolean,
    out message varchar(50)
)

begin 
  -- verificar se a marca já existe
  if (exists (select desc_marca 
            from Marca 
            where desc_marca = descricao))
            then
    set message = 'Essa marca já existe no banco de dados';
  else
    insert into Marca (desc_marca, logo_marca, url_marca, fl_marca)
    values(descricao, logo, url, flag);
    set message = 'Marca inserida com sucessso';
  end if;
end #

CREATE PROCEDURE sp_ins_tipo_produto (
IN descricao VARCHAR(100),
OUT message VARCHAR(50)
)
BEGIN
	IF (EXISTS (SELECT desc_tipo 
				FROM TipoProduto 
				WHERE desc_tipo = descricao))
	THEN
		SET message = 'Esse produto já existe';
	ELSE
		INSERT INTO TipoProduto (desc_tipo) 
				VALUES (descricao);
		SET message = 'Produto inserido com sucesso';
	END IF;
END #

CREATE PROCEDURE sp_ins_modelo ( 
	IN descricao VARCHAR(100),
    OUT message VARCHAR(50)
) 
BEGIN
	IF (EXISTS (SELECT desc_modelo 
		FROM Modelo 
		WHERE desc_modelo = descricao))
		THEN
		SET message = 'Esse modelo já existe';
	ELSE
		INSERT INTO Modelo (desc_modelo) VALUES (descricao);
		SET message = 'Modelo inserido com sucesso';
	END IF;

END #


-- DROP PROCEDURE Sp_Ed_Servico;





CREATE PROCEDURE Sp_Ins_Servico (
    OUT id INTEGER,
    IN titulo VARCHAR(100),
    IN descricao VARCHAR(500),
    IN img VARCHAR(100),
    IN ordem INTEGER, -- se ordem_apresentacao = 0 o serviço não será apresentado
    IN url VARCHAR(100),
    IN atv BOOLEAN,
    OUT mensagem VARCHAR(50)
)
BEGIN
	set id = null;
	IF EXISTS (select titulo_servico FROM Servico 	WHERE titulo_servico = titulo) THEN SET mensagem = 'esse serviço j aexiust' ;
    
    else
    INSERT INTO Servico ( titulo_servico, desc_servico, img_servico, ordem_apresentacao, url_servico, ativo)
    VALUES ( titulo, descricao, img, ordem, url, atv);
    set id = last_insert_id();
    set mensagem = "servico inserido";
    end if;
    
END #

DELIMITER ;



SELECT * FROM Servico;






