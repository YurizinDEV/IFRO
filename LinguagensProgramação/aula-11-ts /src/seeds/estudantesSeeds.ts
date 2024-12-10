import { cidades } from "./cidadesSeeds"
import { Estudantes } from "../models/estudantes";

export let alunos: Estudantes[] = [
    {id: 123456789, nome: "João", email: "joao@email.com", cidade : cidades[0]},
    {id: 987654321, nome: "Maria", email: "maria@email.com", cidade : cidades[1]},
    {id: 321654789, nome: "Pedro", email: "pedro@email.com", cidade : cidades[2]}
];
