using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using senai_sp_medical_group_WebApi.Interfaces;
using senai_sp_medical_group_WebApi.Domains;
using senai_sp_medical_group_WebApi.Repositories;
using senai_sp_medical_group_WebApi.ViewModels;
//Utilizadas para a autenticação
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;

namespace senai_sp_medical_group_WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IUsuarioRepository _usuarioRepository { get; set; }

        public LoginController()
        {
            _usuarioRepository = new UsuarioRepository();
        }


        /// <summary>
        /// Método que irá logar o usuário ao sistema com suas devidas permissões
        /// </summary>
        /// <param name="login"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Post(LoginViewModel login)
        {
            try
            {
                Usuario userLogin = _usuarioRepository.Login(login.Email, login.Senha);

                if(userLogin == null)
                {
                    return NotFound("Email ou senha Inválidos");
                }

                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Email, userLogin.Email),

                    new Claim(JwtRegisteredClaimNames.Jti, userLogin.IdUsuario.ToString()),

                    new Claim(ClaimTypes.Role, userLogin.IdTipoUsuario.ToString()),

                    new Claim("role", userLogin.IdTipoUsuario.ToString())
                
                };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("MedicalGroup_chave_de_autenticacao"));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: "SpMedical.WebApi",
                    audience: "SpMedical.WebApi",
                    claims: claims,
                    expires: DateTime.Now.AddHours(2),
                    signingCredentials: creds
                    );

                return Ok(new 
                { 
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });
                
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }
    }
}
