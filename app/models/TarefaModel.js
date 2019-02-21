function TarefaModel(connection) {
	this._connection = connection;
}

TarefaModel.prototype.getTarefas = function(callback) {
	this._connection.query('select * from tarefa', callback);
};

TarefaModel.prototype.salvarTarefa = function(tarefa, callback) {
	this._connection.query("insert into tarefa set ?", tarefa, callback);
};

module.exports = function() {
	return TarefaModel;
}