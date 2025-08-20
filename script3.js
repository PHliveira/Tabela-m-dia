// Pega os elementos do HTML
const form = document.getElementById('form-atividade');
const inputNome = document.getElementById('nome-atividade');
const inputNota = document.getElementById('nota-atividade');

const tbody = document.querySelector('tbody');
const celMedia = document.getElementById('media');
const celStatus = document.getElementById('media-resultado').querySelector('.resultado');

// Lista onde vamos guardar todas as notas
let notas = [];

// Quando o formulário for enviado
form.addEventListener('submit', function (event) {
  event.preventDefault(); // não recarregar a página

  const nome = inputNome.value;
  const nota = parseFloat(inputNota.value);

  // Verificação simples
  if (nome === "" || isNaN(nota)) {
    alert("Preencha o nome e a nota corretamente!");
    return;
  }

  // Cria uma nova linha na tabela
  const novaLinha = document.createElement('tr');

  const colunaNome = document.createElement('td');
  colunaNome.textContent = nome;

  const colunaNota = document.createElement('td');
  colunaNota.textContent = nota.toFixed(1);

  const colunaAprovado = document.createElement('td');
  colunaAprovado.textContent = ""; // só usamos aprovado na média final

  novaLinha.appendChild(colunaNome);
  novaLinha.appendChild(colunaNota);
  novaLinha.appendChild(colunaAprovado);

  tbody.appendChild(novaLinha);

  // Guardar nota na lista
  notas.push(nota);

  // Recalcular média
  atualizarMedia();

  // Limpar os campos
  inputNome.value = "";
  inputNota.value = "";
  inputNome.focus();
});

function atualizarMedia() {
  if (notas.length === 0) {
    celMedia.textContent = "--";
    celStatus.textContent = "--";
    celStatus.style = "";
    return;
  }

  // soma das notas
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }

  // calcula média
  let media = soma / notas.length;

  // coloca média na tabela
  celMedia.textContent = media.toFixed(1);

  // aprovado ou reprovado
  if (media >= 7) {
    celStatus.textContent = "Aprovado";
    celStatus.style.background = "green";
    celStatus.style.color = "white";
  } else {
    celStatus.textContent = "Reprovado";
    celStatus.style.background = "red";
    celStatus.style.color = "white";
  }
}
