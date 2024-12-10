import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import StyleSheet from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Inicio = ({ navigation }: { navigation: any }) => {
  return (
    <View style={StyleSheet.container}>
      {/* Adicionando a imagem */}
      <Image source={require('../assets/splash_image.png')} style={StyleSheet.imagem}/>

      {/*Botões inferiores */}
      <View style={StyleSheet.buttons}>
        <View style={StyleSheet.buttonRadius}>
          {/* Button substituido por TouchableOpacity para fazer os ícones funcionarem. Como o nome indica, ao pressionar o botão você navega para a página indicada  */}
          {/* Botão para navegar para a tela Sobre */}
          <TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
          <Icon name="heart" size={20} color="#ffffff" style={{ textAlign: 'center'}} /> 
            <Text style={StyleSheet.buttonText}>Sobre</Text>
          </TouchableOpacity>
        </View>

        {/* Botão para navegar para a tela Cliente */}
        <View style={StyleSheet.buttonRadius}>
          <TouchableOpacity onPress={() => navigation.navigate('Cliente')}>
            <Icon name="heart" size={20} color="#ffffff" style={{ textAlign: 'center'}}/>
            <Text style={StyleSheet.buttonText}>Cliente</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  );
}

export default Inicio;