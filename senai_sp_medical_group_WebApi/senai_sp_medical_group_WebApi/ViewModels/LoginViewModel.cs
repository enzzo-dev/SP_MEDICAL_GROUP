﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace senai_sp_medical_group_WebApi.ViewModels
{
    public class LoginViewModel 
    {
        [Required(ErrorMessage = "Informe o Email para Acessar!")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Informa a senha antes de logar!")]
        public string Senha { get; set; }
    }
}
