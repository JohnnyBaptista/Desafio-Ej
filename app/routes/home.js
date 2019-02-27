module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.homeController.index(application, req, res);
	});

	application.get('/tarefas/:status/:id', function(req, res){
		const id = req.params.id;
		const status = req.params.status;
		if (status != 1) 
			application.app.controllers.homeController.mudaStatus(application, req, res, id);
			else{
				application.app.controllers.homeController.mudaData(application, req, res, id);
			}
	});
	
}