//require de modulos
var express = require('express');
var consign  = require ('consign');
var bodyParser = require('body-parser');
// inciando o servidor
var app = express();

// configurando vies
app.set('view engine', 'ejs');
app.set('views','./app/views');
app.use(bodyParser.urlencoded({extended:true}));

// consign reconhece e cria as rotas
consign()
	.include('./app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.into(app);


module.exports = app;