using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using senai_sp_medical_group_WebApi.Domains;
using senai_sp_medical_group_WebApi.Interfaces;
using senai_sp_medical_group_WebApi.Contexts;

namespace senai_sp_medical_group_WebApi.Repositories
{
    public class TiposUsuarioRepository : ITiposUsuariosRepository
    {
        SpMedicalContext ctx = new SpMedicalContext();

        public void Atualizar(int id, TiposUsuario tiposUsuarioAtualizado)
        {
            TiposUsuario tipoBuscado = ctx.TiposUsuarios.Find(id);

            if(tipoBuscado.Nome != null)
            {
                tipoBuscado.Nome = tiposUsuarioAtualizado.Nome;
            }

            ctx.TiposUsuarios.Update(tipoBuscado);

            ctx.SaveChanges();
        }

        public void Cadastrar(TiposUsuario novoTipoUsuario)
        {
            ctx.TiposUsuarios.Add(novoTipoUsuario);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            TiposUsuario tipoBuscado = ctx.TiposUsuarios.Find(id);

            ctx.TiposUsuarios.Remove(tipoBuscado);

            ctx.SaveChanges();
        }

        public List<TiposUsuario> ListarTodos()
        {
            return ctx.TiposUsuarios.ToList();
        }
    }
}
