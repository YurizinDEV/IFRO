/*1) Gerenciamento de Usuários
Crie uma aplicação que gerencie usuários e seus papéis (roles).
Crie um enum Role com os valores: ADMIN, USER, GUEST.
Defina uma interface User com os campos: id, nome, role.
Utilize UUID para gerar o id.
Crie uma função que receba um array de usuários e filtre apenas os usuários com um determinado papel.
Obs.: utilize arquivos separados para implementar o exercícios.*/

import { v4 as uuid } from 'uuid';
const idUser: string = uuid();

enum Roles {
    ADMIN = "ADMIN",
    USER = "USER",
    GUEST = "GUEST"
}

interface User {
    id: string;
    nome: string;
    role: Roles;
}

const user1: User = {
    id: idUser,
    nome: "Administrador",
    role: Roles.ADMIN
};

const user2: User = {
    id: idUser,
    nome: "Usuario",
    role: Roles.USER
}

const userlist: User[] = [user1, user2];

function filterUsers(role:Roles){
    let filteredUsers: User[] = userlist.filter(user => user.role == role );
    filteredUsers.forEach(user => console.log(`Id:   ${user.id}\nNome: ${user.nome} \nRole: ${user.role}`));
};

(filterUsers(Roles.USER));

/*
let pessoasAdultas: Pessoa[] = pessoas.filter(pessoas => pessoas.idade >= 18);
pessoasAdultas.forEach(pessoas => console.log(pessoas.nome, pessoas.idade));
*/
