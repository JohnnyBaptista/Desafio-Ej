function TarefaModel(connection) {
	this._connection = connection;
}

TarefaModel.prototype.getTarefas = function(callback) {
	this._connection.query('select * from tarefa', callback);
};

TarefaModel.prototype.salvarTarefa = function(tarefa, callback) {
	this._connection.query("insert into tarefa set ?", tarefa, callback);
};

TarefaModel.prototype.updateStatus = function(id, callback) {
	this._connection.query('update tarefa set status = status + 1 where id = '+id, callback);
};

TarefaModel.prototype.updateData = function(id, callback) {
	// UPDATE `table` SET date_date=now();
	const sql = "UPDATE tarefa set data_fim = now() WHERE id = "+id;
	this._connection.query(sql, callback);
};



module.exports = function() {
	return TarefaModel;
}