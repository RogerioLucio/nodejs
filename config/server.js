


//require de modulos
var express = require('express');
var consign  = require ('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');


// inciando o servidor
var app = express();

// configurando vies
app.set('view engine', 'ejs');
app.set('views','./app/views');
//Informa o caminho dos nossos arquivos estáticos
app.use(express.static('./app/public'))
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());

// consign reconhece e cria as rotas
consign()
	.include('./app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);
module.exports = app;
