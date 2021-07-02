using System;
using System.Collections.Generic;

#nullable disable

namespace senai_sp_medical_group_WebApi.Domains
{
    public partial class Especialidade
    {
        public Especialidade()
        {
            Usuarios = new HashSet<Usuario>();
        }

        public int IdEspecialidade { get; set; }
        public string DescricaoEspec { get; set; }

        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
