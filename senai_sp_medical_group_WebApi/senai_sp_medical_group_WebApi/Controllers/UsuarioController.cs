using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using senai_sp_medical_group_WebApi.Domains;
using senai_sp_medical_group_WebApi.Interfaces;
using senai_sp_medical_group_WebApi.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai_sp_medical_group_WebApi.Controllers
{
    //Tipo de resposta de API
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        /// <summary>
        /// O objeto _usuarioRepository recebe todos os métodos criados na interface
        /// </summary>
        private IUsuarioRepository _usuarioRepository { get; set; }

        /// <summary>
        /// Instancia o objeto _usuarioRepossitoey para que haja a referência aos métodos
        /// </summary>
        public UsuarioController()
        {
            _usuarioRepository = new UsuarioRepository();
        }

        /// <summary>
        ///Lista todos os tipos de usuários cadastrados no sistema
        /// </summary>
        /// <returns>Uma lista de usuários e um status code Ok - 200</returns>
        
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                //Retorna a resposta da requisição e fazendo a chamada para o método de listar
                return Ok(_usuarioRepository.ListarTodos());
            }
            catch (Exception ex)
            {
                //Retorna a exceção/ erro e trás para o desenvolvedor o erro que foi gerado
                return BadRequest(ex);
            }
        }

        /// <summary>
        /// Método POST irá Cadastrar usuários via JSON com o POSTMAN
        /// </summary>
        /// <param name="novoUsuario">Obejto para instanciar um novo objeto usuário com todas as suas propriedades</param>
        /// <returns>Retorna um status code de 201 - está tudo certo</returns>
        [Authorize(Roles = "1")]
        [HttpPost]
        public IActionResult Post(Usuario novoUsuario)
        {
            try
            {
                _usuarioRepository.Cadastrar(novoUsuario);

                return StatusCode(201);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        /// <summary>
        /// Atualiza um usuários que já está cadastrado no sistema
        /// </summary>
        /// <param name="id">id informado para achar o usuário desejado</param>
        /// <param name="usuarioAtualizado">Objeto para armazenar as novas informações</param>
        /// <returns>Retorna um Satus code informando se tudo ocorreu bem, caso não tenha ocorrido retorna um bad request</returns>
        [Authorize(Roles = "1")]
        [HttpPut("{id}")]
        public IActionResult PutAtualizar(int id, Usuario usuarioAtualizado)
        {
            try
            {
                _usuarioRepository.Atualizar(id, usuarioAtualizado);

                return StatusCode(204);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        /// <summary>
        /// Deleta um usuário já cadastrado no sistema
        /// </summary>
        /// <param name="id">parâmetro usado para encontrar o usuário desejado</param>
        /// <returns>Deleta o usuário desejado caso você tenha permissão e um StatusCode caso dê certo, caso contrário gera um BadRequest</returns>
        [Authorize(Roles = "1")]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _usuarioRepository.Deletar(id);

                return StatusCode(204);
            }
            catch ( Exception ex)
            {

                return BadRequest(ex);
            }
        }

    }
}
