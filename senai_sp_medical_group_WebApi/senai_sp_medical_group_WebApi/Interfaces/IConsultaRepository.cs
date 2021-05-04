using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using senai_sp_medical_group_WebApi.Domains;

namespace senai_sp_medical_group_WebApi.Interfaces
{
    interface IConsultaRepository
    {
        List<Consulta> ListarTodos();

        void Cadastrar(Consulta novaConsulta);

        void Atualizar(int id, Consulta consultaAtualizada);

        void Deletar(int id);
    }
}
