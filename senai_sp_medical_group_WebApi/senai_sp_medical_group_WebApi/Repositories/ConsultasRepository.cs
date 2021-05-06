﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using senai_sp_medical_group_WebApi.Domains;
using senai_sp_medical_group_WebApi.Interfaces;
using senai_sp_medical_group_WebApi.Contexts;

namespace senai_sp_medical_group_WebApi.Repositories
{
    public class ConsultasRepository : IConsultaRepository
    {
        SpMedicalContext ctx = new SpMedicalContext();
        public void Atualizar(int id, Consulta consultaAtualizada)
        {
            Consulta consultaBuscado = ctx.Consultas.Find(id);

            if(consultaBuscado.DescricaoConsulta != null || consultaBuscado.DataConsulta != null || consultaBuscado.HroConsulta != null || consultaBuscado.IdStatusConsulta != null)
            {
                consultaBuscado.DescricaoConsulta = consultaAtualizada.DescricaoConsulta;
                consultaBuscado.DataConsulta = consultaAtualizada.DataConsulta;
                consultaBuscado.HroConsulta = consultaAtualizada.HroConsulta;
                consultaBuscado.IdStatusConsulta = consultaAtualizada.IdStatusConsulta;
            }

            ctx.Consultas.Update(consultaBuscado);

            ctx.SaveChanges();
        }

        public void Cadastrar(Consulta novaConsulta)
        {
            ctx.Consultas.Add(novaConsulta);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Consulta consultaDesejada = ctx.Consultas.Find(id);

            ctx.Consultas.Remove(consultaDesejada);

            ctx.SaveChanges();
        }

        public List<Consulta> ListarTodos()
        {
            return ctx.Consultas.ToList();
        }
    }
}