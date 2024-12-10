import { StyleSheet } from 'react-native';

{/* Esse arquivo foi criado para armazenar os estilos globalmente */}
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
    alignItems: 'center',  
    backgroundColor: '#ffffff',
    padding: 20, 
  },

  fonte:{
    fontSize: 24,
    fontFamily: 'Arimo-Regular',
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },

  imagem: {
    width: 400,
    height: 400,
    marginTop: 60,
  },

  buttons: {
    flexDirection: 'row', 
    justifyContent: 'space-around',
    alignItems: 'center',  
  },

  buttonRadius: {
    flexDirection: 'row', 
    backgroundColor: '#068BFF',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 30,
    marginHorizontal: 20,    
    marginBottom: 50,  
    width:150,
    paddingVertical: 12,         
    paddingHorizontal: 20,  
  },

  buttonText: {
    fontSize: 24,
    fontFamily: 'Arimo-Regular',
    fontWeight: 'bold',
    color: '#ffffff',
  },

  cadastro: {
    marginTop: 30,    
    marginBottom: 20, 
    padding: 10,
    width:'90%',
  },

});