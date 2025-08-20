
// Pega os elementos do HTML
const formulario = document.getElementById('form');
const nomeContato = document.getElementById('nomeContato');
const telefoneContato = document.getElementById('telefoneContato');
const tabelaCorpo = document.querySelector('tbody');

// Lista onde vamos guardar todas as listas
//let listaContatos = [];

// Quando o formulário for enviado
form.addEventListener('submit', function (e){
  e.preventDefault(); // não recarregar a página 

//Pega valores dos inputs
const inputNome = nomeContato.value;
const inputTel = parseFloat(telefoneContato.value); 

//criar elementos da tabela

const novaLinha = document.createElement('tr');
const celulaNome = document.createElement('td');
celulaNome.textContent = inputNome;

const celulaNum = document.createElement('td');
celulaNum.textContent = inputTel;
 
 novaLinha.appendChild(celulaNome);
 novaLinha.appendChild(celulaNum);
 tabelaCorpo.appendChild(novaLinha);

 // Limpa os campos do formulário
nomeContato.value = '';
telefoneContato.value = '';

 // Guardar nota na lista
  //listaContatos.push({nome: inputNome , telefone : inputTel});
 });