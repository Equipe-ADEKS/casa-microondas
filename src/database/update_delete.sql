-- DROP DATABASE CASA_MICROONDAS_LOGIN;
use CASA_MICROONDAS_LOGIN;

DELIMITER #

create procedure SP_Ins_Marca(
	out id integer,
    in descricao varchar(100),
    in url varchar(100),
    in logo	 varchar(100),
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
    insert into Marca (desc_marca, logo_marca, url_marca, ativo )
    values(descricao, logo, url, flag);
    set message = 'Marca inserida com sucessso';
  end if;
end #



CREATE PROCEDURE Sp_Ed_Marca (
 IN id INTEGER,
 IN descricao VARCHAR(100),
 IN url varchar(100),
 IN oper CHAR(1),
 IN atv BOOLEAN,
 INOUT mensagem VARCHAR(50)
)
BEGIN
    IF (oper = 'U') THEN
      UPDATE Tipo_Produto
      SET desc_tipo = descricao,
          ativo = atv
      WHERE id_tipo = id;
	ELSE 
      UPDATE Tipo_Produto
      SET ativo = FALSE
      WHERE id_tipo = id;
	END IF;
	
    SET mensagem = 'Operação realizada com sucesso';
END #

DELIMITER ;

CALL Sp_Ins_Marca(@id, 'marca1', 'marca.com.br', 'logoBrastem.com.br',  1, @mensagem);

select * from Marca;








<<<<<<< HEAD
=======

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
>>>>>>> fefe0a92cdddba52b468edcf3968518f91f91056

DELIMITER ;



SELECT * FROM Servico;






