DELIMITER //
CREATE PROCEDURE Sp_Ed_Tipo_Produto (
 IN id INTEGER,
 IN descricao VARCHAR(100),
 IN oper CHAR(1),
 IN atv BOOLEAN,
 OUT mensagem VARCHAR(50)
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
	END IF
	/* SET mensagem = 'Operação realizada com sucesso';*/
END //

DELIMITER ;