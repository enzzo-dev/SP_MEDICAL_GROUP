using System;
using System.Collections.Generic;

#nullable disable

namespace senai_sp_medical_group_WebApi.Domains
{
    public partial class Clinica
    {
        public int IdClinica { get; set; }
        public string NomeFantasia { get; set; }
        public int Cnpj { get; set; }
        public string HroFuncionamento { get; set; }
        public string Endereco { get; set; }
        public string RazaoSocial { get; set; }
    }
}
