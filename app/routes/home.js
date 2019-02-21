module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.homeController.index(application, req, res);
	});

	application.get('/tarefas/status/:id', function(req, res){
		var id = req.params.id;
		application.app.controllers.homeController.mudaStatus(application, req, res, id);
	});
	
}