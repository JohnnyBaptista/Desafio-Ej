module.exports.index = function(application, req, res){
	var connection = application.config.dbConnection();
	var model = new application.app.models.TarefaModel(connection);
	model.getTarefas(function(error, result){
		res.render('home/index', {tarefas : result});
	})

}
