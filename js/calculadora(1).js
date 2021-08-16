// 'use strict';

/// Declarando constantes para manipulação dos elementos
const btnBackspace = document.getElementById('backspace')
const btnDecimal = document.getElementById('decimal')
const btnIgual = document.getElementById('igual')
const btnInverter = document.getElementById('inverter')
const btnLimparCalculo = document.getElementById('limparCalculo')
const btnLimparDisplay = document.getElementById('limparDisplay')
const btnModo = document.getElementById('btn-modo')
const cientificos = document.querySelectorAll('[id*=sci-]')
const display = document.getElementById('display')
const numeros = document.querySelectorAll('[id*=tecla]')
const operadores = document.querySelectorAll('[id*=operador]')

//Declarando variáveis de controle das operações
let novoNumero = true;
let numeroAnterior;
let modo = 0;
let operador;



//////////////////////////////////////////////////////////
////////////// FUNÇÕES DA APLICAÇÃO //////////////////////
////////////////////////////////////////////////////////// 


/*
    Função altera o modo da calculadora (padrão / científica)
*/
const alterarModo = () => {
    modo++;
    if (modo % 2 == 1){
        cientificos.forEach (
            cientifico => cientifico.style.display = 'block'
        )
        return
    }
    cientificos.forEach (
        cientifico => cientifico.style.display = 'none'
    )
}


/*
    Função apaga o último digito no display.
*/
const apagarDigito = () => {
    display.textContent = display.textContent.slice(0, -1) 
}

/*
    Função responsável por atualizar o display.
    Chamada ao digitar um número, sinal ou ponto.
*/
const atualizarDisplay = (texto) => {
    if (novoNumero) {
        if (texto == '.'){
            display.textContent = '0.'
            novoNumero = false
            return
        }
        display.textContent = texto
        novoNumero = false
        return
    }
    display.textContent += texto
}

/*
    Função que calcula as operações da calculadora padrão
    e atualiza o display com o resultado.
*/
const calcular = () => {
    if (operacaoPendente()) {
        let numeroAtual = parseFloat(display.textContent)
        novoNumero = true;
        if(operador == "+") {
            atualizarDisplay(numeroAnterior + numeroAtual)
        }
        if(operador == "-") {
            atualizarDisplay(numeroAnterior - numeroAtual)
        }
        if(operador == "*") {
            atualizarDisplay(numeroAnterior * numeroAtual)
        }
        if(operador == "/") {
            atualizarDisplay(numeroAnterior / numeroAtual)
        }        
    }
    operador = ''
    novoNumero = false
}

/*
    Função que calcula as funções da calculadora científica
    e atualiza o display com resultado.
*/
const calculoCientifico = (botaoCientifico) => {
    if (botaoCientifico.target.id == 'sci-pi'){
        display.textContent = 3.14159265
    }
    if (display.textContent == ''){
        return
    }
    if (botaoCientifico.target.id == 'sci-sqrt'){
        let num = display.textContent
        num = num ** (1/2);
        display.textContent = num;
    }
    if (botaoCientifico.target.id == 'sci-quadrado'){
        let num = display.textContent
        num = num ** 2;
        display.textContent = num;
    }
    if (botaoCientifico.target.id == 'sci-cubo'){
        let num = display.textContent
        num = num ** 3;
        display.textContent = num;
    }
    novoNumero = false
}

/*
    Função que verifica se já contém um número
    com ponto no display. Retorna true caso contenha um ponto
    e retorna false caso não exista nenhum ponto
*/
const contemPonto = () => {
    if (display.textContent.indexOf('.') != -1) {
        return true
    }
    return false
}

/* 
    Função responsável por inserir o ponto no display.
*/
const inserirDecimal = (botao) => {
    if (!contemPonto()){
        atualizarDisplay(botao.target.textContent)
    }  
}

/*
    Função que inseri os números no display ao clicar nos digitos
    de 0 a 9.
*/
const inserirNumero = (botao) => atualizarDisplay(botao.target.textContent)

/*
    Função que inverte o sinal do número no display.
*/
const inverterSinal = () => {
    if (display.textContent.indexOf('-') == -1) {
        display.textContent = '-'+display.textContent
        return
    }
    display.textContent = display.textContent.replace('-', '')
}

/*
    Função responsável por limpar o display.
    Função não apaga o número da memória e
    mantém a operação na memória
*/
const limparDisplay = () => {
    display.textContent = 0
    novoNumero = true
}

/*
    Função limpa as variáveis de controle
    e limpa o display. Prepara para uma nova operação.
*/
const limparCalculo = () => {
    display.textContent = ''
    numeroAnterior = 0
    operador = ''
    novoNumero = true
}

/* 
    Função verifica se tem alguma operação pendente.
*/
const operacaoPendente = () => {
    if (operador != '') {
        return true
    }
}

/*
    Função inseri um novo operador na memória e
    e caso exista alguma operação pendente, a operação pendente
    é executada.
*/
const selecionarOperador = (botaoOperador) => {
    if (!novoNumero) {
        calcular();
        novoNumero = true
        operador = botaoOperador.target.textContent
        numeroAnterior = parseFloat(display.textContent)
    }
}

//////////////////////// FIM FUNÇÕES //////////////////////////////



//////////////////////////////////////////////////////////
////////////// Eventos de Observaçao  ////////////////////
//////////////////////////////////////////////////////////


/// Adicionando os Eventos de Observação
numeros.forEach(
    numero => numero.addEventListener('click', inserirNumero)
)
operadores.forEach(
    operador => operador.addEventListener('click', selecionarOperador)
)
cientificos.forEach(
    cientifico => {
        cientifico.addEventListener('click', calculoCientifico);
        cientifico.style.display = 'none';  // Oculta os botões da calculadora cientifica
    }
)


btnBackspace.addEventListener('click', apagarDigito)
btnDecimal.addEventListener('click', inserirDecimal)
btnIgual.addEventListener('click', calcular)
btnInverter.addEventListener('click', inverterSinal)
btnLimparCalculo.addEventListener('click', limparCalculo)
btnLimparDisplay.addEventListener('click', limparDisplay)
btnModo.addEventListener('click', alterarModo)




