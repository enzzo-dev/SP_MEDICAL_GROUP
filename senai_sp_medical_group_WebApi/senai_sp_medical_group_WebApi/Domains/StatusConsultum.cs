using System;
using System.Collections.Generic;

#nullable disable

namespace senai_sp_medical_group_WebApi.Domains
{
    public partial class StatusConsultum
    {
        public StatusConsultum()
        {
            Consulta = new HashSet<Consulta>();
        }

        public int IdStatusConsulta { get; set; }
        public string DescricaoStatus { get; set; }

        public virtual ICollection<Consulta> Consulta { get; set; }
    }
}
