using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using senai_sp_medical_group_WebApi.Domains;
using senai_sp_medical_group_WebApi.Interfaces;
using senai_sp_medical_group_WebApi.Contexts;
using senai_sp_medical_group_WebApi.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace senai_sp_medical_group_WebApi.Repositories
{
    public class ConsultasRepository : IConsultaRepository
    {
        SpMedicalContext ctx = new SpMedicalContext();
        public void Atualizar(int id, Consulta consultaAtualizada)
        {
            Consulta consultaBuscado = ctx.Consultas.Find(id);

            if(consultaBuscado.DescricaoConsulta != null || consultaBuscado.DataConsulta != null || consultaBuscado.HroConsulta != null || consultaBuscado.IdStatusConsulta != null)
            {
                consultaBuscado.DescricaoConsulta = consultaAtualizada.DescricaoConsulta;
                consultaBuscado.DataConsulta = consultaAtualizada.DataConsulta;
                consultaBuscado.HroConsulta = consultaAtualizada.HroConsulta;
                consultaBuscado.IdStatusConsulta = consultaAtualizada.IdStatusConsulta;
            }

            ctx.Consultas.Update(consultaBuscado);

            ctx.SaveChanges();
        }

        public void Cadastrar(Consulta novaConsulta)
        {
            ctx.Consultas.Add(novaConsulta);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Consulta consultaDesejada = ctx.Consultas.Find(id);

            ctx.Consultas.Remove(consultaDesejada);

            ctx.SaveChanges();
        }

        public List<Consulta> ListarTodos()
        {
            return ctx.Consultas
                .Include(c => c.IdMedicoNavigation)
                .Include(c => c.IdPacienteNavigation)
                .Include(c => c.IdStatusConsultaNavigation)
                .ToList();
        }

        public void AtualizarDescricao(int id, ConsultaViewModel atualizarDescricao)
        {
            Consulta consultaBuscada = ctx.Consultas.Find(id);

            if (atualizarDescricao.DescricaoConsulta != null)
            {
                consultaBuscada.DescricaoConsulta = atualizarDescricao.DescricaoConsulta;
            }

            ctx.Consultas.Update(consultaBuscada);

            ctx.SaveChanges();
        }


        public void AtualizarStatus(int id, int idStatus)
        {
            Consulta consultaBuscada = ctx.Consultas.Find(id);

            if (consultaBuscada.IdStatusConsulta != null)
            {
                consultaBuscada.IdStatusConsulta = idStatus;
            }

            ctx.Consultas.Update(consultaBuscada);

            ctx.SaveChanges();
        }

        public List<Consulta> ListarConsultasM(int id)
        {
            Medico medico = ctx.Medicos
             .FirstOrDefault(m => m.IdUsuario == id);

            return ctx.Consultas
                 .Include(c => c.IdPacienteNavigation)
                 .Include(c => c.IdStatusConsultaNavigation)
                 .Include(c => c.IdMedicoNavigation)
                .Where(c => c.IdMedico == medico.IdMedico)
                .ToList();
        }

        public List<Consulta> ListarConsultasP(int id)
        {
            Paciente paciente = ctx.Pacientes.FirstOrDefault(m => m.IdUsuario == id);


            return ctx.Consultas
                 .Include(c => c.IdPacienteNavigation)
                 .Include(c => c.IdStatusConsultaNavigation)
                 .Include(c => c.IdMedicoNavigation)
                 .Include(c => c.IdMedicoNavigation.IdEspecialidadeNavigation)
                 .Where(c => c.IdPaciente == paciente.IdPaciente)
                 .ToList();
        }

    }
}
