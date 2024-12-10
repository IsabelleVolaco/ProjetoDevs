import React from 'react'; // Importa o React
import { View, Text, Button, TouchableOpacity } from 'react-native';
import StyleSheet from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Sobre = ({ navigation }: { navigation: any }) => {
  return (
    <View style={StyleSheet.container}>
      <View>
        <Text style={StyleSheet.fonte}>Parabéns</Text>
        <Text style={StyleSheet.fonte}>Bem-vindo à nossa aplicação! Aqui você encontrará informações úteis.</Text>
      </View>

{/*Botões inferiores */}
      <View style={StyleSheet.buttons}>
        <View style={StyleSheet.buttonRadius}>
          <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
            <Icon name="heart" size={20} color="#ffffff" style={{ textAlign: 'center' }} />
            <Text style={StyleSheet.buttonText}>Inicio</Text>
          </TouchableOpacity>
        </View>

        <View style={StyleSheet.buttonRadius}>
          <TouchableOpacity onPress={() => navigation.navigate('Cliente')}>
            <Icon name="heart" size={20} color="#ffffff" style={{ textAlign: 'center' }} />
            <Text style={StyleSheet.buttonText}>Cliente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Sobre;





