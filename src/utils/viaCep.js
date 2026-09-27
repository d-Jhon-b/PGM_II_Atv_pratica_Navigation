const viaCep = async (cep) => {
  if (cep.length !== 8) {
    return { erro: true, mensagem: 'Digite um CEP válido com 8 dígitos.' };
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    
    if (data.erro) {
      return { erro: true, mensagem: 'CEP não encontrado.' };
    } 
    
    // Se deu certo, retorna os dados da API
    return { erro: false, dados: data };
    
  } catch (error) {
    return { erro: true, mensagem: 'Falha ao buscar o CEP.' };
  }
};

export default viaCep;