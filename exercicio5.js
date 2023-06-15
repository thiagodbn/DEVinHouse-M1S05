/**
 * [M1S05] Ex 5 - Verificar palavras em um array
 *
 * Escreve um programa que percorre um array de palavras e exibe todas as palavras que possuem
 * mais de 5 caracteres. Utiliza a estrutura de repetição for of para percorrer o array.
 */


let palavras = ['Amar', 'Sol', 'Mar', 'Cão', 'Bola', 'Livro',
 'Amigo', 'Carro', 'Chave', 'Pão', 'Arroz', 'Faca', 'Tesoura',
'Avião', 'Navio', 'Praia', 'Pessoa', 'Colher', 'Elefante', 'Cavalo',
'Piano', 'Computador', 'Travesseiro', 'Universo',]

let palavrasUp = []

var caracteres = 5  //caracteres ou mais

for (let palavra of palavras) {
    if(palavra.length>=caracteres){
        palavrasUp.push(palavra)
    }
  }
  console.log(`Palavras com mais de ${caracteres} letras`)
  console.log(palavrasUp);