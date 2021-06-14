
import{Link} from 'react-router-dom';
import {parseJwt} from '../../services/auth'

import Header from '../../Components/header/header'
import '../../App.css';

// class Admin extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             listaConsultas : [],
//             medicoNome : '',
//             pacienteNome : '',
//             horarioConsulta : '',
//             statusConsulta : [],
//             descricaoConsulta : '',


//         }
//     }

//     limparCampos = () => {
//         this.setState({
//             descricaoConsulta : '',
//             statusConsulta : [],
//             horarioConsulta : '',
//             pacienteNome : '',
//             medicoNome : '',
//             dataConsulta : ''
//         })
//     }

//     /* BUSCAR CONSULTAS  */
//     buscarConsultas = () => {

//         console.log("Vamos realizar a chamada para a API")

//         fetch('http://localhost:5000/api/consulta/minhas-consultas/' + parseJwt().jti, {
//             headers : {
//                 'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
//             }
//         })

//         .then(resposta => resposta.json())

//         .then(data => this.setState({listaConsultas : data}))

//         .catch( (erro) => console.log(erro) )
//     }

//     /* BUSCAR CONSULTAS  */

//     cadastrarConsulta = (event) => {
//         event.preventDefault()

//         fetch('http://localhost:5000/api/consulta', {
//             method : 'POST',

//             body : JSON.stringify(
//             {
//                 medicoNome : this.state.medicoNome, pacienteNome : this.state.pacienteNome, horarioConsulta : this.state.horarioConsulta, statusConsulta : this.state.statusConsulta, descricaoConsulta : this.state.descricaoConsulta, dataConsulta : this.state.dataConsulta
//             }),

//             headers : {
//                 'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login') 
//             }
//         }) 
        
//         .then(console.log('Consulta cadastrada com sucessso'))

//         .then(this.buscarConsultas)

//         .catch(erro => console.log(erro))

//         .then(this.limparCampos)
//     }

//     atualizarEstadoMedico = async(event) => {
//         await this.setState({medicoNome : event.target.value})

//         console.log(this.state.medicoNome)

//         event.preventDefault();
//     }

//     atualizarEstadoPaciente = async(event) => {
//         await this.setState({pacienteNome : event.target.value})

//         console.log(this.state.pacienteNome)

//         event.preventDefault()
//     }

//     atualizarEstadoHorario = async(event) => {
//         await this.setState({horarioConsulta : event.target.value})

//         console.log(this.state.horarioConsulta)

//         event.preventDefault()
//     }
    

//     atualizarEstadoStatusConsulta = async(event) => { /* STATUSCONSULTA É UM MÉTODO DIFERENTE DE SE FAZER */
//         await this.setState({statusConsulta : event.target.value})

//         console.log(this.state.statusConsulta)

//         event.preventDefault()
//     }

//     atualizarEstadoDescricao = async(event) => {
//         await this.setState({descricaoConsulta : event.target.value})

//         console.log(this.state.descricaoConsulta)

//         event.preventDefault()
//     }

//     atualizarEstadoData = async(event) => {
//         await this.setState({dataConsulta : event.target.value})

//         console.log(this.state.dataConsulta)

//         event.preventDefault()
//     }

//     componentDidMount(){
//         this.buscarConsultas()
//     }


//     render(){


// }    
//}
// export default Admin

    import React, {useState,useEffect} from 'react';
    import axios from 'axios';
    
    export default function Administrador(){
        
        

        // IdPaciente,IdMedico,IdStatusConsulta,DataConsulta,HorarioConsulta,DescricaoAtendimento    
    
        // VARIÁVEIS PARA CADASTRO DE CONSULTAS
        const [ idPaciente, setIdPaciente ] = useState( 0 )
        console.log(idPaciente)
    
        const [ idMedico, setIdMedico ] = useState( 0 )   
        console.log(idMedico)
    
        const [ idStatusConsulta, setIdStatusConsulta ] = useState( 0 )
        console.log(idStatusConsulta)
    
        const [ dataConsulta, setDataConsulta ] = useState("")
        console.log(dataConsulta)
        
        const [ hroConsulta, setHroConsulta ] = useState("")    
        console.log(hroConsulta)
        

        const [ descricaoConsulta, setDescricaoConsulta ] = useState("")
        console.log(descricaoConsulta)

        const [ isLoading, setIsLoading ] = useState (false)
        console.log(isLoading)
    
        // setStates para a listagem das consultas
        const [ listaConsultas, setListaConsultas ] = useState( [] ) 
        const [ listaMedicos, setListaMedicos ] = useState( [] )
        const [ listaPacientes, setListaPacientes ] = useState( [] )   
        
    
        //VARIÁVEIS PARA CADASTRAR NOVOS USUÁRIOS - ADMNINSTRADOR
        const[ idTipoUsuario, setIdTipoUsuario] = useState(0)
        const[nome, setNome] = useState('')
        const[email, setEmail] = useState('')
        const[senha, setSenha] = useState('')

        const[listaUsuarios, setListaUsuarios] = useState([])
    
        //funções


        // buscar consultas do usuário (todas consultas - administrador)
        function getConsultas(){
            axios.get('http://localhost:5000/api/minhas-consultas/' + parseJwt().role , {
            headers : {
                    'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
                }
            })
            .then(resposta => {
                if (resposta.status === 200) {
                setListaConsultas(resposta.data)
                }
            })   
            .catch(erro => console.log(erro))
        }
    
        // buscar médico
        function getMedicos(){
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
    
        // buscar paciente
        function getPacientes(){
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
        
    
        // cadastrar consultas
        function postConsultas(event){
    
            event.preventDefault()
    
            setIsLoading(true)
    
            axios.post('http://localhost:5000/api/consulta', {
                
                idPaciente : idPaciente,
                idMedico : idMedico,            
                dataConsulta : dataConsulta,
                hroConsulta : hroConsulta,
                idStatusConsulta : idStatusConsulta,
                descricaoConsulta : descricaoConsulta
    
            }, {
                headers : {
                    'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
                }
            })
    
            .then(resposta => {
    
                if (resposta.status === 202) {
    
                    console.log('Consulta cadastrada!')
    
                    setIsLoading(false)
    
                }
            })
            
            .catch(erro => {
                console.log(erro)
                setIsLoading(false)
            })
    
        
    
        };    
    
        // funções para ciclos de vida 
        useEffect( getConsultas, [] )  
        useEffect( getMedicos, [] ) 
        useEffect( getPacientes, [] ) 

        function createUsers(event){
            event.preventDefault()

            axios.post('http://localhost:5000/api/usuario', {

                idTipoUsuario : idTipoUsuario,
                nome : nome,
                email : email,
                senha : senha

            }, {
                headers : {
                    'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
                }
            })

            .then(resposta => {
                if(resposta.status === 200){
                    console.log('Usuário cadastrado com sucesso')
                }
            })

            .catch((erro) => console.log(erro))
        }
        
        return(
            <div>
                <Header />
                <Link to="/"><h3 className="logout">Sair</h3></Link>
                <section className="section-cadastrar-consulta cadastrar">
                    <h1>Cadastrar consultas</h1>
                    <div className="cadastrar-consulta">
                        <form className="cadastrarConsulta" onSubmit={postConsultas}>

                        <h2>Nome do paciente:</h2>
                            <select name="idPaciente"
                                value={idPaciente}
                                onChange={(event) => setIdPaciente(event.target.value)}
                            >
                                <option value="0">Pacientes</option>
                                {
                                    listaPacientes.map(pacientes => {
                                        return(
                                            <option key={pacientes.idPaciente} value={pacientes.idPaciente}>
                                                {pacientes.nomePaciente}
                                            </option>
                                        )
                                    })
                                }
                            </select>

                            <h2>Nome do médico</h2>

                           <select name="idMedico" 
                                value={idMedico} 
                                onChange={(event) => setIdMedico(event.target.value)}
                           >
                                <option value="0">Médico</option>
                                {
                                    listaMedicos.map( medico => {
                                        return(
                                            <option key={medico.idMedico} value={medico.idMedico}>
                                                {medico.nomeMedico}
                                            </option>
                                        )
                                    })
                                }
                           </select>

                           <h2>Data da consulta:</h2>
                            <input 
                                type="date" 
                                placeholder="Data da consulta" 
                                required
                                name="dataConsulta"
                                value={dataConsulta}
                                onChange={(event => setDataConsulta(event.target.value))}
                             />

                            <h2>Horário da consulta:</h2>
                            <input 
                                type="time" 
                                placeholder="Horário da consulta" 
                                required
                                name="hroConsulta"
                                value={hroConsulta}
                                onChange={(event) => setHroConsulta(event.target.value)}
                            />


                            <h2>Status da Consulta:</h2>
                            <select  name="idStatusConsulta" value={idStatusConsulta} onChange={(event) => setIdStatusConsulta(event.target.value)}>
                                <option disabled value="0">X----Selecione um Status----X</option>
                                <option value="1">Agendada</option>
                                <option value="2">Realizada</option>
                                <option value="3">Cancelada</option>
                            </select>

                            <h2>Descrição da consulta:</h2>
                            <input 
                            type="text" 
                            placeholder="Descrição da consulta" 
                            required
                            name="descricaoConsulta"
                            value={descricaoConsulta}
                            onChange={(event) => setDescricaoConsulta(event.target.value)}
                            />

                            <button type="submit">Cadastrar</button>
                        </form>
                    </div>
                </section>
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
                            listaConsultas.map((consultas) => {
                                return(
                                    <tr key={consultas.idConsulta}>
                                        <td>{consultas.idMedicoNavigation.nomeMedico}</td>
                                        <td>{consultas.idPacienteNavigation.nomePaciente}</td>
                                        <td>{consultas.idMedicoNavigation.idEspecialidadeNavigation.descricaoEspec}</td>
                                        <td>{consultas.dataConsulta}</td>
                                        <td>{consultas.idConsulta.hroConsulta}</td>
                                        <td>{consultas.idStatusConsultaNavigation.statusConsulta}</td>
                                        <td>{consultas.descricaoConsulta}</td>
                                    </tr>
                                )}
                            )
                        }      
                                     
                    </tbody>    
                </table>
                </section>

                <section className="section-cadastrar-consulta">
                        <h1>Cadastrar usuários</h1>
                        <div className="cadastrar-consulta">
                        <form className="cadastrarConsulta" onSubmit={createUsers}>
                            <h2>Tipo de usuário</h2>
                            <select name="idTipoUsuario" 
                            value={idTipoUsuario} 
                            onChange={(event) => setIdTipoUsuario(event.target.value)}>

                                <option value="1">Administrador</option>
                                {
                                    listaUsuarios.map(usuarios => {
                                        return(
                                            <option key={usuarios.idTipoUsuario} value={usuarios.idTipoUsuario}>
                                                {usuarios.nome}
                                            </option>
                                        )
                                    })
                                }

                            </select>

                            <h2>Nome:</h2>
                            <input type="text"
                                value={nome}
                                onChange={(event) => setNome(event.target.value)}
                                required
                                placeholder="Digite o nome do usuário:"
                                name="name"
                            />

                            <h2>Email:</h2>
                            <input type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            placeholder="Digite o email:"
                            name="email"
                            />

                            <h2>Senha: </h2>
                            <input type="password" 
                             minlength="5"
                             value={senha}
                             onChange={(event) => setSenha(event.target.value)}
                             required
                             placeholder="Digite a senha:"
                             name="senha"
                             />

                             <button type="submit">Cadastrar</button>
                        </form>
                        </div>
                </section>                
            </div>
        )
}
