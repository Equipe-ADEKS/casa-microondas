USE CASA_MICROONDAS_LOGIN;
DELIMITER #

CREATE PROCEDURE SP_Ins_Equipamento(
    IN p_tamanho VARCHAR(100),
    IN p_voltagem VARCHAR(100),
    IN p_observacao VARCHAR(200),
    IN p_id_categoria INTEGER,
    IN p_id_modelo INTEGER,
    IN p_id_cor INTEGER
)
BEGIN
    INSERT INTO Equipamento (tamanho, voltagem, observacao, id_categoria, id_modelo, id_cor)
    VALUES (p_tamanho, p_voltagem, p_observacao, p_id_categoria, p_id_modelo, p_id_cor);
END#


select * from Equipamento; 


CREATE PROCEDURE Sp_Ed_Equipamento(
    IN id INTEGER,
    IN taman VARCHAR(100),
    IN volt VARCHAR(100),
    IN obs VARCHAR(200),
    IN cate INTEGER,
    IN model INTEGER,
    IN cor INTEGER,
    IN oper CHAR(1),
    IN atv BOOLEAN,
    OUT mensagem VARCHAR(100)
)
BEGIN
    DECLARE temp_mensagem VARCHAR(100);

    IF (oper = 'U') THEN
        UPDATE Equipamento
        SET tamanho = taman,
            ativo = atv,
            voltagem = volt,
            observacao = obs
        WHERE id_equipamento = id;

        UPDATE Equipamento
        SET ativo = FALSE
        WHERE id_equipamento = id;

        SET temp_mensagem = 'Equipamento atualizado com sucesso';
    ELSE
        SET temp_mensagem = 'Operação não suportada';
    END IF;

    SET mensagem = temp_mensagem;
END #



CREATE TRIGGER trigger_ed_equipamento
AFTER INSERT ON Equipamento
FOR EACH ROW
BEGIN
    DECLARE mensagem VARCHAR(100);
    
    CALL Sp_Ed_Equipamento(
        NEW.id_equipamento,
        NEW.tamanho,
        NEW.voltagem,
        NEW.observacao,
        NEW.categoria,
        NEW.modelo,
        NEW.cor,
        'U',
        NEW.ativo,
        mensagem
    );

    -- Outras operações usando a variável 'mensagem', se necessário
    -- Por exemplo, registrar a mensagem em uma tabela de logs
    INSERT INTO Log_Equipamento (mensagem, data)
    VALUES (mensagem, NOW());
END #


DELIMITER ;






