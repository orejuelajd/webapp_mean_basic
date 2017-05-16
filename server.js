var http = require('http');
var express = require('express');
var service = require('./service.js');
var bodyParser = require('body-parser');
var app = express();
var port = 8080;

app.use(bodyParser.urlencoded({ limit: '10mb', extended: true}));
app.use(bodyParser.json({limit: '10mb'}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

function supportCrossOriginScript(req, res, next) {
	res.status(200);
	res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE');
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type");
	next();
}

app.use(express.static(__dirname + "/app"));
app.get('/create/:collection/:v1/:v2/:v3/:v4/:v5/:v6/:v7/:v8',service.create);
app.get('/read/:collection',service.read);
app.get('/delete/:collection/:param/:value',service.delete);
app.get('/read/:collection/:param/:value',service.readX);
app.get('/read/:collection/:param1/:value1/:param2/:value2',service.readX2);

http.createServer(app).listen(port);
console.log("Servidor Backend por el puerto " + port);