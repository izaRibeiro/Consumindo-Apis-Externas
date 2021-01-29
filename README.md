# Consumindo-Apis-Externas

Tal projeto foi desenvolvido em Vue e Node a fim de consumir algumas APIS externas. 

Para a execução do back, basta rodar o comando `npm run dev`
.Enquanto para o front, é preciso rodar o `npm run serve`.

A principio, é possível realizar login/cadastro de três formas: 
<ul>
  <li>Google</li>
  <li>Facebook</li>
  <li>Própria aplicação</li>
</ul>

De mode que, caso o usuário não exista previamente o mesmo será cadastrado em um banco de dados mongo.

Além disso, no interior da aplicação há uma comunicação com a SWAPI (API do star wars) de forma que o conteúdo retornado pela mesma é exibido em tela. Sendo possível a visualização de uma listagem dos filmes, espécies, naves e planetas. 

Vale realçar que para o desenvolvimento do projeto foram usadas algumas bibliotecas externas, como axios, nodemon, eslin, vuetify, entre outras. 
