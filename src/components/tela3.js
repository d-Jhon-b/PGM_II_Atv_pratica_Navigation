import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { PedidoContext } from '../../App';
import { estilos } from './estilos';
import viacep from '../utils/viaCep'
export default function Tela3({ navigation }) {
  const { endereco, setEndereco, carrinho } = useContext(PedidoContext);
  const [cep, setCep] = useState('');

  const buscarCep = async () => {
    const resultado = await viacep(cep);
    
    if (resultado.erro) {
      Alert.alert('Erro', resultado.mensagem);
    } else {
      setEndereco(resultado.dados);
    }
  };
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Endereço de Entrega</Text>
      
      <TextInput
        style={estilos.input}
        placeholder="Digite seu CEP (apenas números)"
        keyboardType="numeric"
        value={cep}
        onChangeText={setCep}
        maxLength={8}
      />
      
      <TouchableOpacity style={estilos.botao} onPress={buscarCep}>
        <Text style={estilos.botaoTexto}>Buscar Endereço</Text>
      </TouchableOpacity>

      {endereco && (
        <View style={[estilos.card, { marginTop: 20 }]}>
          <Text style={estilos.textoDestaque}>Logradouro: <Text style={estilos.texto}>{endereco.logradouro}</Text></Text>
          <Text style={estilos.textoDestaque}>Bairro: <Text style={estilos.texto}>{endereco.bairro}</Text></Text>
          <Text style={estilos.textoDestaque}>Cidade: <Text style={estilos.texto}>{endereco.localidade} - {endereco.uf}</Text></Text>
          <Text style={estilos.textoDestaque}>Frete Fixo: <Text style={estilos.texto}>R$ 10,00</Text></Text>
          
          <TouchableOpacity 
            style={[estilos.botao, { backgroundColor: '#4CAF50', marginTop: 15 }]} 
            onPress={() => {
              if(carrinho.length > 0) navigation.navigate('Pedido');
              else Alert.alert('Aviso', 'Adicione itens ao carrinho primeiro!');
            }}
          >
            <Text style={estilos.botaoTexto}>Finalizar Pedido</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}