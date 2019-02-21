module.exports = function(application) {
	application.get('/admin', function(req, res){
		application.app.controllers.adminController.index(application, req, res);
	});

	application.post('/tarefas/salvar', function(req, res){
		application.app.controllers.adminController.salvar_tarefa(application, req, res);
	});
}