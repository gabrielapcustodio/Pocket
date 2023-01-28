// definir valores das variáveis

const infoBotao = document.getElementById("infoButton");
const refreshBotao = document.getElementById("refresh-page");
const botaoComida = document.getElementById("comida");
const botaoBrinquedo = document.getElementById("brinquedo");
const botaoCirco = document.getElementById("circo");

let valorCarteira = document.getElementById("valorCarteira");
let orcamento = document.getElementById("orcamento");
let economia = document.getElementById("economia");

const valorComida = 50;
const valorBrinquedo = 35;
const valorCirco = 40;

// usuário preenche orçamento e economia  e o código
//pega o valor de orçamento e insere na carteira

infoBotao.addEventListener("click", function (event) {
  event.preventDefault();
  orcamento = orcamento.value;
  economia = economia.value;
  infoBotao.disabled = true;
  atualizaValor();
});

// checa se a carteira está vazia

function checaVazio(idVariavel) {
  return document.getElementById(idVariavel).innerHTML === "";
}

// atualiza o valor da carteira

function atualizaValor() {
    valorCarteira.innerHTML = orcamento;
}

// autoriza preenchimento se o formulário estiver preenchido

function permissaoParaPreencher(tipoGasto) {
  if (checaVazio("valorCarteira") == false) {
    orcamento -= tipoGasto;
    atualizaValor();
  }
}

// O valor que deve ser guardado é utilizado para checar se o que ainda tem na carteira é maior ou igual ao que se quer economizar

function alertaPoupanca() {
    if (orcamento <= economia) {
        valorCarteira.style.color = 'red';
    }
}


// ao clicar em cada botão de despesa, o valor é reduzido da carteira

botaoComida.addEventListener("click", function () {
  permissaoParaPreencher(valorComida);
  alertaPoupanca();
});

botaoBrinquedo.addEventListener("click", function () {
  permissaoParaPreencher(valorBrinquedo);
  alertaPoupanca();
});

botaoCirco.addEventListener("click", function () {
  permissaoParaPreencher(valorCirco);
  alertaPoupanca();
});

// Ao final, o usuário pode atualizar a página

refreshBotao.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.reload();
});

