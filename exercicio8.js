/**
 * [M1S05] Ex 8 - Teste de funções da calculadora
 *
 * Escreve uma função chamada `calculadora` que recebe três parâmetros: dois números e uma função de operação
 * matemática. A função `calculadora` executa a operação matemática nos dois números fornecidos e retorna o resultado.
 * Testa a função utilizando diferentes operações como adição, subtração, multiplicação e divisão.
 */

function Calculadora(num1, num2, operador){
    if (operador === '+' ){
        result = num1 + num2
    } else if (operador === '-') {
        result = num1 - num2
    } else if (operador === '*') {
        result = num1 * num2
    } else if (operador === '/') {
        result = num1 / num2
    }else  {
        result = 'Invalido'
    }
    
    console.log(result)
}

Calculadora(1,3,'+')
Calculadora(10,6,'-')
Calculadora(2,2,'*')
Calculadora(8,2,'/')
Calculadora(1,2,'P')