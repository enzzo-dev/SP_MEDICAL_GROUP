import React, { Component } from 'react'
import api from '../services/api'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

class consultasPacientes extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaConsultas : []
        }
    }

      buscarMinhasConsultas = async () => {

        try{

            const valorToken =  await AsyncStorage.getItem('userToken');

            if(jwtDecode(valorToken).role === "2"){
                const resposta = await api.get('/consulta/consultasMedicos', {
                    headers: {
                        'Authorization': 'Bearer ' + valorToken
                    }
                });
        
                this.setState({listaConsultas : resposta.data});

            } else if(jwtDecode(valorToken).role === "3"){
                const resposta1 = await api.get('/consulta/consultasPacientes', {
                    headers: {
                        'Authorization': 'Bearer ' + valorToken
                    }
                });

                this.setState({listaConsultas : resposta1.data})
            }

           

        } catch(error){
            console.warn(error);
        }
       

      }
    
      renderizaItem = ({item}) => (
        <View style={styles.ItemConsulta}>
        <View style={styles.flatItemContainer}>
          <Text style={styles.flatItemInfo}>{new Date(item.dataConsulta).toLocaleDateString('pt-br')}</Text>
          <Text style={styles.flatItemTitle}>{"Paciente: "}{item.idPacienteNavigation.nomePaciente}</Text>
          <Text style={styles.flatItemInfo}>{"Médico: "}{item.idMedicoNavigation.nomeMedico}</Text>
          <Text style={styles.flatItemDescription}>{item.descricaoConsulta}</Text>
        </View>
      </View>
      );

      componentDidMount(){
       
        this.buscarMinhasConsultas()
          
      }

    render(){
        return(
            <View style={styles.main}>
                <Text style={styles.textTitle}>Minhas Consultas</Text> 
                <FlatList contentContainerStyle={styles.mainConteudo}
                    data={this.state.listaConsultas}
                    keyExtractor={(item) => item.descricaoConsulta}
                    renderItem={this.renderizaItem}
                    />
            </View>
        )
    }
}   

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff'
    },

    textTitle: {
        textAlign: 'center',
        fontSize: 20,
        padding: 20,
        paddingBottom: 8,
        backgroundColor: 'whitesmoke'     
    },

    mainConteudo: {
        margin: 17
    },

    flatItemLinha: {
        borderBottomColor: '#645DD7',
        borderBottomWidth: 2,
        marginTop: 35
    },

    descricao: {
        fontSize: 15,
        marginBottom: 5,
        marginTop: 5
    },

    data: {
        marginBottom: 5,
        color: '#96939B'
    },

    hro: {
        marginBottom: 10
    },
    ItemConsulta: {
        flexDirection: 'row',
        marginTop: 30
      },
      flatItemContainer: {
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderColor: 'black',
        borderBottomWidth: 2,
        padding: 10
      },
      flatItemTitle: {
        fontSize: 20
      },
    
      flatItemInfo: {
        fontSize: 12,
        lineHeight: 20
      },

      flatItemDescription: {
          fontSize: 16,
          lineHeight: 20,
          paddingBottom: 10,
          paddingTop: 10
      }
})

export default consultasPacientes;