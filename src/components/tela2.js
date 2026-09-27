import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { PedidoContext } from '../../App';
import { estilos } from './estilos';

export default function Tela2({ navigation }) {
  const { carrinho } = useContext(PedidoContext);

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Seu Carrinho</Text>

      {carrinho.length === 0 ? (
        <Text style={estilos.aviso}>Seu carrinho está vazio.</Text>
      ) : (
        <>
          <FlatList
            data={carrinho}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={estilos.card}>
                <Text style={estilos.texto}>{item.nome}</Text>
                <Text style={estilos.textoDestaque}>R$ {item.preco.toFixed(2)}</Text>
              </View>
            )}
          />
          <Text style={[estilos.titulo, { marginTop: 10 }]}>Total: R$ {total.toFixed(2)}</Text>
          
          <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('CEP')}>
            <Text style={estilos.botaoTexto}>Confirmar e Calcular Frete</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}