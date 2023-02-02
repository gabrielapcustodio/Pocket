import { cadastraInformacoes, realizaCompra, alertaPoupanca, criaExtrato, atualizaPagina } from './lib/newFunctions.js';

// import { infoBotao, refreshBotao, botaoExtrato, tituloAlimentacao, tituloLazer, tituloExposicoes, valorCarteira, orcamento, ECONOMIA, ALIMENTACAO, LAZER, EXPOSICOES } from './variables.js';


// definir variáveis 

const infoBotao = document.getElementById("infoButton");
const refreshBotao = document.getElementById("refresh-page");
const botaoExtrato = document.getElementById("go-extrato");

const tituloAlimentacao = document.getElementById("titleAlimentacao").innerHTML;
const tituloLazer = document.getElementById("titleLazer").innerHTML;
const tituloExposicoes = document.getElementById("titleExposicoes").innerHTML;

let valorCarteira = document.getElementById("valorCarteira");
let orcamento = document.getElementById("orcamento");
const ECONOMIA = document.getElementById("economia").innerHTML;

let alimentacao = document.getElementById("valorAlimentacao").innerHTML;
let lazer = document.getElementById("valorLazer").innerHTML;
let exposicoes = document.getElementById("valorExposicoes").innerHTML;

// Início da operação
cadastraInformacoes(infoBotao, orcamento, ECONOMIA, valorCarteira);

let extratoDosGastos = [];

// Compras
realizaCompra("alimentacao", valorCarteira, ECONOMIA, alimentacao, tituloAlimentacao, "spanValue");

realizaCompra("lazer", valorCarteira, ECONOMIA, lazer, tituloLazer, "spanValue");

realizaCompra("exposicoes", valorCarteira, ECONOMIA, exposicoes, tituloExposicoes, "spanValue");

// Extrato

criaExtrato(botaoExtrato, extratoDosGastos);

// Finaliza a operação
atualizaPagina(refreshBotao);
