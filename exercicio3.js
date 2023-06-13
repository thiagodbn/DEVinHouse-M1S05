/**
 * [M1S05] Ex 3 - Verificar número primo
 *
 * Escreve um programa que atribui um valor a uma variável `número` e verifica se ele
 * é um número primo. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
 * Utiliza uma estrutura de repetição (do while) para verificar as divisões.
 */


var numero = 12;
var divisor = 2;

  if (numero <= 1) {
     console.log('Numero não é primo')
  } else  {
  
  while (divisor <= numero) {
    if (divisor === numero && numero % divisor === 0) {
        console.log(numero + ' é um numero primo ');
        break;
        
      }else if(numero % divisor === 0){
        console.log(numero + ' náo é um numero primo ');
        break
      } 
       else {
        divisor++;
      }

};}



