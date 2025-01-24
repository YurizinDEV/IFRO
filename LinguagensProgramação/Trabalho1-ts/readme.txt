npm i commander uuid bcrypt fs
npm i --save-dev @types/bcrypt 


Projeto de Cadastro e Gerenciamento de Usuários
Este projeto tem como objetivo cadastar, gerenciar e listar usuários, bem como seus respectivos papéis. Foi desenvolvido em TypeScript, fazendo uso de arquivos CSV para persistência de dados. As principais funcionalidades incluem:


Pré-requisitos
Para executar este projeto, você precisará ter instalado em seu ambiente:

Node.js 
npm 
TypeScript 


Instalação e Configuração

Clonar o repositório
git clone https://github.com/exemplo/projeto-usuarios.git  
Entrar na pasta do projeto
cd projeto-usuarios  

Instalar as dependências:
npm install  

Verificar a configuração do TypeScript
Certifique-se de que o projeto possui o arquivo tsconfig.json. Ele contém as configurações de compilação necessárias. Caso queira fazer ajustes (pasta de saída, esTarget, etc.), edite esse arquivo.

Estrutura do Projeto
A estrutura de pastas do projeto segue o padrão abaixo:

projeto-usuarios/  
│  
├─ data/  
│  ├─ usuarios.csv             # Dados dos usuários  
│  
├─ models/  
│  └─ usuario.ts               # Modelo (interface) de usuário  
│  
├─ services/  
│  ├─ csvService.ts            # Serviço de leitura/gravação de CSV  
│  ├─ usuarioService.ts        # Serviço de lógica para usuários  
│  └─ ...                      # Outros serviços  
│  
├─ commands/  
│  ├─ cadastrar.ts             # Comando para cadastrar usuários  
│  ├─ listar.ts                # Comando para listar usuários  
│  └─ ...                      # Outros comandos (ex: editar, remover)  
│  
├─ seeds/  
│  ├─ seedPapeis.ts            # Script para inserir seeds de papéis  
│  ├─ seedUsuarios.ts          # Script para inserir seeds de usuários  
│  
├─ src/  
│  └─ index.ts                 # Arquivo principal (entry point) do programa  
│  
├─ package.json  
├─ tsconfig.json  
└─ README.md                   # Este arquivo  


Scripts Disponíveis
No arquivo package.json, temos alguns scripts úteis:

start: Executa o projeto (após compilação)
build: Compila o projeto em TypeScript, gerando a pasta dist/
seed: Executa todos os scripts de seed (inserção de dados iniciais no CSV)

Exemplo de scripts no package.json:

"scripts": {  
  "build": "tsc",  
  "start": "node dist/src/index.js",  
  "seed": "node dist/seeds/seedPapeis.js && node dist/seeds/seedUsuarios.js"  
}  

Como Executar

Compilar o projeto
npm run build  

Executar o programa
npm run start  

Rodar os comandos
Dependendo de como seu projeto está configurado, você pode rodar os comandos de listagem, cadastro, etc., de duas maneiras:

Usando o arquivo index.js compilado:
node dist/src/index.js listar  
node dist/src/index.js cadastrar --nome="Fulano" --email="fulano@example.com" ...  

Ou, se estiver usando o Commander e tiver configurado scripts no package.json, algo como:
npm run start -- listar  
Verifique o arquivo index.ts (ou seu ponto de entrada) para ver qual abordagem está sendo usada.

Seeds
Para popular o projeto com dados iniciais (papeis e usuários), utilize os scripts de semente (seeds). Os scripts criam ou sobrescrevem os arquivos papeis.csv e usuarios.csv na pasta data.

Compilar as seeds (caso ainda não tenha compilado)
npm run build  

Executar as seeds
Geralmente basta rodar:
npm run seed  

Esse comando executará:

node dist/seeds/seedPapeis.js && node dist/seeds/seedUsuarios.js  
Verifique se nos scripts do package.json há referência aos arquivos de seeds.

Confirmar os arquivos CSV
Após a execução, os arquivos usuarios.csv na pasta data/ conterão ao menos 3 usuários de exemplo.

Testando as Funcionalidades
Abaixo estão exemplos de como testar cada parte do projeto via linha de comando:

-------------------------------------------------------------------------------------------------
Listar Usuários

node dist/src/index.js listar 
ou 
npm run start -- listar  

Exibe uma tabela com todos os usuários.
Opção adicional: --id <id> para buscar um usuário específico.

-------------------------------------------------------------------------------------------------
Cadastrar Usuários

node dist/src/index.js cadastrar --nome="Fulano da Silva" --email="fulano@example.com" --papel="Viewer" --status  
Pode haver outras opções, como senha, dependendo da implementação.

-------------------------------------------------------------------------------------------------
Editar Usuários (Caso tenha um comando chamado editar)

node dist/src/index.js editar --id=1 --nome="Fulano Editado" --email="fulanoedit@example.com"  
Exemplo para atualizar nome e email do usuário com ID 1.

-------------------------------------------------------------------------------------------------
Remover Usuários (Caso tenha um comando chamado remover)

node dist/src/index.js remover --id=1  
Remove o usuário com ID 1.
-------------------------------------------------------------------------------------------------
Listar ou Gerenciar Papéis

Se houver comandos específicos para gerenciar papéis, teste-os de forma similar:
node dist/src/index.js listar-papeis  
node dist/src/index.js criar-papel --nome="Supervisor" --descricao="Acesso parcial"  

-------------------------------------------------------------------------------------------------
Verificar Conteúdo dos Arquivos CSV

Abra data/usuarios.csv e data/papeis.csv para validar se luz atualizado corretamente.

Licença
Este projeto está disponível sob a licença MIT. Sinta-se livre para usar, modificar e distribuir conforme necessário.