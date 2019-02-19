var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static('./app/public'));
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended : true}));
app.use(expressValidator());

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/controllers')
	.then('app/models')
	.into(app);


module.exports = app;