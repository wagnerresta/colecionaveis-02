import React,{useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import estiloColecao from './estiloColecao';
import Lista from '../../components/Lista/Lista';

function Colecao({ navigation, route }) {

    const[colecao,setColecao] = useState([
        {
            id:'1',
            titulo:'Admirável Mundo Novo 1',
            descricao: 'Teste teste teste teste teste teste',
            autor:'Teste Teste',
            anoPublicacao:'1900',
            foto: require('../../../assets/item/1.jpeg')
        },
        {
            id:'2',
            titulo:'Admirável Mundo Novo 2',
            descricao: 'Teste teste teste teste teste teste',
            autor:'Teste Teste',
            anoPublicacao:'1900',
            foto: require('../../../assets/item/1.jpeg')
        },
        {
            id:'3',
            titulo:'Admirável Mundo Novo 3',
            descricao: 'Teste teste teste teste teste teste',
            autor:'Teste Teste',
            anoPublicacao:'1900',
            foto: require('../../../assets/item/1.jpeg')
        },
        {
            id:'4',
            titulo:'Admirável Mundo Novo 4',
            descricao: 'Teste teste teste teste teste teste',
            autor:'Teste Teste',
            anoPublicacao:'1900',
            foto: require('../../../assets/item/1.jpeg')
        },
    ])

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloColecao.container}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={colecao}
                renderItem={({item}) => <Lista data={item}/>}
                
            />
        </View>
    )
}

export default Colecao;
