import React, { Component } from 'react';
import { StyleSheet, View, Image  } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import consultasPacientes from './ConsultasPacientes'
import Perfil from './Perfil';
import Home from './ConsultasMedicos'


const bottomTab = createBottomTabNavigator();

export default class Main extends Component{
 

  render(){
    return (
      <View style={styles.container}>
          <bottomTab.Navigator
          initialRouteName="Minhas consultas"
          tabBarOptions={{
            showIcon: true,
            showLabel: false,
            activeBackgroundColor: '#F94141',
            inactiveBackgroundColor: '#F55454',
            activeTintColor: '#FFF',
            inactiveTintColor: '#FFF'
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: () => {
              if(route.name === 'Perfil') {
                return(
                  <Image 
                    source={require('../../assets/images/user.png')}
                    style={styles.mainHeaderImg}
                  />
                )
              } else if(route.name === "Minhas consultas"){
                return(
                  <Image 
                  source={require('../../assets/images/document.png')}
                  style={styles.iconConsulta}
                  />
                )
              } else if(route.name === "Home"){
                return(
                  <Image 
                  source={require('../../assets/images/house.png')}
                  style={styles.homeIcon}
                  />
                )
              }
            }
          })}
          > 
            <bottomTab.Screen name="Home" component={Home} />
            <bottomTab.Screen name="Minhas consultas" component={consultasPacientes}/>
            <bottomTab.Screen name="Perfil" component={Perfil}/>
          </bottomTab.Navigator>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  mainHeaderImg: {
    width: 30,
    height: 30,
    tintColor: 'black'
  },
  iconConsulta: {
    width: 30,
    height: 30,
    tintColor: 'Black'
  },
  homeIcon: {
    width: 30,
    height: 30,
    tintColor: 'black'
  }
});