import api from "../services/api"
import React, {Component} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';

class consultaMedicos extends Component {
    constructor(props){
        super(props);
        this.state = {
            listaConsultas : []
        }
    }

    render(){
        return(
            <View style={styles.main}>
                <Text>Consultas médicas</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',

    }
})
export default consultaMedicos;