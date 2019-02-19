function TarefaModel(connection) {
	this._connection = connection;
}

TarefaModel.prototype.getTarefas = function(callback) {
	this._connection.query('select * from tarefa', callback);
};

module.exports = function() {
	return TarefaModel;
}