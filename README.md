# Battle PvP RPG (Role Playing Game).

 Para este projeto, você deverá aplicar os princípios da arquitetura SOLID e os princípios de POO em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos RPG (Role Playing Game).

Neste projeto criei um banco de dados de personagens e criamos batalhas simulandas entre personagens.

Utilizei uma aplicação em Node.js, utilizando Docker Compose pra rodar toda aplicacao.

Utilizando os conceitos de SOLID.

Utilizei a Arquitetura POO (Programação Orientada a Objetos).



## Stack utilizada

**Back-end:** Node.js, TypeScript, SOLID, POO.


## Instruções de utilização

Recomendo utilizar o [Docker](https://www.docker.com/) para rodar o seu projeto, assim como o [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) para testar as rotas diretamente no [VSCode](http://vscode.dev).

### Clone o projeto

- Usando [Github-Cli](https://cli.github.com/):
```bash
 gh repo clone WeydsonCristiano/TrybeAndDragons

```
- Usando SSH:
```bash
  git clone git@github.com:WeydsonCristiano/TrybeAndDragons
.git
```
Após isso, acesse a pasta do projeto:
```bash
cd TrybeAndDragons

```

### Rodando com Docker

- Faça o docker-compose
```bash
  docker-compose up -d
```

- Acesse o terminal do container em modo iterativo

```bash
  docker exec -it TrybeAndDragons
 bash
```

- Instale as dependências

```bash
  npm install
```

- Inicie o sistema!
```bash
npm run dev
```
