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
novoAluno.matriculado ? console.log("Matriculado: Sim") : console.log("Matriculado: Não")

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
console.log(novoProduto.promocao ? "Promoção: Sim" : "Promoção: Não")*/



function validarCpf(cpf: string) {
    let divisor1: number = 10;
    let resultado1: number = 0;
    let primeiroVerificador: number = 0;

    //Primeiro digito verifcador
    for (let i = 0; i < 9; i++) {
        resultado1 = resultado1 + parseInt(cpf[i]) * divisor1
        divisor1--;
    }

    //console.log("A soma é " + resultado1);
    let resto: number = resultado1 % 11;
    //console.log("O resto é " + resto);

    if (resto >= 10) {
        resto = 0;
    } else {
        primeiroVerificador = 11 - resto;
    }
    console.log("Primeiro digito vericador: " + primeiroVerificador);


    //segundo digito verificador
    let resultado2: number = 0;
    let divisor2: number = 11;
    let segundoVerificador: number = 0;

    for (let i = 0; i < 10; i++) {
        resultado2 = resultado2 + parseInt(cpf[i]) * divisor2
        divisor2--;
    }

    //console.log("A soma é " + resultado2);
    let resto2: number = resultado2 % 11;
    //console.log("O resto é " + resto2);

    if (11 - resto2 >= 10) {
        segundoVerificador = 0;
    } else {
        segundoVerificador = 11 - resto2;
    }
    console.log("Segundo digito vericador: " + segundoVerificador);

    parseInt(cpf[9]) == primeiroVerificador && parseInt(cpf[10]) == segundoVerificador ?
        console.log('É um CPF válido!') : console.log('É um CPF inválido!')

    // Verificando estado de emissão
    let digitoDoEstado = parseInt(cpf[8])
    switch (digitoDoEstado) {
        case 0:
            console.log('Pode ter sido emitido no(s) seguintes estado(s): Rio Grande do Sul')
            break;
        case 1:
            console.log('Pode ter sido emitido no(s) seguintes estado(s): Distrito Federal, Goiás, Mato Grosso do Sul e Tocantins')
            break
        case 2:
            console.log('Pode ter sido emitido no(s) seguintes estado(s): Pará, Amazonas, Acre, Amapá, Rondônia e Roraima')
            break
        case 3:
            console.log('Pode ter sido emitido no(s) seguintes estado(s): Ceará, Maranhão e Piauí')
            break
        case 4:
            console.log('Pode ter sido emitido no(s) seguintes estado(s): Pernambuco, Rio Grande do Norte, Paraíba e Alagoas')
            break
        case 5:
            console.log('Pode ter sido emitido no(s) seguintes estado(s): Bahia; e Sergipe')
            break
        case 6:
            console.log('Pode ter sido emitido no(s) seguintes estado(s): Minas Gerais')
            break
        case 7:
            console.log('Pode ter sido emitido no(s) seguintes estado(s): Rio de Janeiro e Espírito Santo')
            break;
        case 8:
            console.log('Pode ter sido emitido no(s) seguintes estado(s): São Paulo')
            break;
        case 9:
            console.log('Pode ter sido emitido no(s) seguintes estado(s): Paraná e Santa Catarina')
            break;
    }
};

validarCpf("12345678900");