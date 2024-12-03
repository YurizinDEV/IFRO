/*
2) Gerenciamento de Produtos
Crie uma lista de produtos e exiba-os formatados.
Defina uma interface Produto com os campos id, nome e preço.
Crie um array de produtos.
Use o método forEach para exibir cada produto no formato: "Produto: Nome (R$ Preço)".
Obs.: utilize o pacote npm chalk para formatar a saída no console.
*/
import { v4 as uuid } from 'uuid';
const idProduto: string = uuid();

import chalk from 'chalk';

interface Produto {
    id: string;
    nome: string;
    preco: number;
}

let produtos: Produto[] = [
    { id: idProduto, nome: "Cadeira", preco: 50.00},
    { id: idProduto, nome: "Monitor", preco: 200.00},
    { id: idProduto, nome: "Teclado", preco: 80.00}
];

produtos.forEach(produto => {
    console.log(chalk.red(`Produto: ${produto.nome} (R$ ${chalk.green(produto.preco)})`));
});
