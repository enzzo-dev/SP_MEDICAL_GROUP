using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using senai_sp_medical_group_WebApi.Domains;
using senai_sp_medical_group_WebApi.ViewModels;

namespace senai_sp_medical_group_WebApi.Interfaces
{
    interface IConsultaRepository
    {
        List<Consulta> ListarTodos();

        List<Consulta> ListarConsultas(string id);

        void Cadastrar(Consulta novaConsulta);

        void Atualizar(int id, Consulta consultaAtualizada);

        void AtualizarStatus(int id, int idStatus);

        void AtualizarDescricao(int id, ConsultaViewModel atualizarDescricao);

        void Deletar(int id);
    }
}
