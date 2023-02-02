class Gasto {
  constructor (gasto, tipo, saldo) {
    this.gasto = gasto;
    this.tipo = tipo;
    this.saldo = saldo;
}}

// usuário preenche orçamento e economia  e o código
//pega o valor de orçamento e insere na carteira

export const cadastraInformacoes = (
  element,
  valDigitado,
  economDigitada,
  valorTela
) => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    valDigitado = valDigitado.value;
    economDigitada = economDigitada.value;
    element.disabled = true;
    imprimeValor(valorTela, valDigitado);
  });
};

// imprime o valor da carteira na tela

function imprimeValor(valorTela, valDigitado) {
  valorTela.innerHTML = valDigitado;
}

// checa se a carteira está vazia

function checaVazio(id) {
  let notEmpty = document.getElementById(id).innerHTML;
  return notEmpty.length > 0;
}

// ESTÁ DANDO NAN QUANDO ATUALIZA O NÚMERO realiza compra ao clicar nos botões

export const realizaCompraEAtualizaValor = (idBotao, valorTela, economDigitada, tipoTitulo, id) => {
  const botao = document.getElementById(idBotao);
  if (botao) {
    botao.addEventListener("click", function (event) {
      event.preventDefault();
      let valorDaCompra = document.getElementById(idBotao).innerHTML;
      valorDaCompra = valorDaCompra.valueOf;
      atualizaValor(valorTela, valorDaCompra);
      criaObjetoDosGastos(tipoTitulo, valorTela.innerHTML);
      alertaPoupanca(valorTela, economDigitada, id);
    });
  }
};

// Atualiza o valor exibido na tela

function atualizaValor(valorTela, valorDaCompra) {
  if (checaVazio("valorCarteira") === true) {
    valorTela.innerHTML -= valorDaCompra;
  }
}

// cria objetos com os gastos por tipo, valor e novo orçamento

function criaObjetoDosGastos(tipoTitulo, variavel) {
  return new Gasto(tipoTitulo, variavel);
}


// AINDA NÃO ESTÁ FUNCIONANDO O valor que deve ser guardado é utilizado para checar se o que ainda tem na carteira é maior ou igual ao que se quer economizar
export const alertaPoupanca = (valorTela, economDigitada, id) => {
  if (valorTela.innerHTML <= economDigitada.innerHTML) {
    const el = document.getElementById(id).innerHTML;
    if (el) {
        el.style.color = "red";
    }
  }
};

// Botão para atualizar a página

export const atualizaPagina = (element) => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.reload();
  });
};

// Botão para aparecer o extrato

export const criaExtrato = (element, listElements) => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    alert(listElements);
    element.disabled = true;
  });
};
