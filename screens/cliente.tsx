import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import StyleSheet from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Cliente = ({ navigation }: { navigation: any }) => {
  return (
    <View style={StyleSheet.container}>

{/*Formulário cadastro*/}
      <View style={StyleSheet.cadastro}>
        <Text style={StyleSheet.fonte}>Cadastro</Text>
        <View>
          <Text>CPF</Text>
          <TextInput
            placeholder="Informe seu CPF"
            style={{ backgroundColor: '#f2f2f2', marginBottom: 10 }}
          />
        </View>
        <View>
          <Text>Nome</Text>
          <TextInput
            placeholder="Informe seu nome"
            style={{ backgroundColor: '#f2f2f2', marginBottom: 10 }}
          />
        </View>
        <View>
          <Text>Email</Text>
          <TextInput
            placeholder="Informe seu email"
            style={{ backgroundColor: '#f2f2f2', marginBottom: 10 }}
          />
        </View>
        <View>
          <Text>Senha</Text>
          <TextInput
            placeholder="Informe sua senha"
            style={{ backgroundColor: '#f2f2f2', marginBottom: 10 }}
            secureTextEntry={true}
          />
        </View>
        <View>
          <Text>Confirme sua senha</Text>
          <TextInput
            placeholder="Informe a senha novamente"
            style={{ backgroundColor: '#f2f2f2', marginBottom: 10 }}
            secureTextEntry={true}
          />
        </View>
        <View style={{ width: 150, alignSelf: 'center', }}>
          <Button
            title="Cadastrar"
          />
        </View>
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
          <TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
            <Icon name="heart" size={20} color="#ffffff" style={{ textAlign: 'center' }} />
            <Text style={StyleSheet.buttonText}>Sobre</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cliente;