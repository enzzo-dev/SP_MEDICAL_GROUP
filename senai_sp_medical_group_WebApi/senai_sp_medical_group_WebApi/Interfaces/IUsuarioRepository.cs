using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using senai_sp_medical_group_WebApi.Domains;

namespace senai_sp_medical_group_WebApi.Interfaces
{
    interface IUsuarioRepository
    {
        /// <summary>
        /// Lista de usuáriso cadastrados no banco de dados
        /// </summary>
        /// <returns>Irá retornar uma lista de objetos com os usuários cadastrados no banco de dados</returns>
        List<Usuario> ListarTodos();

        /// <summary>
        /// Método irá criar um novo usuário no Banco de dados
        /// </summary>
        /// <param name="novoUsuario">Usuario que será cadastrados</param>
        void Cadastrar(Usuario novoUsuario);

        /// <summary>
        /// Método irá atualizar um usuário desejado e já existente
        /// </summary>
        /// <param name="id">Id para identificação dos usuários que será passado por url</param>
        /// <param name="usuarioAtualizado">váriavel que irá conter a alteração desejada</param>
        /// <returns>Irá retornar um objeto com o usuário que foi desejado a alteração</returns>
        void Atualizar(int id , Usuario usuarioAtualizado);

        /// <summary>
        /// Método irá deletar um usuário desejado que foi informado pelo id
        /// </summary>
        /// <param name="id">id que será utilizado para a identificação do usuário desejado</param>
        void Deletar(int id);

        //Método para verificação de identidade
        Usuario Login(string email, string senha);
    }
}
