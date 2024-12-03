/*interface Aluno {
    nome:string,
    idade:number,
    matriculado:boolean,
    pcd?:boolean

    endereco: { 
        logradouro:string,
        numero:string,
        bairro:string,
        cidade:string,
        estado:string
    }
    disciplina:string[]
}

let novoAluno = {
    nome:"Yuri",
    idade: 19,
    matriculado:true,
    
    endereco: {
        logradouro:"Rua 8208",
        numero:"5222",
        bairro:"Barão de Melgaço I",
        cidade:"Vilhena",
        estado:"Rôndonia"


    },
    disciplinas: ["Matemática", "Português"]
}

console.log(novoAluno);
console.log(novoAluno.nome);
console.log(novoAluno.endereco.logradouro);


//Operador Ternário
novoAluno.matriculado = false;
novoAluno.matriculado ? console.log("Matriculado: Sim") : console.log("Matriculado: Não")*/

interface Produto {
    nome: string,
    preço: number,
    categorias: string[],
    estoque: number
    vendidos: number
    promocao?: boolean
    disponivel: boolean  
}

let novoProduto = {
    nome:"Caneta",
    preço: 1.50,
    categorias: ["Papelaria","Escritório"],
    estoque: 100,
    vendidos: 50,
    promocao: null,
    disponivel: true
}

console.log(`Este produto é ${novoProduto.nome}`)
console.log(`Este produto é das categorias ${novoProduto.categorias}`)

console.log(novoProduto.disponivel ? "Disponivel: Sim" : "Disponivel: Não")
console.log(novoProduto.promocao ? "Promoção: Sim" : "Promoção: Não")