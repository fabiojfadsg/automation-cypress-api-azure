![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)
# automation-api-cypress

Projeto responsável por automatizar as principais funcionalidades api do produto empresa API utilizando o framework cypress

## Pré-requisitos

Para executar esse projeto é necessário:

- git
- Node.js
- NPM


Github:

- git clone `https://github.com/empresa/automation-cypress-api`

## Instalação das dependências de desenvolvimento

Uma vez que todas as dependências já estão listadas no arquivo `package.json`, basta executar o comando `npm install` na raiz do projeto.

## Execução do projeto

`npm run open:stage`- Executa o modo interativo do Cypress no ambiente de stage

`npm run test:stage`- Executa os testes no ambiente de stage
## Arquitetura e design pattern

Nesse projeto foi utilizado um pattern muito comum em testes api, porém explorando os recursos do Cypress. Segue a estrutura do projeto:

`components` - Pasta responsável por armazenar os componentes das páginas.  ex: Menu

`config` - Pasta responsável por armazenar os arquivos referentes as massas de dados utilizadas no projeto. Atualmente o projeto tem suporte para os seguitnes ambientes: dev,uat e prod.

`integration` - Arquivos de teste (separados em subpastas que representam as funcionalidades do sistema);

`support/requests` - Arquivos com os comandos. Todos esses arquivos são adicionados ao `index.js` e os métodos são comandos customizados do Cypress (tornam-se acessíveis através do objeto `cy` em qualquer contexto de teste do projeto);

## Integração contínua

Foi implementada a integração contínua com Github no projeto. O arquivo de configuração do CI é o seguinte: `ci.yaml`. Em todo push no branch `main` ou pull_request o pipeline é executado.

## Execução CI/CD:
 - Buscar repositorio : `https://github.com/empresa/automation-cypress-api/actions/workflows/ci.yaml`
 - Clicar em uma execução
 - Clicar no botão `Re-run all jobs`