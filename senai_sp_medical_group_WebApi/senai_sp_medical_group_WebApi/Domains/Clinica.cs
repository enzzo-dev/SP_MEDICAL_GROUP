using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace senai_sp_medical_group_WebApi.Domains
{
    /// <summary>
    /// Classe que representa uma rede de clínicas disponiveis para exames, cada uma com seu médico
    /// </summary>
    public partial class Clinica
    {
        public Clinica()
        {
            Medicos = new HashSet<Medico>();
        }

        public int IdClinica { get; set; }

        [Required]
        public string NomeFantasia { get; set; }

        [Required]
        public int Cnpj { get; set; }

        [Required]
        public string HroFuncionamento { get; set; }

        [Required]
        public string Endereco { get; set; }

        [Required]
        public string RazaoSocial { get; set; }

        public virtual ICollection<Medico> Medicos { get; set; }
    }
}
