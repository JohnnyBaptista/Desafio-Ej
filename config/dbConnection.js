var mysql = require('mysql'); 

var connMySQL = function(){
	console.log('Conexão com o Banco de Dados estabelecida!');
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '',
		database : 'projetoej'
	});

}
module.exports = function(){
	console.log('Modulo BD carregado');
	return connMySQL;
}