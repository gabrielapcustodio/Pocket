let valorCarteira = document.getElementById('valorCarteira');

export function checaVazio(idVariavel) {
    return document.getElementById(idVariavel).innerHTML === "";
}

export function atualizaValor() {
    valorCarteira.innerHTML = orcamento;
}