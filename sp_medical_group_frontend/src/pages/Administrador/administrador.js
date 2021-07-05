
import{Link} from 'react-router-dom';

import Header from '../../Components/header/header'
import '../../App.css';


    import React, {useState,useEffect} from 'react';
    import axios from 'axios';
    
    export default function Administrador(){
        
        

        const [ idPaciente, setIdPaciente ] = useState( 0 )
        console.log(idPaciente)
    
    
    
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
    
 
        const [ listaConsultas, setListaConsultas ] = useState( [] ) 

        const [ listaMedicos, setListaMedicos ] = useState( [] )
        const [ idMedico, setIdMedico ] = useState( 0 )   
        const[nomeMedico, setNomeMedico] = useState('')
        const[crm, setCrm] = useState('')

        const [ listaPacientes, setListaPacientes ] = useState( [] )   
        const[nomePaciente, setNomePaciente] = useState('')
        const[rg, setRg] = useState(0)
        const[cpf, setCpf] = useState(0)
        const[dataNascimento, setDataNascimento] = useState(new Date('').toLocaleDateString())
        
    
  
      
        const[nome, setNome] = useState('')
        const[email, setEmail] = useState('')
        const[senha, setSenha] = useState('')

        const[listaUsuarios, setListaUsuarios] = useState([])
        const[idUsuario, setIdUsuario] = useState(0) 

        const[ idTipoUsuario, setIdTipoUsuario] = useState(0)
        const[listaTiposUsuarios, setTiposUsuarios] = useState([])

        const[idClinica, setIdClinica] = useState(0)
        const[listaClinicas, setListaClinicas] = useState([])

        const[idEspecialidade, setEspecialidade] = useState(0)
        const[listaEspecialidades, setListaEspecialidade] = useState([])
    
     
        function getConsultas(){
            axios.get('http://localhost:5000/api/consulta', {
                headers:{
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

        function getUsers(){
            axios.get('http://localhost:5000/api/usuario', {
                headers : {
                    'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
                }
            })

            .then(resposta => {
                if(resposta.status === 200)
                {
                    setListaUsuarios(resposta.data)
                    console.log('listando usuários')
                }
            })
        } 
    
        function getMedicos(){
            axios.get('http://localhost:5000/api/medico', {
                headers : {
                    'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
                }
            })
    
            .then(resposta => {
                if (resposta.status === 200) {
                    setListaMedicos(resposta.data)
                    console.log('puxando médicos')
                }
            })   

            .catch(erro => console.log(erro))
            .catch(console.log('Está dando algum erro!'))

            
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
        
        function getTypeUser(){
            axios.get('http://localhost:5000/api/tiposusuario', {
                headers : {
                    'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
                }
            })
            
            .then(resposta => {
                if (resposta.status === 200) {
                    
                    setTiposUsuarios(resposta.data)
                }
            })   
            .catch(erro => console.log(erro))
        }

        function getEspecialidade(){
            axios.get('http://localhost:5000/api/especialidade', {
                headers : {
                    'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
                }
            })

            .then(resposta => {
                if(resposta.status === 200){
                    setListaEspecialidade(resposta.data)
                }
            })

            .catch(erro => console.log(erro))
        }

        function getClinicas(){
            axios.get('http://localhost:5000/api/clinica', {
                headers : {
                    'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
                }
            })

            .then(resposta => {
                if(resposta.status === 200){
                    setListaClinicas(resposta.data)
                    console.log('clinicas adicionadas')
                }
            })

            .catch( (erro) => console.log(erro))
        }

        // Funcionando
        function postConsultas(event){
    
            event.preventDefault()
    
            setIsLoading(true)
    
            axios.post('http://localhost:5000/api/consulta', {
                
                idPaciente : idPaciente,
                idMedico : idMedico,   
                idStatusConsulta : idStatusConsulta,         
                dataConsulta : dataConsulta,
                hroConsulta : hroConsulta,
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
                    if(resposta.status === 201){
                        console.log('Usuário cadastrado com sucesso')
                        setListaUsuarios(resposta.data)
                    }
                })
    
                .catch((erro) => console.log(erro))
    

        }
    
        function createMedicos(event){
            event.preventDefault();

            axios.post('http://localhost:5000/api/medico', {
                idUsuario : idUsuario,
                idClinica : idClinica,
                idEspecialidade : idEspecialidade,
                nomeMedico: nomeMedico,
                crm : crm
            }, {
                headers : {
                    'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
                }
            })

            .then(resposta => {
                if(resposta.status === 201){
                    listaMedicos(resposta.data);
                    console.log('Médico cadastrado com sucesso!')
                    window.alert('Médico cadastradom sucesso!')
                }
            })

            .catch(erro => console.log(erro))

        }    

        function createPacientes(event){
            event.preventDefault()

            axios.post('http://localhost:5000/api/paciente', {
                idUsuario : idUsuario,
                nomePaciente : nomePaciente,
                rg : rg,
                cpf : cpf,
                dataNascimento : dataNascimento
            }, {
                headers : {
                    'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
                }
            })

            
        }

        // funções para ciclos de vida 
        useEffect(getMedicos, [])
        useEffect(getPacientes, [])
        useEffect( getConsultas, [] )  
        useEffect(getClinicas, [])
        useEffect(getUsers, []) 
        useEffect(getTypeUser, [])
        useEffect(getEspecialidade, [])

      
        
        return(
            <div>
                <Header />
                <Link to="/"><h3 className="logout">Sair</h3></Link>

                {/*CADASTRA CONSULTAS */}
                <section className="section-cadastrar-consulta cadastrar">
                    <h1>Cadastrar consultas</h1>
                    <div className="cadastrar-consulta">
                        <form className="cadastrarConsulta" onSubmit={postConsultas}>
                        <h2>Nome do paciente:</h2>
                            <select name="idPaciente"
                                value={idPaciente}
                                onChange={(event) => setIdPaciente(event.target.value)}
                            >
                                <option Disabled value="0">----Selecione um paciente----</option>
                                {
                                    listaPacientes.map( (pacientes) => {
                                        return(
                                            <option key={pacientes.idPaciente} value={pacientes.idPaciente}>
                                                {pacientes.nomePaciente}
                                            </option>
                                        )
                                    })
                                }
                            </select>

                            <h2>Nome do médico:</h2>
                           <select name="idMedico" 
                                value={idMedico} 
                                onChange={(event) => setIdMedico(event.target.value)}
                           >
                                <option  Disabled value="0">----Selecione um médico----</option>
                                {
                                     listaMedicos.map( (medicos) => {
                                     
                                            return(
                                                <option key={medicos.idMedico} value={medicos.idMedico}>
                                                    {medicos.nomeMedico}
                                                </option>    
                                        
                                        )  
                                     })
                                }
                           </select>

                           <h2>Status da Consulta:</h2>
                            <select  name="idStatusConsulta" value={idStatusConsulta} onChange={(event) => setIdStatusConsulta(event.target.value)}>
                                <option disabled value="0">X----Selecione um Status----X</option>
                                <option value="1">Agendada</option>
                                <option value="2">Realizada</option>
                                <option value="3">Cancelada</option>
                            </select>

                           <h2>Data da consulta:</h2>
                            <input 
                                type="date" 
                                placeholder="Data da consulta" 
                                required
                                name="dataConsulta"
                                value={dataConsulta}
                                onChange={(event) => setDataConsulta(event.target.value)}
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

                {/*LISTA TODAS AS CONSULTAS */}
                <section className="section-consultas">
                <h1>Consultas</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Médico</th>
                            <th>Pacientes</th>
                            <th>Data</th>
                            <th>Horário</th>
                            <th>Status</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                          {
                            listaConsultas.map( consultas => {
                                return(
                                    <tr key={consultas.idConsulta}>
                                        <td>{consultas.idMedicoNavigation.nomeMedico}</td>
                                        <td>{consultas.idPacienteNavigation.nomePaciente}</td>
                                        <td>{consultas.dataConsulta}</td>
                                        <td>{consultas.hroConsulta}</td>
                                        <td>{consultas.idStatusConsultaNavigation.descricaoStatus}</td>
                                        <td>{consultas.descricaoConsulta}</td>
                                    </tr>
                                )}
                            )
                        }      
                                     
                    </tbody>    
                </table>
                </section>

                {/*CADASTRA USUÁRIOS*/}
                <section className="section-cadastrar-consulta">
                        <h1>Cadastrar usuários</h1>
                        <div className="cadastrar-consulta">
                            <form className="cadastrarConsulta" onSubmit={createUsers}>
                                <h2>Tipo de usuário</h2>
                                <select name="idTipoUsuario" 
                                value={idTipoUsuario} 
                                onChange={(event) => setIdTipoUsuario(event.target.value)}>

                                    <option Disabled >----Selecione o tipo de usuario----</option>
                                    {
                                        listaTiposUsuarios.map(usuarios => {
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

                {/*LISTA OS USUÁRIOS */}
                <section className="section-consultas">
                <h1>Usuários</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Tipo de usuário</th>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                          {
                            listaUsuarios.map((usuarios) => {
                                return(
                                    <tr key={usuarios.idUsuario}>

                                        <td>{usuarios.idTipoUsuario}</td>
                                        <td>{usuarios.idUsuario}</td>
                                        <td>{usuarios.nome}</td>
                                        <td>{usuarios.email}</td>
                                    </tr>
                                )}
                            )
                        }      
                                     
                    </tbody>    
                </table>                
                </section>

                {/*CADASTRA MÉDICOS */}
                <section className="section-cadastrar-consulta">
                        <h1>Cadastrar médicos: </h1>
                        <div className="cadastrar-consulta">
                            <form className="cadastrarConsulta" onSubmit={createMedicos}>
                                <h2>Usuário Cadastrado: </h2>
                                <select name="idUsuario" 
                                value={idUsuario} 
                                onChange={(event) => setIdUsuario(event.target.value)}>

                                    <option Disabled >----Selecione o usuário----</option>
                                    {
                                        listaUsuarios.map((usuarios) => {
                                        if(usuarios.idTipoUsuario === 2){
                                            return(
                                            <option key={usuarios.idUsuario} value={usuarios.idUsuario}>
                                                {usuarios.nome}
                                            </option>    
                                                )
                                            } 
                                        })  
                                    }
                                </select>

                                <h2>Clínica: </h2>
                                <select name="idClinica"
                                    value={idClinica}
                                    onChange={(event) => setIdClinica(event.target.value)}
                                >

                                <option Disabled >----Selecione uma clínica----</option>
                                {
                                    listaClinicas.map((clinicas) => {
                                        return(
                                            <option key={clinicas.idClinica} value={clinicas.idClinica}>
                                                {clinicas.nomeFantasia}
                                            </option>
                                        )
                                    })
                                }
                                </select>

                                <h2>Especialidade:</h2>
                                <select name="idEspecialidade"
                                    value={idEspecialidade}
                                    onChange={(event) => setEspecialidade(event.target.value)}
                                    >
                                        <option Disabled>----Selecione a especialidade do médico-----</option>
                                        {
                                            listaEspecialidades.map(medicos => {
                                                return(
                                                    <option key={medicos.idEspecialidade} value={medicos.idEspecialidade}>
                                                        {medicos.descricaoEspec}
                                                    </option>
                                                )
                                            })
                                        }    
                                        
                                </select>
                                                  
                                <h2>Nome do médico:</h2>
                                <input type="text"
                                    value={nomeMedico}
                                    onChange={(event) => setNomeMedico(event.target.value)}
                                    required
                                    placeholder="Digite o nome do médico:"
                                    name="nomeMedico"
                                />

                                <h2>CRM:</h2>
                                <input type="text"
                                    value={crm}
                                    onChange={(event) => setCrm(event.target.value)}
                                    required
                                    placeholder="12345-SP"
                                    name="crm"        
                                />

                                <button type="submit">Cadastrar</button>
                            </form>
                            </div>
                </section>

                {/*CADASTRA PACIENTES */}
                <section className="section-cadastrar-consulta">
                        <h1>Cadastrar pacientes: </h1>
                        <div className="cadastrar-consulta">
                            <form className="cadastrarConsulta" onSubmit={createPacientes}>
                                <h2>Usuário Cadastrado: </h2>
                                <select name="idUsuario" 
                                value={idUsuario} 
                                onChange={(event) => setIdUsuario(event.target.value)}>

                                    <option Disabled >----Selecione o usuário----</option>
                                    {
                                        listaUsuarios.map((usuarios) => {
                                            if(usuarios.idTipoUsuario === 3){
                                                return(
                                                    <option key={usuarios.idUsuario} value={usuarios.idUsuario}>
                                                        {usuarios.nome}
                                                    </option>    
                                                )
                                            } 
                                        })  
                                    }
                                </select>
                                   
                                                  
                                <h2>Nome do paciente:</h2>
                                <input type="text"
                                    value={nomePaciente}
                                    onChange={(event) => setNomePaciente(event.target.value)}
                                    required
                                    placeholder="Digite o nome do médico:"
                                    name="nomePaciente"
                                />

                                <h2>RG:</h2>
                                <input type="number"
                                    value={rg}
                                    onChange={(event) => setRg(event.target.value)}
                                    required
                                    maxLength="8"
                                    placeholder="Digite seu rg até 8 caracteres"
                                    name="rg"        
                                />    

                                <h2>CPF:</h2>
                                <input type="number"
                                    value={cpf}
                                    onChange={(event) => setCpf(event.target.value)}
                                    required
                                    maxLength="8"
                                    placeholder="Digite seu cpf até 8 caracteres"
                                    name="cpf"        
                                />

                            <h2>Data de Nascimento:</h2>
                            <input 
                                type="date" 
                                placeholder="Data de nascimento" 
                                required
                                name="dataNascimento"
                                value={dataNascimento}
                                onChange={(event) => setDataNascimento(event.target.value)}
                             />
                                <button type="submit">Cadastrar</button>
                            </form>
                            </div>
                </section>                        
            </div>
        )
}
