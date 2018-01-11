


module.exports.formulario_inclusao_noticia = function(application, req, res){
  res.render('admin/form_add_noticia', {validacao:{}, noticia:{}});
}


module.exports.noticias_salvar = function(application, req, res){

  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.noticiasDAO(connection);
  //Obtém o corpo da requisição
  var noticia = req.body;
  //Validação Titulo
  req.assert('titulo','Titulo é Obrigatório').notEmpty();
  //Validação Resumo
  req.assert('resumo','resumo é Obrigatório').notEmpty();
  req.assert('resumo','resumo é Obrigatório').notEmpty();
  req.assert('resumo','O resumo de deve conter entre 10 e 100 caracters').len(10,100);
  //Validação Autor
  req.assert('autor','O Autor é Obrigatório').notEmpty();
  //Validação Data
  req.assert('data_noticia','O Autor é Obrigatória').notEmpty();
  //Validação Notícia
  req.assert('noticia','A notícia é Obrigatória').notEmpty();
  var erros = req.validationErrors();

  if(erros){
    res.render('admin/form_add_noticia', {validacao:erros, noticia : noticia});
    return;
  }

  noticiasModel.salvarNoticia(noticia,function(error, result){
    res.redirect('/noticias');
  });
};
