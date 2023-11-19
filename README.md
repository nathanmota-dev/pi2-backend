# Projeto de Sistema Web

Este é o Projeto Final da disciplina de Programação para internet 2 que consiste em desenvolver um Sistema Back-end e Front-end com os seguintes partes:

## Requisição Servidor-Servidor

- Realizar a requisição de dados brutos de um servidor dedicado, utilizando transferência por XML ou JSON.
- Especificamente para este semestre letivo, a requisição DEVERÁ ser a partir da API de Dados do IBGE, disponível em [IBGE API](https://servicodados.ibge.gov.br/api/docs/).
- Os dados obtidos devem ser processados para responder à parte seguinte.
- As consultas requisitadas devem ser armazenadas para responder à próxima parte.

## Requisição Cliente-Servidor

- Criar uma página (front-end) para que o usuário possa informar e/ou selecionar os dados de seu interesse.
- O servidor deve consultar o servidor de dados (parte a) e, como saída, deve preparar uma página para visualizar os resultados.
- Recomenda-se fortemente o uso da biblioteca D3 (https://d3js.org/) para a visualização de dados, onde apenas uma seção específica de dados é alterada.

## Histórico de consultas

- Modelar um Banco de Dados relacional para armazenar o histórico de buscas realizadas pelo usuário.
- Ressalta-se a importância da criação de índices eficientes para recuperar os dados, sendo uma parte essencial do projeto.
- Criar uma página de visualização do histórico que permita ao usuário consultar e remover as buscas realizadas.

## Tecnologias Utilizadas

Back-end:

- Express
- Nodemon
- Consign
- Knex.js

Front-End:

- React JS
- React Icons

API Externa:

- [API Nomes do IBGE](https://servicodados.ibge.gov.br/api/docs/nomes?versao=2)

## Como Executar

Siga as etapas abaixo para executar o projeto em sua máquina:

1. Clone o repositório:

   ```sh
   git clone https://github.com/nathanmota-dev/programacao-para-internet-2
   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd programacao-para-internet-2
   ```

3. Instale as dependências:

   ```sh
   npm install express nodemon consign knex
   ```

4. Inicie o servidor:

   ```sh
   npm run dev
   ```

O servidor estará em execução em `http://localhost:3000`.

## Contribuição

Fique à vontade para contribuir com melhorias, correções de bugs ou novos recursos. Basta criar um fork deste repositório, fazer as alterações e enviar um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).