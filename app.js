import { cadastraInformacoes, realizaCompraEAtualizaValor, alertaPoupanca, criaExtrato, atualizaPagina } from './lib/newFunctions.js';

// import { infoBotao, refreshBotao, botaoExtrato, tituloComida, tituloBrinquedo, tituloCirco, valorCarteira, orcamento, ECONOMIA, COMIDA, BRINQUEDO, CIRCO } from './variables.js';


// definir variáveis 

const infoBotao = document.getElementById("infoButton");
const refreshBotao = document.getElementById("refresh-page");
const botaoExtrato = document.getElementById("go-extrato");

const tituloComida = document.getElementById("titleComida").innerHTML;
const tituloBrinquedo = document.getElementById("titleBrinquedo").innerHTML;
const tituloCirco = document.getElementById("titleCirco").innerHTML;

let valorCarteira = document.getElementById("valorCarteira");
let orcamento = document.getElementById("orcamento");
const ECONOMIA = document.getElementById("economia").innerHTML;

let comida = document.getElementById("valorComida").innerHTML;
let brinquedo = document.getElementById("valorBrinquedo").innerHTML;
let circo = document.getElementById("valorCirco").innerHTML;

// Início da operação
cadastraInformacoes(infoBotao, orcamento, ECONOMIA, valorCarteira);

let extratoDosGastos = [];

// Compras
realizaCompraEAtualizaValor("comida", valorCarteira, ECONOMIA, comida, tituloComida, "spanValue");

realizaCompraEAtualizaValor("brinquedo", valorCarteira, ECONOMIA, brinquedo, tituloBrinquedo, "spanValue");

realizaCompraEAtualizaValor("circo", valorCarteira, ECONOMIA, circo, tituloCirco, "spanValue");

// Extrato

criaExtrato(botaoExtrato, extratoDosGastos);

// Finaliza a operação
atualizaPagina(refreshBotao);
