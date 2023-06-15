/**
 * [M1S05] Ex 4 - Imprimir sequência de Fibonacci
 *
 * Escreve um programa que imprime a sequência de Fibonacci até o número atribuído na variável
 * `número`. A sequência de Fibonacci é formada pela soma dos dois números anteriores:
 * 0, 1, 1, 2, 3, 5, 8, 13, ...
 * Utiliza uma estrutura de repetição (while) para gerar a sequência.
 */



var numero = 12; // digite o número, imprime a sequencia até o numero mais próximo dele pertencente a sequencia de Fibonacci 
var fiboAnterior = 0;
var fiboAtual = 1;

if (numero === 0){
    console.log(numero)
} else {

while (fiboAtual <= numero) {
    if (fiboAnterior === 0 ){
        console.log(fiboAnterior)
        console.log(fiboAtual)
        var proximoFibo = fiboAnterior + fiboAtual;
    fiboAnterior = fiboAtual;
    fiboAtual = proximoFibo;
    }
    else{ 
    console.log(fiboAtual);

    var proximoFibo = fiboAnterior + fiboAtual;
    fiboAnterior = fiboAtual;
    fiboAtual = proximoFibo;
}}
}
