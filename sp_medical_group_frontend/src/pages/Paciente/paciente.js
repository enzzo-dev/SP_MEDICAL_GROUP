
import {Component}  from 'react';
import {Link} from 'react-router-dom';

import Header from '../../Components/header/header'

import '../../App.css';

import {parseJwt} from '../../services/auth'

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

        fetch('http://localhost:5000/api/consulta/minhas-consultas', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

        .then(resposta => resposta.json())

        .then(data => this.setState({listaConsultas : data}))

        .catch( (erro) => console.log(erro) )
    }

    

    
    componentDidMount(){
        this.buscarConsultas();
    }

    componentWillUnmount(){
        localStorage.removeItem('usuario-login')
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
                        </tr>
                    </thead>
                    <tbody>
                         {
                            this.state.listaConsultas.map((consulta) => {
                                return(
                                    <tr key={consulta.idConsulta}>
                                        <td>{consulta.nomeMedico}</td>
                                        <td>{consulta.idPacienteNavigation.nomePaciente}</td>
                                        <td>{consulta.idMedicoNavigation.idEspecialidadeNavigation.descricaoEspec}</td>
                                        <td>{consulta.dataConsulta}</td>
                                        <td>{consulta.hroConsulta}</td>
                                        <td>{consulta.statusConsulta}</td>
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
}

export default Consultas;