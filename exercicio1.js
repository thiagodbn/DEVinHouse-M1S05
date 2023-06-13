/**
 * [M1S05] Ex 1 - Classificação de idade
 *
 * Escreve um programa que atribui um valor a uma variável `idade` e determina
 * em qual categoria ela se enquadra: criança (0-12 anos), adolescente (13-17 anos),
 * adulto (18-59 anos) ou idoso (60 anos ou mais). Utiliza uma estrutura condicional
 * (if, else if, else).
 */

var idade = 60

if (idade < 0){
    console.log('idade invalida')
} else if (idade <= 12) {
    console.log('Criança')
}  else if (idade <= 17) {
    console.log('Adolescente')
}  else if (idade <= 59) {
    console.log('Adulto')
} else {
    console.log('Idoso')
}