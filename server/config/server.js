'use strict'

//Dependências do arquivo
console.clear();
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");


const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(routes);



//Definir o que o servidor irá escutar
const port = 1234;

//Configurando o servidor para escutar a porta definida
app.listen(port, () => {
 console.log(`Servidor rodando na porta ${port}`);
});