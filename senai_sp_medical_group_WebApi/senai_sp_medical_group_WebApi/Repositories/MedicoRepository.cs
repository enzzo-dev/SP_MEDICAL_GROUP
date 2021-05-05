using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using senai_sp_medical_group_WebApi.Domains;
using senai_sp_medical_group_WebApi.Interfaces;
using senai_sp_medical_group_WebApi.Contexts;

namespace senai_sp_medical_group_WebApi.Repositories
{
    public class MedicoRepository : IMedicoRepositorycs
    {
        SpMedicalContext ctx = new SpMedicalContext();
        public void Atualizar(int id, Medico medicoAtualizado)
        {
            Medico medicoBuscado = ctx.Medicos.Find(id);

            if(medicoBuscado.NomeMedico != null || medicoBuscado.Crm != null || medicoBuscado.IdClinica != null || medicoBuscado.IdEspecialidade != null)
            {
                medicoBuscado.NomeMedico = medicoAtualizado.NomeMedico;
                medicoBuscado.Crm = medicoAtualizado.Crm;
                medicoBuscado.IdClinica = medicoAtualizado.IdClinica;
                medicoBuscado.IdEspecialidade = medicoAtualizado.IdEspecialidade;
            }

            ctx.Medicos.Update(medicoBuscado);

            ctx.SaveChanges();
        }

        public void Cadastrar(Medico novoMedico)
        {
            ctx.Medicos.Add(novoMedico);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Medico medicoBuscado = ctx.Medicos.Find(id);

            ctx.Medicos.Remove(medicoBuscado);

            ctx.SaveChanges();
        }

        public List<Medico> ListarTodos()
        {
            return ctx.Medicos.ToList();
        }
    }
}
