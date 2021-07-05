using System;
using System.Collections.Generic;

#nullable disable

namespace senai_sp_medical_group_WebApi.Domains
{
    public partial class Especialidade
    {
        public Especialidade()
        {
            Medicos = new HashSet<Medico>();
        }

        public int IdEspecialidade { get; set; }
        public string DescricaoEspec { get; set; }

        public virtual ICollection<Medico> Medicos { get; set; }
    }
}
