USE Medical_GROUP;

--Contar quantos usu�rios somente pelo id tem na tabela de usu�rios.
SELECT COUNT(IdUsuario) AS N�meroDeUsu�rios FROM Usuarios;

--A sequ�ncia de c�dicos a seguir, nos o resultado dos Nomes dos m�dicos registrados, CRM, Especialidade e as suas respectivas clinicas
SELECT Medicos.NomeMedico AS [M�dicos], Medicos.CRM AS [CRM],Especialidades.DescricaoEspec AS Especialidade, Clinica.RazaoSocial AS Cl�nica FROM Medicos
INNER JOIN Especialidades
ON Medicos.IdEspecialidade = Especialidades.IdEspecialidade
INNER JOIN Clinica
ON Medicos.IdClinica = Clinica.IdClinica;

--Consultar nome do paciente e suas respectivas consultas
SELECT Pacientes.NomePaciente,Medicos.NomeMedico,Consultas.DataConsulta,Consultas.HroConsulta,StatusConsulta.DescricaoStatus AS [Status],Consultas.DescricaoConsulta
FROM Consultas
INNER JOIN Pacientes
ON Pacientes.IdPaciente = Consultas.IdPaciente
INNER JOIN StatusConsulta
ON Consultas.IdStatusConsulta = StatusConsulta.IdStatusConsulta
INNER JOIN Medicos
ON Medicos.IdMedico = Consultas.IdMedico
WHERE Pacientes.NomePaciente = 'Cau�';







--Todos os m�dicos registrados no sistema
SELECT (NomeMedico) AS [Nome dos m�dicos] FROM Medicos;  