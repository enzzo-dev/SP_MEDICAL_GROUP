using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using senai_sp_medical_group_WebApi.Interfaces;
using senai_sp_medical_group_WebApi.Contexts;
using senai_sp_medical_group_WebApi.Domains;

namespace senai_sp_medical_group_WebApi.Repositories
{
    public class ClinicaRepository : IClinicaRepository
    {
        SpMedicalContext ctx = new SpMedicalContext();
        public void Atualizar(int id, Clinica clinicaAtualizada)
        {
            Clinica clinicaDesejada = ctx.Clinicas.Find(id);

            if(clinicaDesejada.NomeFantasia != null)
            {
                clinicaDesejada.NomeFantasia = clinicaAtualizada.NomeFantasia;
            }

            ctx.Clinicas.Update(clinicaDesejada);

            ctx.SaveChanges();
        }

        public void Cadastrar(Clinica novaClinica)
        {
            ctx.Clinicas.Add(novaClinica);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Clinica clinicaBuscada = ctx.Clinicas.Find(id);

            ctx.Clinicas.Remove(clinicaBuscada);

            ctx.SaveChanges();
        }

        public List<Clinica> ListarTodos()
        {
            return ctx.Clinicas.ToList();
        }
    }
}
