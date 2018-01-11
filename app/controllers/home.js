
module.exports.index = function(application, req, res){
  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.noticiasDAO(connection);
  noticiasModel.getUltimasNoticias(function(error,result){
    res.render('home/index', {noticias: result});
  });

}
