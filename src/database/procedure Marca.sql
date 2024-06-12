use CASA_MICROONDAS_LOGIN;

DELIMITER #

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

CREATE PROCEDURE Sp_Ed_Tipo_Produto (
 IN id INTEGER,
 IN descricao VARCHAR(100),
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