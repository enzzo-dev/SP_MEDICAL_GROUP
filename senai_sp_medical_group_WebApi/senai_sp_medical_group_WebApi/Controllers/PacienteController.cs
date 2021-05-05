using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using senai_sp_medical_group_WebApi.Domains;
using senai_sp_medical_group_WebApi.Interfaces;
using senai_sp_medical_group_WebApi.Repositories;

namespace senai_sp_medical_group_WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class PacienteController : ControllerBase
    {
        private IPacienteRepository _pacienteRepository { get; set; }

        public PacienteController()
        {
            _pacienteRepository = new PacienteRepository();
        }

        /// <summary>
        /// Método GET nos lista os pacientes que estão cadastrados na Banco de dados
        /// </summary>
        /// <returns>Retorna uma lista de pacientes e um StatusCode caso de certo</returns>
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_pacienteRepository.ListarTodos());
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        ///<summary>
        ///Método POST nos permite cadastrar um novo paciente preenchendo todos os seus dados
        /// </summary>
        /// <returns>Retorna um StatusCode caso de tudo certo</returns>
        [HttpPost]
        public IActionResult Post(Paciente novoPaciente)
        {
            try
            {
                _pacienteRepository.Cadastrar(novoPaciente);

                return StatusCode(202);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
      
        }

        /// <summary>
        /// Método PUT nos permite Atualizar os dados dos pacientes cadastrados no Banco de dados
        /// </summary>
        /// <param name="id">Parâmetro utilizado para encontrar o paciente desejado</param>
        /// <param name="pacienteAtualizado">Objeto que irá armazenar as novas informações dos pacientes</param>
        /// <returns>Retorna um StatusCode 204 caso dê tudo certo</returns>
        [HttpPut("{id}")]
        public IActionResult Put(int id, Paciente pacienteAtualizado)
        {
            try
            {
                _pacienteRepository.Atualizar(id, pacienteAtualizado);

                return StatusCode(204);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        /// <summary>
        /// Método DELETE permite o adminitrados do sistema a excluir qualquer paciente cadastrado no sistema
        /// </summary>
        /// <param name="id">Parâmetro utilizado para encontrar o paciente desejado</param>
        /// <returns>Exclui o Paciente Desejado e retorna um StatusCode - 204 caso dê tudo certo</returns>
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _pacienteRepository.Deletar(id);

                return StatusCode(204);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }
    }
}
