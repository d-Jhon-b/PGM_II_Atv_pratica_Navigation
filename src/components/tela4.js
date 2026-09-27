import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PedidoContext } from '../../App';
import { estilos } from './estilos';

export default function Tela4({ navigation }) {
  const { carrinho, endereco, setCarrinho, setEndereco } = useContext(PedidoContext);

  const subtotal = carrinho.reduce((acc, item) => acc + item.preco, 0);
  const totalGeral = subtotal + 10; // 10 reais de frete fixo

  const novoPedido = () => {
    setCarrinho([]);
    setEndereco(null);
    navigation.navigate('Home');
  };

  return (
    <View style={estilos.container}>
      <Text style={[estilos.titulo, { color: '#4CAF50', fontSize: 28 }]}>Pedido Concluído!</Text>

      {endereco ? (
        <View style={estilos.card}>
          <Text style={estilos.textoDestaque}>Resumo do Pedido:</Text>
          <Text style={estilos.texto}>Itens: {carrinho.length}</Text>
          <Text style={estilos.texto}>Subtotal: R$ {subtotal.toFixed(2)}</Text>
          <Text style={estilos.texto}>Frete: R$ 10.00</Text>
          <Text style={[estilos.textoDestaque, { fontSize: 20, marginTop: 10 }]}>
            Total: R$ {totalGeral.toFixed(2)}
          </Text>

          <View style={{ marginTop: 20 }}>
            <Text style={estilos.textoDestaque}>Enviando para:</Text>
            <Text style={estilos.texto}>{endereco.logradouro}, {endereco.bairro}</Text>
            <Text style={estilos.texto}>{endereco.localidade} - {endereco.uf}</Text>
          </View>
        </View>
      ) : (
        <Text style={estilos.aviso}>Nenhum pedido recente encontrado.</Text>
      )}

      <TouchableOpacity style={estilos.botao} onPress={novoPedido}>
        <Text style={estilos.botaoTexto}>Fazer Novo Pedido</Text>
      </TouchableOpacity>
    </View>
  );
}