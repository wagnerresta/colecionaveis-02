import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import estiloLogin from './estiloLogin';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function Login({ navigation }) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
        if (login == '' || senha == '') {
            Alert.alert(
              'Preencimento obrigatório',
              'Informe o login e a senha!',
              [
                { text: 'OK' },
              ],
            );
        } else {

            navigation.replace('Inicial');
        }
    }
    
    return (
        <View style={estiloLogin.container}>
            <View style={estiloLogin.borda}>

                <Text style={estiloLogin.texto}>Login</Text>
                
                <View style={estiloLogin.campoContainer}>
                    <AntDesign name="user" size={24} color="white" />
                    <TextInput
                        style={estiloLogin.campo}
                        placeholder="Login"
                        onChangeText={login => setLogin(login)}
                        value={login}
                    />
                </View>

                <View style={estiloLogin.campoContainer}>
                    <Feather name="key" size={24} color="white" />
                    <TextInput
                        style={estiloLogin.campo}
                        placeholder="Senha"
                        onChangeText={senha => setSenha(senha)}
                        value={senha}
                    />
                </View>

                <TouchableOpacity style={estiloLogin.botaoContainer} onPress={entrar}>
                    <Text style={estiloLogin.botaoTexto}>
                        Entrar
                        
                    </Text>
                    
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Login;
