/*let hoje: Date = new Date();
console.log(hoje); //2024-11-04T23:16:38.773Z

console.log(hoje.toString());
console.log(hoje.toUTCString());
console.log(hoje.toISOString());

console.log(hoje.getFullYear());
console.log(hoje.getMonth());
console.log(hoje.getDate());
console.log(hoje.getDay());
console.log(hoje.getHours());
console.log(hoje.getMinutes());
console.log(hoje.getSeconds());
console.log(hoje.getMilliseconds());

console.log(hoje.getTimezoneOffset()); //-180

console.log(`Hoje: ${hoje.getDate()}/${hoje.getMonth()+1}/${hoje.getFullYear()} - ${hoje.getHours()}:${hoje.getMinutes()}:${hoje.getSeconds()}`)

let dataNascimento = new Date("2005-12-02");
console.log(dataNascimento);

let dataAtualizacaoDoSoftware = new Date("2024-11-05T10:30:00");
console.log(dataAtualizacaoDoSoftware);
console.log(dataAtualizacaoDoSoftware.toString());*/

interface Estudante {
    nome: string;
    dataNascimento: Date;
    dataCadastro: Date;

    endereco: {
        tipoLogradouro: tipoLogradouroEnum;
        logradouro: string;
        numero: string;
        bairro: string;
    }

    cidade: Cidade;
    uf: ufEnum;
}

enum tipoLogradouroEnum {
    RUA = "RUA",
        AVENIDA = "AVENIDA",
        TRAVESSA = "TRAVESSA",
        LOTE = "LOTE",
        OUTRO = "OUTRO"
}

enum ufEnum {
    AC = "Acre",
        AL = "Alagoas",
        AP = "Amapa",
        AM = "Amazonas",
        BA = "Bahia",
        CE = "Ceara",
        DF = "DistritoFederal",
        ES = "EspiritoSanto",
        GO = "Goias",
        MA = "Maranhao",
        MT = "MatoGrosso",
        MS = "MatoGrossoDoSul",
        MG = "MinasGerais",
        PA = "Para",
        PB = "Paraiba",
        PR = "Parana",
        PE = "Pernambuco",
        PI = "Piaui",
        RJ = "RioDeJaneiro",
        RN = "RioGrandeDoNorte",
        RS = "RioGrandeDoSul",
        RO = "Rondonia",
        RR = "Roraima",
        SC = "SantaCatarina",
        SP = "SaoPaulo",
        SE = "Sergipe",
        TO = "Tocantins"
}


interface Cidade {
    nome: string,
        estado: ufEnum;
};


// Criando uma cidade
let vilhena: Cidade = {
    nome: "Vilhena",
    estado: ufEnum.RO
}


let estudante: Estudante = {
    nome: "Yuri",
    dataNascimento: new Date("1990-05-15"),
    dataCadastro: new Date(),
    endereco: {
        tipoLogradouro: tipoLogradouroEnum.RUA,
        logradouro: "Rua das Flores",
        numero: "5222",
        bairro: "Bairro A"
    },
    cidade: vilhena,
    uf: ufEnum.RO
}


console.log(`Nome: ${estudante.nome}`);
console.log(`Data de Nascimento: ${estudante.dataNascimento.toLocaleDateString()}`);
console.log(`Data de Cadastro: ${estudante.dataCadastro.toLocaleDateString()}`);
console.log(`Tipo de Logradouro: ${estudante.endereco.tipoLogradouro}`);
console.log(`Logradouro: ${estudante.endereco.logradouro}`);
console.log(`Número: ${estudante.endereco.numero}`);
console.log(`Bairros: ${estudante.endereco.bairro}`);
console.log(`Cidade: ${estudante.cidade.nome}`);
console.log(`UF: ${estudante.uf}`);