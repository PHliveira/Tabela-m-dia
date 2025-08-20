// -----------------------------
// SCRIPT ORGANIZADO E COMENTADO
// -----------------------------

// pega o formulário (para ouvir o evento submit)
const form = document.getElementById('form-atividade');

// strings de HTML prontas para usar (imagens e spans de resultado)
const imgAprovado = '<img src="images 2/aprovado.png" alt="emoji feliz">';
const imgReprovado = '<img src="images 2/reprovado.png" alt="emoji chorando">';
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';

// "estado" do app: nomes das atividades e notas em arrays separados
const atividades = []; // ex: ['Matemática', 'Português']
const notas = [];      // ex: [8.5, 6.0]

// aqui guardamos todo o HTML das linhas já criadas (string acumulada)
let linhas = '';

// -----------------------------
// Quando o formulário for enviado
// -----------------------------
form.addEventListener('submit', function (e) {
  e.preventDefault(); // evita que a página recarregue

  adicionaLinha();          // pega os valores e monta a string da nova linha
  atualizaTabela();         // coloca a string 'linhas' dentro do <tbody>
  atualizaMediafinal();     // recalcula a média e atualiza o rodapé
});

// -----------------------------
// Função: adicionaLinha
// - lê os inputs
// - guarda nos arrays
// - cria uma string <tr>...</tr> e acrescenta em 'linhas'
// -----------------------------
function adicionaLinha() {
  const inputNomeAtividade = document.getElementById('nome-atividade');
  const inputNotaAtividade = document.getElementById('nota-atividade');

  // Aqui o código original checa duplicidade de nome
  if (atividades.includes(inputNomeAtividade.value)) {
    alert(`Atividade ${inputNomeAtividade.value} já existe`);
  } else {
    // salva dados nos arrays
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    // monta a linha como string HTML (mesma estrutura que você recebeu)
    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    // usa operador ternário para decidir qual imagem mostrar
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    // concatena a nova linha na string acumulada
    linhas += linha;
  }
}

// -----------------------------
// Função: atualizaTabela
// - seleciona o tbody e injeta o HTML de 'linhas'
// -----------------------------
function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}

// -----------------------------
// Função: atualizaMediafinal
// - calcula a média chamando calculadoraMediaFinal()
// - insere a média e o span apropriado (Aprovado/Reprovado)
// -----------------------------
function atualizaMediafinal() {
  const mediaFinal = calculadoraMediaFinal();

  // atualiza as células do rodapé (ids do seu HTML: 'media' e 'media-resultado')
  document.getElementById('media').innerHTML = mediaFinal;
  document.getElementById('media-resultado').innerHTML =
    mediaFinal >= 7 ? spanAprovado : spanReprovado;
}

// -----------------------------
// Função: calculadoraMediaFinal
// - soma todas as notas do array 'notas' e retorna a média
// - (observação: este código segue o original — não protege contra divisão por zero)
// -----------------------------
function calculadoraMediaFinal() {
  let somanotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somanotas += notas[i];
  }

  return somanotas / notas.length;
}
