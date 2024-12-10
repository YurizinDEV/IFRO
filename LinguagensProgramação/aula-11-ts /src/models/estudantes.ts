import { Cidades } from "./cidades";

export interface Estudantes {
    id: number;
    nome: string;
    email: string;
    cidade: Cidades;
}