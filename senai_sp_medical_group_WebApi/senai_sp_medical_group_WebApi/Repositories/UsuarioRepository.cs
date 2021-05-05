using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using senai_sp_medical_group_WebApi.Domains;
using senai_sp_medical_group_WebApi.Interfaces;
using senai_sp_medical_group_WebApi.Contexts;

namespace senai_sp_medical_group_WebApi.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        SpMedicalContext ctx = new SpMedicalContext();

        public void Atualizar(int id, Usuario usuarioAtualizado)
        {
            // Busca um usuario através do id
            Usuario usuarioBuscado = ctx.Usuarios.Find(id);

            //Verifica se o nome do usuário desejado foi encontrado
            if(usuarioBuscado.Nome != null)
            {
                //Atribui os valores encontrados aos campos existentes
                usuarioBuscado.Nome = usuarioAtualizado.Nome;
            }

            //Atualiza os usuários que foram solicitados
            ctx.Usuarios.Update(usuarioBuscado);

            //Salva as mudanças feitas 
            ctx.SaveChanges();

        }

        public void Cadastrar(Usuario novoUsuario)
        {
            ctx.Usuarios.Add(novoUsuario);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Usuario usuarioBuscado = ctx.Usuarios.Find(id);

            if(usuarioBuscado != null)
            {
                ctx.Usuarios.Remove(usuarioBuscado);

                ctx.SaveChanges();
            }

           
        }

        public List<Usuario> ListarTodos()
        {
            //Lista os usuários existentes
           return ctx.Usuarios.ToList();
        }
    }
}
