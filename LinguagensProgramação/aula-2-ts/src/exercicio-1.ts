//EXERCÍCIO 1
/*Crie uma função chamada calcularArea que aceita dois
parâmetros: largura e altura. Ambos os parâmetros
devem ser do tipo number. A função deve retornar a
área do retângulo como um número.*/


function areaRetangulo(largura: number, altura: number){
    let area: number = largura * altura;
    return area;
};

console.log(areaRetangulo(10,10));
