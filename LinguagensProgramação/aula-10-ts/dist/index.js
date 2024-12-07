"use strict";
let idade = 20;
let nome = "Maria";
let pagamentoEfetuado = false;
idade = 18;
nome = "Maria da Silva";
pagamentoEfetuado = true;
//console.log(`Nome: ${nome}`);
//console.log(`Idade: ${idade}`);
//console.log(`Nome: ${nome} tem ${idade} ano(s)`);
// Enum
/*enum Direcao{
    Norte = "NORTE",
    Sul = "SUL",
    Leste = "LESTE",
    Oeste = "OESTE"
};
let direcaoTomada: Direcao = Direcao.Sul;
console.log(`Direção tomda: ${direcaoTomada}`);*/
var Cor;
(function (Cor) {
    Cor["Red"] = "#FF0000";
    Cor["Green"] = "#00FF00";
    Cor["Blue"] = "#0000FF";
})(Cor || (Cor = {}));
let corEscolhida = Cor.Red;
console.log(`Cor escolhida: ${corEscolhida}`);
//Testando commit