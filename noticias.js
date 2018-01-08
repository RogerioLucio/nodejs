/* Aula 01

//Biblioteca http
var http = require('http');

//Subindo um servidor com nodeJs
// req requisicao
// res resposta
var server = http.createServer(function(req,res){

res.end("<html><body>Portal de noticias</body></html>");

//Definição de portas
//}).listen(3000);
});

//ou 

server.listen(3000);

*/

/* Aula 02 */
 
var http = require('http');
	
	
 
var server = http.createServer(function(req,res){
	var categoria = req.url;

	/* Urls */
	if(categoria == '/tecnologia'){
			res.end("<html><body>Portal de tecnologias</body></html>");

	}else if(categoria == '/moda'){

			res.end("<html><body>Portal de moda</body></html>");

	}else{
			res.end("<html><body>Principal</body></html>");
	}	




//Definição de portas
//}).listen(3000);
}).listen(3000);