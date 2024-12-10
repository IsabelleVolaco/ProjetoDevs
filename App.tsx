import { StyleSheet} from 'react-native';
import React from 'react'; // Importa o React
import { NavigationContainer } from '@react-navigation/native'; // Container principal da navegação
import { createStackNavigator } from '@react-navigation/stack'; // Stack Navigator para navegação empilhada
import Inicio from '../ProjetoDevs/screens/inicio'; // Importa a tela de "Inicio"
import Sobre from '../ProjetoDevs/screens/sobre'; // Importa a tela de "Sobre"
import Cliente from '../ProjetoDevs/screens/cliente'; // Importa a tela de "Cliente"


// Criação do Stack Navigator
const stack = createStackNavigator();

export default function App() {
  return (

    // NavigationContainer envolve todas as telas e a navegação 
    <NavigationContainer> 

      {/* Definindo as rotas (telas) */}
      <stack.Navigator
        initialRouteName="Inicio"  // Tela inicial definida para "Inicio" 
        screenOptions={{ //Estilizando a header
          headerTitleAlign: 'center',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}>
       
        <stack.Screen
          name="Inicio"
          component={Inicio}
          options={{
            headerLeft: () => null, 
          }} />
        <stack.Screen 
        name="Sobre" 
        component={Sobre} 
        options={{
          headerLeft: () => null, 
        }}/>
        <stack.Screen 
        name="Cliente" 
        component={Cliente} 
        options={{
          headerLeft: () => null, 
        }}/>

      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff', 
    shadowColor: 'transparent', 
    shadowOpacity: 0,    
    
  },
  headerTitle: {
    color: '#068BFF',
    fontFamily: 'Arimo-Regular',
    fontSize: 35,
    marginTop: 25,
  },
});


/*
Algumas variáveis (Inicio,Cliente,Sobre...) foram criadas com letra maiúscula pois:
'React Components must start with an uppercase letter. If you're passing a regular function and not a component, pass it as children to 'Screen' instead. Otherwise capitalize your component's name. [Component Stack]'

*/