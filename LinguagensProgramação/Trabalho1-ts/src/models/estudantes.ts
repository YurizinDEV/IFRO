import { Cidades } from "./cidades";

export interface Estudantes {
    id: string;
    nome: string;
    email: string;
    cidade: Cidades;
}