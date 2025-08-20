const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="images 2/aprovado.png" alt="emoji feliz">';
const imgReprovado = '<img src="images 2/reprovado.png" alt="emoji chorando">';
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';

const atividades = [];
const notas= [];

let linhas = '';

form.addEventListener('submit' , function(e) {
    e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  atualizaMediafinal();

})

function adicionaLinha(){

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`Atividade ${inputNomeAtividade.value} já existe`)
     }else {

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

// alert(`Nome atividade ${inputNomeAtividade.value} e Nota ${inputNotaAtividade.value}`);

let linha = '<tr>';
linha += `<td> ${inputNomeAtividade.value}</td>`
linha += `<td> ${inputNotaAtividade.value}</td>`
linha += `<td> ${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado }</td>`;
linha += '</tr>';

linhas += linha;

}}

function atualizaTabela(){
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }

function atualizaMediafinal(){
    const mediaFinal = calculadoraMediaFinal();

    document.getElementById('media').innerHTML = mediaFinal;
    document.getElementById('media-resultado').innerHTML = mediaFinal >=7 ? spanAprovado: spanReprovado ;
}

function calculadoraMediaFinal(){
    let somanotas = 0;
    for (let i=0; i < notas.length; i++){
        somanotas += notas[i];
    }

    return somanotas / notas.length;
    }