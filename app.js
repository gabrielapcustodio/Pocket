import { cadastraInformacoes, realizaCompra, alertaPoupanca, criaExtrato, atualizaPagina } from './lib/newFunctions.js';

// definir variáveis

const infoBotao = document.getElementById("infoButton");
const refreshBotao = document.getElementById("refresh-page");
const botaoExtrato = document.getElementById("go-extrato");

const tituloComida = document.getElementById("titleComida").innerHTML;
const tituloBrinquedo = document.getElementById("titleBrinquedo").innerHTML;
const tituloCirco = document.getElementById("titleCirco").innerHTML;

let valorCarteira = document.getElementById("valorCarteira");
let orcamento = document.getElementById("orcamento");
let economia = document.getElementById("economia");

const valorComida = 50;
const valorBrinquedo = 35;
const valorCirco = 40;


// Início da operação
cadastraInformacoes(infoBotao, orcamento, economia, valorCarteira);

let extratoDosGastos = [];

// Compras
realizaCompra("comida", valorCarteira, economia, valorComida, tituloComida, "spanValue");

realizaCompra("brinquedo", valorCarteira, economia, valorBrinquedo, tituloBrinquedo, "spanValue");

realizaCompra("circo", valorCarteira, economia, valorCirco, tituloCirco, "spanValue");

// Extrato

criaExtrato(botaoExtrato, extratoDosGastos);

// Finaliza a operação
atualizaPagina(refreshBotao);
