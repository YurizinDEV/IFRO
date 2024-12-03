/*let nomes: string[] = ["Maria", "João", "Ana", "Pedro"];

console.log(nomes[1]);
console.log(nomes);

nomes.forEach (function (nome) {
    console.log(nome);
})

nomes.forEach (nome => console.log(nome));

interface Produto {
    descricao: string;
    preco: number;
}

let meusProdutos: Produto[] = [
    {descricao: "Camiseta", preco: 15.99},
    {descricao: "Calça", preco: 25.99},
    {descricao: "Bolsa", preco: 10.99}
];

console.log(meusProdutos.length);
console.log(meusProdutos[1].descricao);

meusProdutos.forEach(produto => console.log(produto.descricao));

let produtosSelecionados: Produto[] = meusProdutos.filter(produto => produto.preco < 20);
console.log(produtosSelecionados);*/

interface Pessoa {
    nome: string;
    idade: number;
}

let pessoas: Pessoa[] = [
    {nome:"Yuri", idade:19},
    {nome:"Vinicius", idade:17},
    {nome:"Tartas", idade:62},
    {nome:"Luiz", idade:50},
    {nome:"Arthur", idade:60}
];

let pessoasAdultas: Pessoa[] = pessoas.filter(pessoas => pessoas.idade >= 18);
pessoasAdultas.forEach(pessoas => console.log(pessoas.nome, pessoas.idade));

let pessoasIdosas: Pessoa[] = pessoas.filter(pessoas => pessoas.idade >= 60);
pessoasIdosas.forEach(pessoas => console.log(pessoas.nome, pessoas.idade));

/*---------------------------------------------------------------------------------*/

let palavras: string[] = [
    "ola",
    "mundo",
    "estou",
    "aprendendo",
    "typescript",
    "esta",
    "aula"
];

palavras.forEach(palavra => console.log(palavra, palavra.length));