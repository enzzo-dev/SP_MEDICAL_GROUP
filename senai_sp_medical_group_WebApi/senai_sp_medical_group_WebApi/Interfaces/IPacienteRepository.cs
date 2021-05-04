using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using senai_sp_medical_group_WebApi.Domains;

namespace senai_sp_medical_group_WebApi.Interfaces
{
    interface IPacienteRepository
    {
        List<Paciente> ListarTodos();

        void Cadastrar(Paciente novoPaciente);

        void Atualizar(int id, Paciente pacienteAtualizado);

        void Deletar(int id);
    }
}
