/**
 * [M1S05] Ex 2 - Tradução de cores
 *
 * Escreve um programa que atribui um valor a uma variável `cor` em inglês e imprime
 * a tradução para a mesma cor em português. Utiliza uma estrutura condicional (switch)
 * para fazer o mapeamento das cores.
 */

var cor = 'WhiTe' 

switch (cor.toLowerCase()){
    case 'red': console.log('Vermelho');
    break;
    case 'blue': console.log('Azul');
    break;
    case 'green': console.log('Verde');
    break;
    case 'yellow': console.log('Amarelo');
    break;
    case 'pink': console.log('Rosa');
    break;
    case 'purple': console.log('Roxo');
    break;
    case 'brown': console.log('Marrom');
    break;
    case 'Orange': console.log('Laranja');
    break;
    case 'white': console.log('Branco');
    break;
    
    default:    console.log(`Desculpe, ${cor} não é uma cor valida.`);
}