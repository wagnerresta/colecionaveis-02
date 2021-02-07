import { StyleSheet } from 'react-native';

const estiloLogin = StyleSheet.create({
   container: {   
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',     
   },
   borda: {   
      justifyContent:'center',
      backgroundColor: '#081a31',  
      width: '100%',
      height: '100%',
   },
   texto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: "center",
      padding: 10
   },
   campoContainer:{
      flexDirection:'row',
      padding:10,
      paddingLeft:50,
      paddingRight:50,
      margin:10,
      alignItems:'center',
   },
   campo: {
      fontSize: 18,
      color: '#FFF',
      marginLeft: 15,
      paddingBottom:10,
      borderBottomWidth:1,
      borderColor:'white',
    },
   botaoContainer: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 40,
      marginRight: 40,
      borderRadius: 5,
      height: 40,
      borderWidth: 2,
      borderColor: '#e8f2e9',
      backgroundColor: '#14417b',
      justifyContent: 'center',
      alignItems: 'center',
   },
      botaoTexto: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: 'bold'
   },
});

  export default estiloLogin;