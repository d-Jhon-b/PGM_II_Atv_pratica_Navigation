import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { PedidoContext } from '../../App';
import { estilos } from './estilos';

const PRODUTOS = [
  { id: '1', nome: 'Hambúrguer Artesanal', preco: 25.90 },
  { id: '2', nome: 'Pizza Margherita', preco: 45.00 },
  { id: '3', nome: 'Refrigerante 2L', preco: 12.50 },
];

export default function Tela1({ navigation }) {
  const { carrinho, setCarrinho } = useContext(PedidoContext);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Faça seu Pedido</Text>
      
      <FlatList
        data={PRODUTOS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={estilos.card}>
            <Text style={estilos.textoDestaque}>{item.nome}</Text>
            <Text style={estilos.texto}>R$ {item.preco.toFixed(2)}</Text>
            <TouchableOpacity style={estilos.botao} onPress={() => adicionarAoCarrinho(item)}>
              <Text style={estilos.botaoTexto}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {carrinho.length > 0 && (
        <TouchableOpacity 
          style={[estilos.botao, { backgroundColor: '#E63946' }]} 
          onPress={() => navigation.navigate('Carrinho')}
        >
          <Text style={estilos.botaoTexto}>Acessar Carrinho ({carrinho.length})</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}