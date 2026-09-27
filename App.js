import React, { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tela1 from './src/components/tela1';
import Tela2 from './src/components/tela2';
import Tela3 from './src/components/tela3';
import Tela4 from './src/components/tela4';

export const PedidoContext = createContext();

const Tab = createBottomTabNavigator();

export default function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [endereco, setEndereco] = useState(null);

  return (
    <PedidoContext.Provider value={{ carrinho, setCarrinho, endereco, setEndereco }}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#E63946', tabBarInactiveTintColor: '#1D3557' }}>
          <Tab.Screen name="Home" component={Tela1} options={{ title: 'Cardápio' }} />
          <Tab.Screen name="Carrinho" component={Tela2} options={{ title: 'Meu Carrinho' }} />
          <Tab.Screen name="CEP" component={Tela3} options={{ title: 'Entrega' }} />
          <Tab.Screen name="Pedido" component={Tela4} options={{ title: 'Confirmação' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </PedidoContext.Provider>
  );
}