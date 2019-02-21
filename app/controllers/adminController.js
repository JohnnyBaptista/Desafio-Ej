module.exports.index = function(application, req, res){
	res.render('admin/index');
}

module.exports.salvar_tarefa = function(application, req, res){
	var connection = application.config.dbConnection();
	var model = new application.app.models.TarefaModel(connection);

	var tarefa = req.body;
	var status = {"status" : "0"};
	var result = Object.assign({}, tarefa, status);

	model.salvarTarefa(result, function(error, result){
		res.redirect("/");
	});

	console.log(result);
}