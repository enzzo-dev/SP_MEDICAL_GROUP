USE Medical_GROUP;

--INSERINDO DADOS NA TABELA DOS TIPOS DE USU�RIOS
INSERT INTO TiposUsuarios(Nome)
VALUES ('Administrador'),('M�dico'),('Usuario');


--INSERINDO DADOS NA TABELA DOS USU�RIOS
INSERT INTO Usuarios (IdTipoUsuario,Nome,Email,Senha)
VALUES (1,'Admin','adm@email.com','adm123')
       ,(2,'Saulo','Saulo@email.com','saulo123')
	   ,(2,'Caique','Caique@email.com','caique123')
	   ,(2,'Aricia','Aricia@email.com','aricia123')
	   ,(3,'Cau�','Caua@email.com','caua123')
	   ,(3,'Ellen','Ellen@email.com','ellen123')
	   ,(3,'Kleiton','Kleiton@email.com','kleiton123');


--INSERINDO DADOS NA TABELA DE ESPECIALIDADES
INSERT INTO Especialidades(DescricaoEspec)
VALUES('Dentista'),('Cardiologista'),('Dermatologista'),('Nutricionista'),('Pediatra');


--INSERINDO DADOS DENTRO DA TABELA DE CL�NICAS
INSERT INTO Clinica(NomeFantasia,Cnpj,HroFuncionamento,Endereco,RazaoSocial)
VALUES ('Cl�nica de Odontologia',435678092,'07:00 �s 20:00','Rua S�o Sebasti�o, 542','OdontoOpera��es')
	   ,('Hospital de Cardiologia',213457854,'06:30 �s 00:00','Rua Alamada Bar�o, 890','HeartsBroken')
	   ,('Cl�nica de Pediatria',365632323,'8:00 �s 20:40','Rua Bar�o de Lima, 998','PediatraTatuap�');


--INSERINDO DADOS NA TABELA DE STATUS DA CONSULTA
INSERT INTO StatusConsulta(DescricaoStatus)
VALUES ('Agendada'),('Confirmada'),('Cancelada');

INSERT INTO Medicos(IdUsuario,IdClinica,IdEspecialidade,NomeMedico,CRM)
VALUES (2,3,5,'Saulo','24575-SP')
       ,(2,2,2,'Aricia Alves','26890-SP')
	   ,(2,1,1,'Caique','36012-SP');

INSERT INTO Pacientes(IdUsuario,NomePaciente,RG,CPF,DataNascimento)
VALUES (3,'Cau�',482919742,29187329,'12/03/2006')
       ,(3,'Ellen',876326556,92387347,'08/06/2001')
	   ,(3,'Kleiton',237532847,928325232,'18/09/2000');

INSERT INTO Consultas(IdPaciente,IdMedico,IdStatusConsulta,DataConsulta,HroConsulta,DescricaoConsulta)
VALUES (1,1,1,'20/03/2021','16:00','Consulta para verifica��o de normalidade')
       ,(2,3,3,'15/03/2021','13:00','Manuten��o de aparelho fixo e limpeza')
	   ,(3,2,2,'13/03/2021','8:00','An�lise de examos pedidos do lado direito do cora��o!');