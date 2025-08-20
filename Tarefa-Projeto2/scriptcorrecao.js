// Pega os elementos do HTML
const formulario = document.getElementById('form');
const nomeContato = document.getElementById('nomeContato');
const telefoneContato = document.getElementById('telefoneContato');
const tabelaCorpo = document.querySelector('tbody'); // Captura o corpo da tabela

// Lista onde vamos guardar os contatos (não é obrigatório, mas é uma boa prática)
let listaContatos = [];

// Quando o formulário for enviado
formulario.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita o recarregamento da página

  // Pega os valores dos inputs
  const inputNome = nomeContato.value;
  const inputTel = telefoneContato.value; // Removido parseFloat, pois o telefone pode conter caracteres como parênteses ou traços

  // Validação simples para garantir que ambos os campos estão preenchidos
  if (inputNome.trim() === '' || inputTel.trim() === '') {
    alert('Por favor, preencha todos os campos!');
    return; // Interrompe a execução da função
  }

  // Cria a nova linha da tabela
  const novaLinha = document.createElement('tr');

  // Cria as células da tabela
  const celulaNome = document.createElement('td');
  celulaNome.textContent = inputNome; // Adiciona o valor do nome na célula

  const celulaTelefone = document.createElement('td');
  celulaTelefone.textContent = inputTel; // Adiciona o valor do telefone na célula

  // Adiciona as células à nova linha
  novaLinha.appendChild(celulaNome);
  novaLinha.appendChild(celulaTelefone);

  // Adiciona a nova linha ao corpo da tabela
  tabelaCorpo.appendChild(novaLinha);

  // Opcional: Limpa os campos de input após o cadastro
  nomeContato.value = '';
  telefoneContato.value = '';

  // Adiciona o contato à lista de contatos (boa prática para futuras funcionalidades)
  listaContatos.push({ nome: inputNome, telefone: inputTel });

  console.log('Lista de contatos:', listaContatos);
});