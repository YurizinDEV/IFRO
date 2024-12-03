//EXERCÍCIO 5
/*Crie um enum chamado Prioridade com os valores
Baixa, Média, e Alta. Em seguida, escreva uma função
que recebe uma prioridade e retorna uma descrição
correspondente:
Baixa: "Essa tarefa pode ser feita depois."
Média: "Essa tarefa deve ser feita em breve."
Alta: "Essa tarefa é urgente!" */

enum Prioridade{
    Baixa,
    Média,
    Alta
}
function prioridadeDescricao(prioridade: Prioridade){
    switch(prioridade){
        case Prioridade.Baixa:
            console.log("Essa tarefa pode ser feita depois.");
            break;
        case Prioridade.Média:
            console.log("Essa tarefa deve ser feita em breve.");
            break;
        case Prioridade.Alta:
            console.log("Essa tarefa é urgente!");
            break;
    }
}

prioridadeDescricao(Prioridade.Alta)