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

create procedure Sp_Ed_Servico(
 
	IN id_servico int,
	IN titulo_servico varchar(100),
	IN desc_servico varchar(500),
	IN img_servico varchar(100),
	IN ativo boolean,
	IN oper char(1),
	OUT mensagem varchar(50))
 
 begin
if (oper = "U") then
update Servico 
	set titulo_servico = TIT,
	desc_servico = DS,
	img_servico = IMG,
	ativo = atv,
    ordem_apresentacao = ordem,
    url_servico = url
	where id_servico = id;
UPDATE Servico 
SET ativo = FALSE
WHERE id_servico = id;
end if;
set mensagem = 'Operação realidada com sucesso';

end #


CREATE PROCEDURE Sp_Ins_Servico (
    IN id INTEGER,
    IN titulo VARCHAR(100),
    IN descricao VARCHAR(500),
    IN img VARCHAR(100),
    IN ordem INTEGER, -- se ordem_apresentacao = 0 o serviço não será apresentado
    IN url VARCHAR(100)
)
BEGIN
    INSERT INTO Servico (id_servico, titulo_servico, desc_servico, img_servico, ordem_apresentacao, url_servico)
    VALUES (id, titulo, descricao, img, ordem, url);
END #








