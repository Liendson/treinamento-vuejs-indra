## Projeto Gestão de Alunos

O objetivo do projeto é servir de base para o treinamento Interno de ".Net/Vuejs" da Indra, unidade de João Pessoa. Ministrado por Diego Pontes e Liendson Douglas.

### Documentação do Vue.js

- [Vue.js][ng]

## Configurando o Ambiente de Desenvolvimento

- Instalar o [Node.js][node] com o [Node Package Manager][npm]
- Utilizaremos o [Visual Studio Code][vscode] para desenvolvimento

- Instalar o [Vue Command Line (CLI)][cli] utilizando o seguinte comando:

```
npm install -g @vue/cli
```

- Instalar as dependências do projeto:

```
npm install
```

Levantar a aplicação:

```
cd [PROJECT NAME]
npm run dev
```

### Arquitetura do projeto

```
\node_modules - Diretório padrão para as dependências do projeto
\src - Diretório raiz da aplicação;
  \assets
  \components
  \mixins
  \pages
  \plugins
  \router
  \services
```

[vue]: https://vuejs.org/
[cli]: https://cli.vuejs.org/
[npm]: https://www.npmjs.com/get-npm
[vscode]: https://code.visualstudio.com/download
[node]: https://nodejs.org/pt-br/download/
