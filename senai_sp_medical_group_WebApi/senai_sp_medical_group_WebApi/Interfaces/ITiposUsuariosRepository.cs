using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using senai_sp_medical_group_WebApi.Domains;

namespace senai_sp_medical_group_WebApi.Interfaces
{
    interface ITiposUsuariosRepository
    {
        List<TiposUsuario> ListarTodos();

        void Cadastrar(TiposUsuario novoTipoUsuario);

        void Atualizar(int id, TiposUsuario tiposUsuarioAtualizado);

        void Deletar(int id);
    }
}
