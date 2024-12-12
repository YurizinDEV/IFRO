import { cidades } from "./cidadesSeeds"
import { Estudantes } from "../models/estudantes";
import {v4 as uuid} from "uuid"

export let alunos: Estudantes[] = [
    {id:uuid(), nome: "João", email: "joao@email.com", cidade : cidades[0]},
    {id:uuid(), nome: "Maria", email: "maria@email.com", cidade : cidades[1]},
    {id:uuid(), nome: "Pedro", email: "pedro@email.com", cidade : cidades[2]}
];
