module.exports.index = function(application, req, res){
	var connection = application.config.dbConnection();
	var model = new application.app.models.TarefaModel(connection);
	model.getTarefas(function(error, result){
		res.render('home/index', {tarefas : result});
	});
}

module.exports.mudaStatus = function(application, req, res, id){
	var connection = application.config.dbConnection();
	var model = new application.app.models.TarefaModel(connection);
	model.updateStatus(id, function(error, result){
		application.app.controllers.homeController.index(application, req, res);
	});
}

module.exports.mudaData = function(application, req, res, id, data) {
	const connection = application.config.dbConnection();
	const model = new application.app.models.TarefaModel(connection);
	model.updateData(id, data, function(error, result){
		if(error) console.log(error);
		application.app.controllers.homeController.mudaStatus(application, req, res, id);
	});
}