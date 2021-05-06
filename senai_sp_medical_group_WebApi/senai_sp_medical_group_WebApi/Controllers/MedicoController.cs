using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using senai_sp_medical_group_WebApi.Domains;
using senai_sp_medical_group_WebApi.Repositories;
using senai_sp_medical_group_WebApi.Interfaces;
using Microsoft.AspNetCore.Authorization;

namespace senai_sp_medical_group_WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class MedicoController : ControllerBase
    {
        private IMedicoRepositorycs _medicoRepository { get; set; }

        public MedicoController()
        {
            _medicoRepository = new MedicoRepository();
        }

        /// <summary>
        /// Método GET que lista todos os médicos cadastrados no banco de dados
        /// </summary>
        /// <returns>Caso dê tudo certo irá retornar o StatusCode - OK - 201</returns>
        
        [Authorize(Roles = "1")]
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_medicoRepository.ListarTodos());
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        /// <summary>
        /// Método POST que permite cadastrar novos médicos no Banco de dados
        /// </summary>
        /// <param name="novoMedico"></param>
        /// <returns>Caso dê tudo certo retorna um StatusCode - 202</returns>
        
        [Authorize(Roles = "1")]
        [HttpPost]
        public IActionResult Post(Medico novoMedico)
        {
            try
            {
                _medicoRepository.Cadastrar(novoMedico);

                return StatusCode(202);
            }
            catch (Exception ex )
            {

                return BadRequest(ex);
            }
        }

        /// <summary>
        /// Método POST que permite atualizar as informações dos medicos cadastrados
        /// </summary>
        /// <param name="id">Parâmentro utilizado para identificar os médicos no banco de dados</param>
        /// <param name="medicoAtualizado">Objeto que irá armazenar as novas informações do médico desejado</param>
        /// <returns>Retorna um StatusCode - 204 caso dê tudo certo</returns>
        
        [Authorize(Roles = "1")]
        [HttpPut("{id}")]
        public IActionResult Put(int id, Medico medicoAtualizado)
        {
            try
            {
                _medicoRepository.Atualizar(id, medicoAtualizado);

                return StatusCode(204);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        /// <summary>
        /// Método DELETE permite deletar um médico cadastrado no banco de dados
        /// </summary>
        /// <param name="id">Parâmetro utilizado para encontrar o médico desejado</param>
        /// <returns>Retorna um StatusCode 204 caso dê tudo certo</returns>
        
        [Authorize(Roles = "1")]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _medicoRepository.Deletar(id);

                return StatusCode(204);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }
    }
}
