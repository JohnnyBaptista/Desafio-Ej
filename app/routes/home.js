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
				let data = dataAtualFormatada();
				console.log(data);
				application.app.controllers.homeController.mudaData(application, req, res, id, data);
			}
	});
	
}

function dataAtualFormatada() {
	var data = new Date(),
		dia = data.getDate().toString(),
		diaF = (dia.length == 1) ? '0' + dia : dia,
		mes = (data.getMonth() + 1).toString(),
		mesF = (mes.length == 1) ? '0' + mes : mes,
		anoF = data.getFullYear();
	return anoF + "-" + mesF + "-" + diaF;
}