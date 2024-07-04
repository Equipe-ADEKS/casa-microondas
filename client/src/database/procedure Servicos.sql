use CASA_MICROONDAS_LOGIN;

DELIMITER #

create procedure Sp_Ed_Servico(
 
	out id_servico int,
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

-- drop procedure Sp_Ins_Servico;
CREATE PROCEDURE Sp_Ins_Servico (
    out id INTEGER,
    IN titulo VARCHAR(100),
    IN descricao VARCHAR(500),
    IN img VARCHAR(100),
    IN ordem INTEGER, -- se ordem_apresentacao = 0 o serviço não será apresentado
    IN url VARCHAR(100),
    in atv boolean,
    out mensagem varchar(100)
)
BEGIN
    -- verificar se o serviço existe
    IF EXISTS    (SELECT    titulo_servico
                FROM     Servico
                WHERE    titulo_servico = titulo) THEN
        SET mensagem = 'Esse serviço já existe no banco de dados';
        SET id = NULL; -- ou qualquer valor que indique que não houve inserção
    ELSE
        INSERT INTO servico    (titulo_servico,
                            desc_servico,
                            img_servico,
                            ordem_apresentacao,
                            url_servico,
                            ativo)
            VALUES     (titulo,
                    descricao,
                    img,
                    ordem,
                    url,
                    ativo);
        SET id = LAST_INSERT_ID();
        SET mensagem = 'servico inserido com sucesso';
    END IF;
END #
DELIMITER ;


CALL Sp_Ins_Servico(@id, 'Conserto', 'Breve descrição', 'imagem.jpg', 1, 'http://exemplo.com/servico', 1, @mensagem);

select * from Servico;