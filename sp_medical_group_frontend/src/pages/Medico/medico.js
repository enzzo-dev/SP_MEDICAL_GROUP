import {Component} from 'react'
import axios from 'axios';
import React, {useState,useEffect} from 'react'
import {Link, Switch} from 'react-router-dom';

import Header from '../../Components/header/header'

import '../../App.css';


export default function ConsultaMedi(){
    // editar consultas com os setStates
    const [ descricaoConsulta, setDescricaoConsulta ] = useState( '' )

    // setStates para a listagem das consultas
    const [ listaConsultas, setConsulta ] = useState( [] )
    const [ listaMedicos, setListaMedicos ] = useState( [] )
    const [ listaPacientes, setListaPacientes ] = useState( [] )
    const [ listaEspecialidades, setListaEspecialidades ] = useState( [] )

    

    function buscaConsultas(){
        axios.get('http://localhost:5000/api/consulta/minhas-consultas', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
        
        .then(resposta => {
            if (resposta.status === 200) {
                
                setConsulta(resposta.data)
            }
        })   
        .catch(erro => console.log(erro))
    }

    function buscaMedicos(){
        axios.get('http://localhost:5000/api/medico', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
        
        .then(resposta => {

            if (resposta.status === 200) {
                
                setListaMedicos(resposta.data)
            }
        })   

        .catch(erro => console.log(erro))
    }

    function buscaPacientes(){
        axios.get('http://localhost:5000/api/paciente', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
        
        .then(resposta => {
            if (resposta.status === 200) {
                
                setListaPacientes(resposta.data)
            }
        })   
        .catch(erro => console.log(erro))
    }

    function buscaEspecialidade(){
        axios.get('http://localhost:5000/api/especialidade', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
        
        .then(resposta => {
            if (resposta.status === 200) {
                
                setListaEspecialidades(resposta.data)
            }
        })   
        .catch(erro => console.log(erro))
    }

    function atualizaDescricao(){
        axios.patch('http://localhost:5000/api/consulta/', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
        
        .then(resposta => {
            if (resposta.status === 204) {
                
                setConsulta(resposta.data)
            }
        })   
        .catch(erro => console.log(erro))
    }

    useEffect( buscaConsultas, [] )  
    useEffect( buscaMedicos, [] ) 
    useEffect( buscaPacientes, [] ) 
    useEffect( buscaEspecialidade, [] )

    return(
        <div>
            <Header />
            <Link to="/"><h3 className="logout">Sair</h3></Link>
               
            <section className="section-consultas">
                <h1>Consultas</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Médico</th>
                            <th>Pacientes</th>
                            <th>Especialidade</th>
                            <th>Data</th>
                            <th>Horário</th>
                            <th>Status</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaConsultas.map((consulta) => {
                                return(
                                    <tr key={consulta.idConsulta}>
                                        <td>{consulta.idMedicoNavigation.nomeMedico}</td>
                                        <td>{consulta.idPacienteNavigation.nomePaciente}</td>
                                        <td>{consulta.idMedicoNavigation.idEspecialidadeNavigation.descricaoEspec}</td>
                                        <td>{consulta.dataConsulta}</td>
                                        <td>{consulta.hroConsulta}</td>
                                        <td>{consulta.idStatusConsultaNavigation.statusConsulta}</td>
                                        <td>{consulta.descricaoConsulta}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
        </div>
    )

}
