/*Enum Estados
Interface Cidades
Interface Estudantes {id(uuid), nome, email, cidade/estados}
gravar em um arquivo com ; separando os dados dos estudantes*/

import fs from 'fs';
import { alunos } from "./seeds/estudantesSeeds";
import { Estudantes } from './models/estudantes';

const filePath: string = './data/Estudantes.txt';
let conteudo: string = "";

try{
    conteudo = fs.readFileSync(filePath, 'utf8');
}
catch(err){
    console.error(`${(err as Error).message}`);
}

let linhas: string[] = []; 

function inserirAluno (Aluno: Estudantes){
    linhas.push(`${Aluno.id};${Aluno.nome};${Aluno.email};${Aluno.cidade.nome};${Aluno.cidade.estado}`);
    try{
        fs.writeFileSync(filePath, linhas.join("\n"));
        console.log("\n----------- Arquivo atualizado com sucesso! ----------");
        linhas.forEach((linha, key) => console.log(`${key} - ${linha}`));
    }
    catch(err){
        console.error(`${(err as Error).message}`);
    }
}

inserirAluno(alunos[0]);
inserirAluno(alunos[1]);









