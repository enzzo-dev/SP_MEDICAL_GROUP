using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace senai_sp_medical_group_WebApi.Domains
{
    /// <summary>
    /// Classe que representa as consultas marcadas peos pacientews onde tem o médico desejado, horários, descrição da consulta
    /// </summary>
    public partial class Consulta
    {
        public int IdConsulta { get; set; }
        public int? IdPaciente { get; set; }

        [Required]
        public int? IdMedico { get; set; }
        public int? IdStatusConsulta { get; set; }

        [Required]
        public string DataConsulta { get; set; }

        [Required]
        public string HroConsulta { get; set; }

        [Required]
        public string DescricaoConsulta { get; set; }

        public virtual Medico IdMedicoNavigation { get; set; }
        public virtual Paciente IdPacienteNavigation { get; set; }
        public virtual StatusConsultum IdStatusConsultaNavigation { get; set; }
    }
}
