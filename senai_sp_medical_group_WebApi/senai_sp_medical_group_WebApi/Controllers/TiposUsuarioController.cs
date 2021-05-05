using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using senai_sp_medical_group_WebApi.Interfaces;
using senai_sp_medical_group_WebApi.Domains;
using senai_sp_medical_group_WebApi.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai_sp_medical_group_WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class TiposUsuarioController : ControllerBase
    {
        private ITiposUsuariosRepository _tiposUsuariosRepository { get; set; }

        public TiposUsuarioController()
        {
            _tiposUsuariosRepository = new TiposUsuarioRepository();
        }

        /// <summary>
        /// Método Get irã listar todos os tipos de usuários cadastrados no sistema
        /// </summary>
        /// <returns>Lista de objetos em JSON, caso de tudo certo irá retornar um Ok - 202</returns>
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_tiposUsuariosRepository.ListarTodos());
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        /// <summary>
        /// Método POST possibilita o cadastro de usuários no sistema via JSON
        /// </summary>
        /// <param name="novoTipoUsuario">Parâmentro que armazena todas as informações da tabela Tipos de usuários</param>
        /// <returns>Irá retornar um StatusCode - 202</returns>
        [HttpPost]
        public IActionResult Post(TiposUsuario novoTipoUsuario)
        {
            try
            {
                _tiposUsuariosRepository.Cadastrar(novoTipoUsuario);

                return StatusCode(202);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        /// <summary>
        /// Método Put permite a atualilzação de tipos de usuáriuos já existentes no banco de dados
        /// </summary>
        /// <param name="id">Parâmetro utilizado para encontrar o usuário solicitado</param>
        /// <param name="tiposUsuariosAtualizado">Um novo objeto que irá armazenar as novas informações cadastradas</param>
        /// <returns>Irá retornar o objeto atualizado com o StatusCode de 204</returns>
        [HttpPut("{id}")]
        public IActionResult Put(int id, TiposUsuario tiposUsuariosAtualizado)
        {
            try
            {
                _tiposUsuariosRepository.Atualizar(id, tiposUsuariosAtualizado);

                return StatusCode(204);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        /// <summary>
        /// Método Delete proporciona a exclusão de um tipo de usuário já existente no banco de dados do sistema
        /// </summary>
        /// <param name="id">Parâmentro utilizados para encontrar o usuário desejado</param>
        /// <returns>Deleta o usuário e se tudo correr bem irá retornar um StatusCode de 204</returns>
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _tiposUsuariosRepository.Deletar(id);

                return StatusCode(204);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }
    }
}
