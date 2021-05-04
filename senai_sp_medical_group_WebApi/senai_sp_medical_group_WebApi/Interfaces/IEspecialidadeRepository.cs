using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using senai_sp_medical_group_WebApi.Domains;

namespace senai_sp_medical_group_WebApi.Interfaces
{
    interface IEspecialidadeRepository
    {
        List<Especialidade> ListarTodos();

        void Cadastrar(Especialidade novaEspecialidade);

        void Atualizar(int id, Especialidade especialidadeAtualizada);

        void Deletar(int id);
    }
}
