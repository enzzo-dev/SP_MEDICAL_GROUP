
USE SPMG2;
INSERT INTO TiposUsuarios(Nome)
VALUES ('Administrador'),('M�dico'),('Paciente');


--INSERINDO DADOS NA TABELA DOS USU�RIOS
INSERT INTO Usuarios (IdTipoUsuario,Nome,Email,Senha)
VALUES (1,'Admin','adm@email.com','adm123')
       ,(2,'Saulo','Saulo@email.com','saulo123')
	   ,(2,'Aricia','Aricia@email.com','aricia123')
	   ,(3,'Cau�','Caua@email.com','caua123')
	   ,(3,'Ellen','Ellen@email.com','ellen123')


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

INSERT INTO Medicos(IdUsuario,IdClinica,IdEspecialidade,NomeMedico, CRM)
VALUES (2,3,5,'Saulo','24575-SP')
       ,(3,2,2,'Aricia','26890-SP');


INSERT INTO Pacientes(IdUsuario,NomePaciente,RG,CPF,DataNascimento)
VALUES (4,'Cau�',82919742,29187329,'12/03/2006')
       ,(5,'Ellen',76320551,08294508,'08/06/2001');


INSERT INTO Consultas(IdPaciente,IdMedico,IdStatusConsulta,DataConsulta,HroConsulta,DescricaoConsulta)
VALUES (5,1,1,'20/07/2021','16:00','Consulta para verifica��o de normalidade')
	   ,(6,2,2,'13/03/2021','8:00','An�lise de examos pedidos do lado direito do cora��o!');


SELECT * FROM Consultas;
SELECT * FROM Medicos;
SELECT * FROM Usuarios;
SELECT * FROM Pacientes;
SELECT * FROM Clinica;
SELECT * FROM Especialidades;
SELECT * FROM StatusConsulta;

DROP TABLE Pacientes;

CREATE DATABASE SPMG;

CREATE TABLE TiposUsuarios
(

	IdTipoUsuario INT PRIMARY KEY IDENTITY
	,Nome VARCHAR(150) NOT NULL

);

CREATE TABLE Usuarios
(

	IdTipoUsuario INT FOREIGN KEY REFERENCES TiposUsuarios(IdTipoUsuario)
	,IdUsuario INT PRIMARY KEY IDENTITY
	,idEspecialidade INT FOREIGN KEY REFERENCES Especialidades(IdEspecialidade)
	,Nome VARCHAR(200) NOT NULL
	,Email VARCHAR(200) UNIQUE NOT NULL
	,Senha VARCHAR(250) NOT NULL

);

CREATE TABLE Especialidades
(

	IdEspecialidade INT PRIMARY KEY IDENTITY
	,DescricaoEspec VARCHAR(100) NOT NULL

);

CREATE TABLE Clinica
(

	IdClinica INT PRIMARY KEY IDENTITY
	,NomeFantasia VARCHAR(100) NOT NULL
	,Cnpj INT UNIQUE NOT NULL
	,HroFuncionamento VARCHAR(50) NOT NULL
	,Endereco VARCHAR(200) NOT NULL
	,RazaoSocial VARCHAR(100) NOT NULL

);

CREATE TABLE StatusConsulta
(

	IdStatusConsulta INT PRIMARY KEY IDENTITY
	,DescricaoStatus VARCHAR(50) NOT NULL

);

CREATE TABLE Medicos
(

	IdMedico INT PRIMARY KEY IDENTITY
	,IdUsuario INT FOREIGN KEY REFERENCES Usuarios(IdUsuario)
	,NomeMedico VARCHAR(100) NOT NULL

);

CREATE TABLE Pacientes
(

	IdPaciente INT PRIMARY KEY IDENTITY
	,IdUsuario INT FOREIGN KEY REFERENCES Usuarios(IdUsuario)
	,NomePaciente VARCHAR(100) NOT NULL
);

CREATE TABLE Consultas
(

	IdConsulta INT PRIMARY KEY IDENTITY
	,IdPaciente INT FOREIGN KEY REFERENCES Pacientes(IdPaciente)
	,IdMedico INT FOREIGN KEY REFERENCES Medicos(IdMedico)
	,IdStatusConsulta INT FOREIGN KEY REFERENCES StatusConsulta(IdStatusConsulta)
	,DataConsulta VARCHAR(100) NOT NULL
	,HroConsulta VARCHAR(50) NOT NULL
	,DescricaoConsulta VARCHAR(200)

);

USE SPMG;
