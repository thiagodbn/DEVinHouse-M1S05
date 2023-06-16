/**
 * [M1S05] Ex 6 - Percorrer array de objetos de produtos
 *
 * Escreve um programa que percorre um array de objetos que representam produtos e exibe o nome
 * e o preço de cada produto. Após imprimir essas informações, imprime o total de produtos
 * e o valor total de todos os produtos.
 */

let produtos = [
    { nome: 'Paracetamol', preco: 8.50, quantidade: 5 },
    { nome: 'Dipirona', preco: 6.50, quantidade: 3 },
    { nome: 'Omeprazol', preco: 15.80, quantidade: 7 },
    { nome: 'Amoxicilina', preco: 12.10, quantidade: 2 },
    { nome: 'Ibuprofeno', preco: 10.50, quantidade: 4 },
    { nome: 'Dorflex', preco: 9.50, quantidade: 6 },
    { nome: 'Ranitidina', preco: 7.30, quantidade: 1 },
    { nome: 'Dexametasona', preco: 18.50, quantidade: 8 },
    { nome: 'Fluoxetina', preco: 14.20, quantidade: 9 },
    { nome: 'Atenolol', preco: 11.60, quantidade: 10 }
]

let nomeDesejado = 'Paracetamol'; // Nome do produto desejado
let produtoEncontrado = null; // Variável para armazenar o objeto encontrado

// Percorre o array de produtos
for (let i = 0; i < produtos.length; i++) {
  if (produtos[i].nome === nomeDesejado) {
    produtoEncontrado = produtos[i]; // Armazena o objeto encontrado
    break; // Interrompe o loop assim que encontrar o objeto desejado
  }
}

// Verifica se o objeto foi encontrado
if (produtoEncontrado) {
    console.log(nomeDesejado)
  console.log(`Quantidade: ${produtoEncontrado.quantidade}`);  
  console.log(`O Preço é R$ ${produtoEncontrado.preco}`);
  
} else {
  console.log('Produto não encontrado.');
}

// Percorre o array de produtos e verifica a quantidade total disponivel
let qntTotal = 0

for (let i = 0; i < produtos.length; i++) {
    qntTotal += produtos[i].quantidade
  }

  console.log(`Total de produtos disponiveis ${qntTotal}`)

 // Percorre o array de produtos e verifica total preço (somatorio quantidade * Preço)
let qntPreco = 0

for (let i = 0; i < produtos.length; i++) {
    qntPreco += produtos[i].quantidade * produtos[i].preco;
  }

  console.log(`Tem R$ ${qntPreco.toFixed(2)} em produtos`)