USE Medical_GROUP;

--Contar quantos usuários somente pelo id tem na tabela de usuários.
SELECT COUNT(IdUsuario) AS NúmeroDeUsuários FROM Usuarios;

--A sequência de códicos a seguir, nos o resultado dos Nomes dos médicos registrados, CRM, Especialidade e as suas respectivas clinicas
SELECT Medicos.NomeMedico AS [Médicos], Medicos.CRM AS [CRM],Especialidades.DescricaoEspec AS Especialidade, Clinica.RazaoSocial AS Clínica FROM Medicos
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
WHERE Pacientes.NomePaciente = 'Cauã';







--Todos os médicos registrados no sistema
SELECT (NomeMedico) AS [Nome dos médicos] FROM Medicos;  