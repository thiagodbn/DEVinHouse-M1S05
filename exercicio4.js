/**
 * [M1S05] Ex 4 - Imprimir sequência de Fibonacci
 *
 * Escreve um programa que imprime a sequência de Fibonacci até o número atribuído na variável
 * `número`. A sequência de Fibonacci é formada pela soma dos dois números anteriores:
 * 0, 1, 1, 2, 3, 5, 8, 13, ...
 * Utiliza uma estrutura de repetição (while) para gerar a sequência.
 */

var numero = 13 // numero que dira quantas casas rodara 
var fibo = 0
var thi = 0
var n = 0
while (fibo <= numero) {
    console.log(fibo)
if (numero === fibo){
    console.log ('Finaliza')
break;
} else if (fibo === 0 ){
    fibo++;
} else if (fibo === 1){
    console.log(fibo)
    var thi = fibo
    fibo++;
}
else {
    fibo = thi + fibo - n ;
    var thi = fibo
    n++
}



}