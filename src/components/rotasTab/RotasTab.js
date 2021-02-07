import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../../views/Perfil/Perfil';
import Colecao from '../../views/Colecao/Colecao';
import RotasDrawer from '../rotasDrawer/RotasDrawer';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const icones = {
  Inicial : { name : 'home'},
  Colecao : { name : 'list'},
  Perfil : { name : 'user'},
}

const RotasTab = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={
        {
          labelStyle: { fontSize: 24 },
          style: {backgroundColor: '#14417b'},
          activeTintColor: '#FFFFFF',
          showLabel:false,
        }
      }
      screenOptions ={({route}) => ({
        tabBarIcon:({color,size}) => {
          const {name} = icones[route.name];
          return <FontAwesome name={name} size={size} color={color} />
        }
      })
    }
    >
      <Tab.Screen 
        name="Inicial" 
        component={RotasDrawer}
        options={{
          unmountOnBlur:true,
          tabBarLabel:'Inicial',
        }}
      />
      
      <Tab.Screen name="Colecao" component={Colecao} />
      <Tab.Screen name="Perfil" component={Perfil} />

    </Tab.Navigator>
  );
}

export default RotasTab;