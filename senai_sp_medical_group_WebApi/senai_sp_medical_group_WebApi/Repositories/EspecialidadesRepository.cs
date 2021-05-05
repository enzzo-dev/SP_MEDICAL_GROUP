using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using senai_sp_medical_group_WebApi.Domains;
using senai_sp_medical_group_WebApi.Interfaces;
using senai_sp_medical_group_WebApi.Contexts;

namespace senai_sp_medical_group_WebApi.Repositories
{
    public class EspecialidadesRepository : IEspecialidadeRepository
    {
        SpMedicalContext ctx = new SpMedicalContext();
        public void Atualizar(int id, Especialidade especialidadeAtualizada)
        {
            Especialidade especialidadeBuscado = ctx.Especialidades.Find(id);

            if(especialidadeBuscado.DescricaoEspec != null)
            {
                especialidadeBuscado.DescricaoEspec = especialidadeAtualizada.DescricaoEspec;
            }

            ctx.Especialidades.Update(especialidadeBuscado);

            ctx.SaveChanges();
        }

        public void Cadastrar(Especialidade novaEspecialidade)
        {
            ctx.Especialidades.Add(novaEspecialidade);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Especialidade especialidadeBuscado = ctx.Especialidades.Find(id);

            ctx.Especialidades.Remove(especialidadeBuscado);

            ctx.SaveChanges();
        }

        public List<Especialidade> ListarTodos()
        {
            return ctx.Especialidades.ToList();
        }
    }
}
