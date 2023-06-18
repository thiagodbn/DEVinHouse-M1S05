/**
 * [M1S05] Ex 7 - Manipulação de arrays
 *
 * Escreve um programa que contém três funções para manipular arrays, utilizando os métodos
 * push, pop e slice:
 *   A. `adicionarElemento`: recebe um array e um elemento, e adiciona o elemento ao final do array.
 *      Em seguida, retorna o array atualizado.
 *   B. `removerUltimoElemento`: recebe um array, remove o último elemento do array e retorna o elemento removido.
 *   C. `removerElementosIntervalo`: recebe um array, um índice inicial e um índice final. A função deve
 *      remover os elementos do array compreendidos entre os índices inicial e final. Em seguida, retorna o
 *      array atualizado.
 */


//             0  1  2  3  4  5  6  7  8  9   10
let valores = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10 ,11]

console.log('Array incial ' + valores)

valores.push(12, 13)  // adiciona ao final do array

console.log('Array apos push ' + valores) //  [1,2,3,4,5,6,7,8,9,10,11,12,13]

valores.pop() // remove ultimo elemento

console.log('Array apos pop ' + valores) //  [1,2,3,4,5,6,7,8,9,10,11,12]

valores.unshift(0) // adiciona ao inicio do array

console.log('Array apos unshift ' + valores) // [0,1,2,3,4,5,6,7,8,9,10,11,12]

valores.shift() // remove do incio do array

console.log('Array apos shift ' + valores) //  [1,2,3,4,5,6,7,8,9,10,11,12]

console.log('Slice(3,8) ' + valores.slice(3,8) )//slice([início,fim]) [ 4, 5, 6, 7, 8 ]