
//COTAÇÕES DATA: 16/03/2021
const moedas = {
    "BRL": 1,
    "USD": 5.5845,
    "CAD": 4.4852,
    "EUR": 6.6422,
    "GBP": 7.7563,
    "ARS": 0.06127
}

//observar
var btnConverter = document.getElementById('botao-conversao');
btnConverter.addEventListener('click', iniciarConversao);


//Validar Entrada Número
function validaNumero(num){
    if (isNaN(num) || num == '')
        return false
    return true
}

//Formatar Numero
function formatarNumero(numero){
    let num = numero.replace(',', '.')
    num = num.replace(' ', '..')
    num = num.replace('-', '..')
    return num
}

/*
    Ler os dados inseridos pelo usuário e retorna
    uma array com os dados para a conversão da moeda.
*/
function lerEntradas() {
    let selectEntrada = document.getElementById('conversor-entrada').value;
    let selectSaida = document.getElementById('conversor-saida').value;
    let valor = document.getElementById('input-valor-conversao').value;
    valor = formatarNumero(valor);
    if (validaNumero(valor) === false){
        alert('Insira um valor válido!')
        return false
    }
    return [valor, selectEntrada, selectSaida]
}

// Retorna o resultado da conversão
function converterMoeda(arrayConversao) {
    let valor = arrayConversao[0]
    let entrada = arrayConversao[1]
    let saida = arrayConversao[2]

    return Math.round(valor * moedas[entrada] / moedas[saida] * 1000)/1000
}

function iniciarConversao() {
    let arrayConversao = lerEntradas()
    if (arrayConversao == false){
        return
    }
    let resultado = converterMoeda(arrayConversao)
    let exibirResultado = document.getElementById('resultado-conversao')
    exibirResultado.style.display = 'block'
    exibirResultado.innerHTML = resultado + ` (${arrayConversao[2]})`
}
