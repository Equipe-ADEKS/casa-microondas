DELIMITER #
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
	END IF;
	 Set mensagem = 'Operação realizada com sucesso';
end #


CREATE PROCEDURE Sp_Ed_Servico(
    IN id_servico INT,
    IN titulo_servico VARCHAR(100),
    IN desc_servico VARCHAR(500),
    IN img_servico VARCHAR(100),
    IN ativo BOOLEAN,
    IN oper CHAR(1),
    IN ordem_apresentacao INT,   -- Adicionado novo parâmetro
    IN url_servico VARCHAR(100), -- Adicionado novo parâmetro
    OUT mensagem VARCHAR(50)
)
BEGIN
    -- Verifica se a operação é de atualização (U)
    IF (oper = 'U') THEN
        -- Atualiza o serviço com os novos valores
        UPDATE Servico 
        SET 
            titulo_servico = titulo_servico,
            desc_servico = desc_servico,
            img_servico = img_servico,
            ativo = ativo,
            ordem_apresentacao = ordem_apresentacao,
            url_servico = url_servico
        WHERE id_servico = id_servico;

        -- Desativa o serviço (definindo ativo como FALSE)
        UPDATE Servico 
        SET ativo = FALSE
        WHERE id_servico = id_servico;
    END IF;

    -- Define a mensagem de sucesso
    SET mensagem = 'Operação realizada com sucesso';
END #



DELIMITER ;


SELECT * FROM Servico;