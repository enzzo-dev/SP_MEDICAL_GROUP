import {Component} from 'react'

import {Link} from 'react-router-dom';
import { parseJwt } from '../../services/auth';

import Header from '../../Components/header/header'

import '../../App.css';




class Consultas extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaConsultas : [],
            descricao : '',
            atualizando : '',
            idDescricaoAlterado : 0
        }
    }

    buscarConsultas = () => {

        console.log("Vamos realizar a chamada para a API")

        fetch('http://localhost:5000/api/consulta/minhas-consultas/' + parseJwt().role, {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

        .then(resposta => resposta.json())

        .then(data => this.setState({listaConsultas : data}))

        .catch( (erro) => console.log(erro) )
    }

    cadastrarDescricao = (event) => {
        //Ignora o comportamento padrão do navegador - Não atualiza
        event.preventDefault()
        //DAQUI PARA BAIXO É ATUALIZAR

        if (this.state.idDescricaoAlterado !== 0) {
            //edita
            fetch('http://localhost:5000/api/consulta/ ' + this.state.idDescricaoAlterado,
            {
                method : 'PATCH',

                body : JSON.stringify( {descricaoConsulta : this.state.descricao } ),

                headers : {
                    "Content-Type" : "application/json",
                    'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
                }
            })
                .then(resposta => {
                    if(resposta.status === 200){
                        console.log(
                            'Descrição ' + this.state.idDescricaoAlterado + ' atualizado'
                        )
                    }
                })  
                .catch(erro => console.log(erro))

                .then(this.buscarConsultas)

                .then(this.limparCampos)
        }

        }
    

    
    limparCampos = () => {
        this.setState({
            descricao : '',
            idDescricaoAlterado : 0
        })
    }    

    buscarDescricaoPorId = async(consulta) => {
        await this.setState({
            idDescricaoAlterado : consulta.idConsulta,
            descricao : consulta.descricaoConsulta
        } , () => {
            console.log('A consulta '+ consulta.idConsulta + ' foi selecionado')
        })

    }

    atualizarEstadoDescricao = async (evento) => {

        await this.setState({ descricao : evento.target.value})

        console.log(this.state.descricao)

        evento.preventDefault();
    }
  

    componentDidMount(){
        this.buscarConsultas();
    }

render(){
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
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                         {
                            this.state.listaConsultas.map((consulta) => {
                                return(
                                    <tr key={consulta.idConsulta}>
                                        <td>{consulta.idMedicoNavigation.nomeMedico}</td>
                                        <td>{consulta.idPacienteNavigation.nomePaciente}</td>
                                        <td>{consulta.idMedicoNavigation.idEspecialidadeNavigation.descricaoEspec}</td>
                                        <td>{consulta.dataConsulta}</td>
                                        <td>{consulta.hroConsulta}</td>
                                        <td>{consulta.statusConsulta}</td>
                                        <td>{consulta.descricaoConsulta}</td>
                                        <td>
                                                <button  onClick={() => this.buscarDescricaoPorId(consulta)}className="Editar"type="submit">Editar</button>
                                        </td>
                                    </tr>
                                )
                            })
                        } 
                    </tbody>
                </table>
            </section>
            <section className="section-editar">
                <h1>Editar Descrição</h1>
                <div className="editar">
                        <form className="form-alterar" onSubmit={this.cadastrarDescricao}>
                            <input value={this.state.descricao} onChange={this.atualizarEstadoDescricao} type="text" placeholder="Altere a descrição da consulta desejada"/>
                            <button className="btn-alterar" type="submit">Alterar</button>
                        </form>
                </div>
            </section>
        </div>
    )

    }
}

export default Consultas;