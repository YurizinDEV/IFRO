//EXECÍCIO 4
/*Você deve criar um enum chamado Nota que
represente as notas de um aluno. As notas podem ser:
A, B, C, D, e F. Em seguida, escreva uma função que
recebe uma nota e retorna uma mensagem com base
na seguinte lógica:
A: "Excelente"
B: "Bom"
C: "Satisfatório"
D: "Insatisfatório"
F: "Reprovado"*/

/*enum Nota {A, B, C, D, F};

function notaDescricao(notaFinal: Nota){
    switch(notaFinal){
        case Nota.A:
            console.log("Excelente");
            break;
        case Nota.B:
            console.log("Bom");
            break;
        case Nota.C:
            console.log("Satisfatório");
            break;
        case Nota.D:
            console.log("Insatisfatório");
            break;
        case Nota.F:
            console.log("Reprovado");
            break;
    }
};

notaDescricao(Nota.A);*/


/*enum Nota { 
    A = "Excelente",
    B = "Bom",
    C = "Satisfatório",
    D = "Insatisfatório",
    F = "Reprovado"}

function notaDescricao(notaString: string){
    switch(notaString){
        case "A":
            console.log(`Você está ${Nota.A}`);
            break;
        case "B":
            console.log(`Voce está ${Nota.B}`);
            break;
        case "C":
            console.log(`Você está ${Nota.C}`);
            break;
        case "D":
            console.log(`Você está ${Nota.D}`);
            break;
        case "F":
            console.log(`Você está ${Nota.F}`);
        break;
        default: console.log("Insira uma nota válida")
    }
}

notaDescricao("K")*/

enum Nota {
    A = "Excelente",
    B = "Bom",
    C = "Satisfatório",
    D = "Insatisfatório",
    F = "Reprovado"
};

function notaDescricao(notaFinal: Nota) {
    console.log(`VocÊ está ${notaFinal}`)
};

notaDescricao(Nota.A);
