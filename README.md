# Projeto-Next-Level-Week-7-Heat
 

ctrl + shift + p > reload window
ao criar seu type personalizado, coloque a propiedade ``"typeRoots": ["./src/@types", "node_modules/@types"]`` no ts.config


Tecnologias Utilizadas:

* Vite - Fast Refresh(ts, jsx, css, webpack);



# aula REACT JS



## Comandos utilizados:

* ``yarn create vite web --template react-ts`` cria o projeto vite
* ``cd web`` - entra no diretorio front-end
* ``yarn`` - instala os pacotes
* ``yarn add sass -D`` - instala o sass






# Aula NODE JS




## .Env Vars:
```.env
GITHUB_CLIENT_SECRET=...
GITHUB_CLIENT_ID=...

JWT_SECRET=... aleatory key md5
```


## Requests Do Servidor:
Preferi optar por não utilizar do insominia, pois estou estudando mais sobre o fetch então quis optar por fazer manualmente as requisições, deu super certo :D

---
* Entre em ``http://localhost:4000/github`` para receber o _codigo_do_usuario

```javascript
// Autenticar

fetch("http://localhost:4000/authenticate", {
    method: "POST",
    body: JSON.stringify({
            code: "_codigo_do_usuario"
        }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
}).then((res) => res.json()).then(console.log);
``` 
---
```javascript
// Criar mensagem

fetch("http://localhost:4000/messages", {
    method: "POST",
    body: JSON.stringify({
            message: "Alguma_mensagem_interessante"
        }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'authorization': 'Bearer _authToken'
    },
}).then((res) => res.json()).then(console.log);
```
---
```javascript
// Perfil do usuário

fetch("http://localhost:4000/profile", {
    method: "GET",
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'authorization': 'Bearer authToken'
    },
}).then((res) => res.json()).then(console.log);
```
--- 
```javascript
// pegar 3 ultimas mensagens

fetch("http://localhost:4000/messages/last3", {
    method: "GET",
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
}).then((res) => res.json()).then(console.log);
```
---



## Comandos Utilizados:

* ``yarn init -y`` - Inicia o projeto com o package.json
* ``yarn add express`` - Instala o express
* ``yarn add -D @types/express typescript ts-node-dev`` - Instala o typescript.
* ``yarn tsc --init`` - Configuração do typescript. (deixe o strict em false, es 2017).
* ``yarn add prisma -D`` - Instala o [prisma.io](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgres)
* ``yarn prisma init`` - inicia o prisma.
* ``yarn add dotenv`` - para acessar aquivos de ambiente (.env)
* ``yarn add axios`` - instala o axios.
* ``yarn add @types/axios -D`` - typescript do axios.
* ``yarn add jsonwebtoken`` - token JWT.
* ``yarn add @types/jsonwebtoken -D`` - typescript do JWT.
* ``yarn add @prisma/client`` - instala o prisma.
* ``yarn prisma migrate dev`` - Atualizar o banco de dados, tipo um ``yarn install`` para o arquivo schema.prisma
* ``yarn dev`` - executa o script para iniciar o servidor
* ``yarn prisma studio`` - abre o gerenciador do banco de dados!
* ``yarn add socket.io`` - instala o websockets, gerenciamento de pacotes co coneção em tempo real?
* ``yarn add @types/socket.io -D`` - tipagem.
* ``yarn add cors`` - permite ou barra requisições na aplicação.
* ``yarn add @types/cors -D`` - tipagem.