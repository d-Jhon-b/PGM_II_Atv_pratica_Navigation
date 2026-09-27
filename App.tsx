import React, { createContext, useState } from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tela1 from './src/components/tela1';
import Tela2 from './src/components/tela2';
import Tela3 from './src/components/tela3';
import Tela4 from './src/components/tela4';


interface PedidoContextData {
  carrinho: any[];
  setCarrinho: React.Dispatch<React.SetStateAction<any[]>>;
  endereco: any;
  setEndereco: React.Dispatch<React.SetStateAction<any>>;
}

export const PedidoContext = createContext<PedidoContextData>({} as PedidoContextData);

const Tab = createBottomTabNavigator();

export default function App() {
  const [carrinho, setCarrinho] = useState<any[]>([]);
  const [endereco, setEndereco] = useState<any>(null);

  return (
    <NavigationIndependentTree>
      <NavigationContainer>
      <PedidoContext.Provider value={{ carrinho, setCarrinho, endereco, setEndereco }}>

        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#E63946', tabBarInactiveTintColor: '#1D3557' }}>
          <Tab.Screen name="Home" component={Tela1} options={{ title: 'Cardápio' }} />
          <Tab.Screen name="Carrinho" component={Tela2} options={{ title: 'Meu Carrinho' }} />
          <Tab.Screen name="CEP" component={Tela3} options={{ title: 'Entrega' }} />
          <Tab.Screen name="Pedido" component={Tela4} options={{ title: 'Confirmação' }} />
        </Tab.Navigator>
    </PedidoContext.Provider>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}