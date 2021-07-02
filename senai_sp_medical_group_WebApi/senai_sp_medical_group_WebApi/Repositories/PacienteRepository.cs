using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using senai_sp_medical_group_WebApi.Domains;
using senai_sp_medical_group_WebApi.Interfaces;
using senai_sp_medical_group_WebApi.Contexts;
using Microsoft.EntityFrameworkCore;

namespace senai_sp_medical_group_WebApi.Repositories
{
    public class PacienteRepository : IPacienteRepository
    {
        SpMedicalContext ctx = new SpMedicalContext();
        public void Atualizar(int id, Paciente pacienteAtualizado)
        {
            Paciente pacienteBuscado = ctx.Pacientes.Find(id);

            if(pacienteBuscado.NomePaciente != null)
            {
                pacienteBuscado.NomePaciente = pacienteAtualizado.NomePaciente;
            }

            ctx.Pacientes.Update(pacienteBuscado);

            ctx.SaveChanges();
        }

        public void Cadastrar(Paciente novoPaciente)
        {
            ctx.Pacientes.Add(novoPaciente);

            ctx.SaveChanges(); 
        }

        public void Deletar(int id)
        {
            Paciente pacienteBuscado = ctx.Pacientes.Find(id);

            ctx.Pacientes.Remove(pacienteBuscado);

            ctx.SaveChanges();
        }

        public List<Paciente> ListarTodos()
        {
            return ctx.Pacientes
                 .Include(p => p.IdUsuarioNavigation)
                 .Select(p => new Paciente
                 {
                     IdUsuario = p.IdUsuario,
                     IdPaciente = p.IdPaciente,
                     NomePaciente = p.NomePaciente
                  
                 })

                 .ToList();

        }
    }
}
