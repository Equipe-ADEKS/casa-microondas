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
















