INSERT INTO tiposUsuarios (Nome)
VALUES ('Administrador'),('Médico'),('Paciente');

INSERT INTO Usuarios (IdTipoUsuario, NomeUsuario, Email, Senha)
VALUES (3,'Kleiton','Kleiton@email.com','kleiton123')
	  ,(3,'Ellen','Ellen@email.com','ellen123')
	  ,(3,'Cauã','Caua@email.com','Caua123');

INSERT INTO TiposDeConsulta(TituloTipoDeConsulta)
VALUES ('Cardiologia'),('Odontologia'),('Gastrentorologia');

INSERT INTO Clinica (NomeFantasia,Cnpj,HroFuncionamento,Endereco,RazaoSocial)
VALUES ('Clínica de Odontologia',545679235,'06:00 ás 20:40','Rua São sebastião, 599', 'OdontoOperações')
	  ,('Hospital de Cardiologia',345456788,'06:30 ás 00:00','Rua Alamada Barão, 639', 'HeartsBroken')
	  ,('Clinica de Gastrenterologia',123456789,'08:00 ás 18:00','Rua Barão Lima, 430', 'GastrenterologiaClinics');

INSERT INTO Consultas (IdTipoDeConsulta,IdClinica,NomePaciente,Rg,Cpf,Endereco,DataNascimento,Telefone)
VALUES (2,10,'Cauã',111111111,222222222,'Radial Leste, 403','12/03/2006',40028922)
      ,(1,11,'Ellen',333333333,444444444,'Avenida Paulista, 852','08/06/2001',40028922)
	  ,(3,11,'Kleiton',555555555,666666666,'Rua Padre Wanderley, 780','19/08/2000',40028922);
