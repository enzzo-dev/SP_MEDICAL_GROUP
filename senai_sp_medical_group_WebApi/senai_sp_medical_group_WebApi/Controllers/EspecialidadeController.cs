using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using senai_sp_medical_group_WebApi.Domains;
using senai_sp_medical_group_WebApi.Interfaces;
using senai_sp_medical_group_WebApi.Repositories;
using Microsoft.AspNetCore.Authorization;

namespace senai_sp_medical_group_WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class EspecialidadeController : ControllerBase
    {
        private IEspecialidadeRepository _especialidadeRepository { get; set; }

        public EspecialidadeController()
        {
            _especialidadeRepository = new EspecialidadesRepository();
        }

        /// <summary>
        /// Método utilizado para listar todas as especialidades dos médicos cadastradas
        /// </summary>
        /// <returns>As especialidades cadastradas</returns>
        
        [Authorize(Roles = "1")]
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_especialidadeRepository.ListarTodos());
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        /// <summary>
        /// Método que nos permite cadastrar uma nova especialidade para médicos
        /// </summary>
        /// <param name="novaEspecialidade">Objeto que irá carregar as informações da nova especialidade</param>
        /// <returns>Lista de especialidades criadas e um StatusCode</returns>
        
        [Authorize(Roles = "1")]
        [HttpPost]
        public IActionResult Post(Especialidade novaEspecialidade)
        {
            try
            {
                _especialidadeRepository.Cadastrar(novaEspecialidade);

                return StatusCode(202);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        /// <summary>
        /// Método que nos permite alterar as especialidades dos médicos conforme a necessidade
        /// </summary>
        /// <param name="id">Parâmetro que será utilizado para encontrar a especialidade que deseja ser alterada</param>
        /// <param name="especialidadeAtualizada">Objeto que irá recarregar as novas informações a serem adicionadas</param>
        /// <returns>Em caso de sucesso nos retorna um StatusCode de Sucesso</returns>
        
        [Authorize(Roles = "1")]
        [HttpPut("{id}")]
        public IActionResult Put(int id , Especialidade especialidadeAtualizada)
        {
            try
            {
                _especialidadeRepository.Atualizar(id, especialidadeAtualizada);

                return StatusCode(204);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        /// <summary>
        /// Método que será utilizado para excluir um tipo de especialidade cadastrada
        /// </summary>
        /// <param name="id">Parâmentro que será utilizado para encontrar o tipo de especialidade desejado</param>
        /// <returns>StatusCode de sucesso caso seja excluido com sucesso</returns>
        
        [Authorize(Roles = "1")]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _especialidadeRepository.Deletar(id);

                return StatusCode(204);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }
    }
}
