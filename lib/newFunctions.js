function Gasto(gasto, tipo, saldo) {
  this.gasto = gasto;
  this.tipo = tipo;
  this.saldo = saldo;
}

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
    economDigitada - economDigitada.value;
    element.disabled = true;
    imprimeValor(valorTela, valDigitado);
  });
};

// imprime o valor da carteira na tela

const imprimeValor = (valorTela, valDigitado) => {
  valorTela.innerHTML = valDigitado;
};

// checa se a carteira está vazia

const checaVazio = (id) => {
  let notEmpty = document.getElementById(id).innerHTML;
  return notEmpty.length > 0;
};

// realiza compra ao clicar nos botões

export const realizaCompra = (idBotao, valorTela, economDigitada, tipoGasto, tipoTitulo, id) => {
  const botao = document.getElementById(idBotao);
  if (botao) {
    botao.addEventListener("click", function (event) {
      event.preventDefault();
      atualizaValor(valorTela, tipoGasto, tipoTitulo);
      alertaPoupanca(valorTela, economDigitada, id);
    });
  }
};

// Atualiza o valor exibido na tela

const atualizaValor = (valorTela, tipoGasto, tipoTitulo) => {
    if (checaVazio("valorCarteira") === true) {
        valorTela.innerHTML -= tipoGasto;
        criaObjetoDosGastos(tipoGasto, tipoTitulo, valorTela.innerHTML);
    }
}

// cria objetos com os gastos por tipo, valor e novo orçamento

const criaObjetoDosGastos = (tipoGasto, tipoTitulo, variavel) => {
    return new Gasto(tipoGasto, tipoTitulo, variavel);
  };


// O valor que deve ser guardado é utilizado para checar se o que ainda tem na carteira é maior ou igual ao que se quer economizar
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
