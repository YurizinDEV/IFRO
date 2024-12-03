/*1) Implementação de um Sistema de Inventário
Crie uma aplicação em TypeScript para gerenciar o inventário de produtos de uma loja. Siga os requisitos abaixo:
Crie uma interface Produto com os seguintes campos:
id (UUID): um identificador único para o produto.
nome (string): o nome do produto.
preco (número): o preço do produto.
quantidade (número): a quantidade disponível no estoque.
Crie funções que implementem as seguintes funcionalidades:
Um método addProduto(produto: Produto): void para adicionar um produto ao inventário.
Um método removerProduto(id: number): void para remover um produto pelo ID.
Um método atualizarQuantidade(id: number, quantidade: number): void para atualizar a quantidade de um produto no estoque.
Um método getValorTotal(): number para calcular o valor total dos produtos no inventário.
Teste as funcionalidades:
Adicione 3 produtos ao inventário.
Atualize a quantidade de um dos produtos.
Remova um produto.
Imprima o valor total do inventário.
 */

import { v4 as uuidv4 } from 'uuid';

interface Produto {
    id: string;
    nome: string;
    preco: number;
    quantidade: number;
}

class Inventario {
    private produtos: Produto[] = [];

addProduto(produto: Produto): void {
    this.produtos.push(produto);
}

removerProduto(id: string): void {
    this.produtos = this.produtos.filter((produto) => produto.id !== id);
}

atualizarQuantidade(id: string, quantidade: number): void {
    const produto = this.produtos.find((produto) => produto.id === id);
    if (produto) {
        produto.quantidade = quantidade;
    }
}

getValorTotal(): number {
    return this.produtos.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0)}
}

// Testando as funcionalidades
const inventario = new Inventario();

const produto1: Produto = {
  id: uuidv4(),
  nome: 'Notebook',
  preco: 1200,
  quantidade: 5,
};
const produto2: Produto = {
    id: uuidv4(),
    nome: 'Mouse',
    preco: 50,
    quantidade: 10,
};

const produto3: Produto = {
    id: uuidv4(),
    nome: 'Teclado',
    preco: 80,
    quantidade: 8,
};

inventario.addProduto(produto1);
inventario.addProduto(produto2);
inventario.addProduto(produto3);

console.log(inventario);

console.log(inventario.getValorTotal());
inventario.removerProduto(produto1.id);
console.log(inventario);

console.log(inventario.getValorTotal());
inventario.atualizarQuantidade(produto2.id, 15);
console.log(inventario.getValorTotal());

