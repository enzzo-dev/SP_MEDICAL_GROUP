
USE SPMG;
INSERT INTO TiposUsuarios(Nome)
VALUES ('Administrador'),('Médico'),('Paciente');


--INSERINDO DADOS NA TABELA DOS USUÁRIOS
INSERT INTO Usuarios (IdTipoUsuario,IdEspecialidade,Nome,Email,Senha)
VALUES (1,1,'Admin','adm@email.com','adm123')
       ,(2,6,'Saulo','Saulo@email.com','saulo123')
	   ,(2,3,'Aricia','Aricia@email.com','aricia123')
	   ,(3,1,'Cauã','Caua@email.com','caua123')
	   ,(3,1,'Ellen','Ellen@email.com','ellen123')


--INSERINDO DADOS NA TABELA DE ESPECIALIDADES
INSERT INTO Especialidades(DescricaoEspec)
VALUES('Nenhuma'),('Dentista'),('Cardiologista'),('Dermatologista'),('Nutricionista'),('Pediatra');


--INSERINDO DADOS DENTRO DA TABELA DE CLÍNICAS
INSERT INTO Clinica(NomeFantasia,Cnpj,HroFuncionamento,Endereco,RazaoSocial)
VALUES ('Clínica de Odontologia',435678092,'07:00 ás 20:00','Rua São Sebastião, 542','OdontoOperações')
	   ,('Hospital de Cardiologia',213457854,'06:30 ás 00:00','Rua Alamada Barão, 890','HeartsBroken')
	   ,('Clínica de Pediatria',365632323,'8:00 ás 20:40','Rua Barão de Lima, 998','PediatraTatuapé');


--INSERINDO DADOS NA TABELA DE STATUS DA CONSULTA
INSERT INTO StatusConsulta(DescricaoStatus)
VALUES ('Agendada'),('Confirmada'),('Cancelada');

INSERT INTO Medicos(IdUsuario,NomeMedico)
VALUES (2,'Saulo')
       ,(3,'Aricia');

delete from Medicos;

INSERT INTO Pacientes(IdUsuario,NomePaciente)
VALUES (4,'Cauã')
       ,(5,'Ellen');

DELETE FROM Pacientes;

INSERT INTO Consultas(IdPaciente,IdMedico,IdStatusConsulta,DataConsulta,HroConsulta,DescricaoConsulta)
VALUES (1,1,1,'20/07/2021','16:00','Consulta para verificação de normalidade')
	   ,(2,2,2,'13/03/2021','8:00','Análise de examos pedidos do lado direito do coração!');

DELETE FROM Consultas
DELETE FROM Pacientes;


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
