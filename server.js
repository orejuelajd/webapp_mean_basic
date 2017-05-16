console.log('Servidor Basico');

var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 8080;

app.use(bodyParser.urlencoded({ limit: '10mb', extended: true}));
app.use(bodyParser.json({limit: '10mb'}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

function supportCrossOriginScript(req, res, next) 
{
	res.status(200);
	res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE');
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type");
	next();
}

var service = require('./service.js');

app.use(express.static(__dirname + "/app"));

app.get('/create/:collection/:v1/:v2/:v3/:v4/:v5/:v6/:v7/:v8',service.create);
app.get('/read/:collection',service.read);
app.get('/delete/:collection/:param/:value',service.delete);

//Métodos que se está utilizando actualmente
app.get("/registrar/:collection/:v1/:v2/:v3/:v4/:v5/:v6/:v7/:v8", service.registrar);
app.get("/login/:collection/:user/:password", service.login);
app.get('/read/:collection/:param/:value',service.readX);
app.get('/read/:collection/:param1/:value1/:param2/:value2',service.readX2);
app.get('/update/:collection/:v1/:v2/:v3/:v4/:v5/:v6/:v7/:v8/:id',service.update);
//app.get("/buscarUsuarios/:collection/:param/:value", service.buscarUsuarios);

app.get('/buscarPrestamo/:collection/:param1/:v1/:param2/:v2',service.buscarPrestamo);
app.get('/agregarElemento/:collection/:id/:v1/:v2',service.agregarElemento);
app.get('/agregarElemento/:collection/:id/:v1/:v2/:v3/:v4/:v5/:v6',service.agregarElemento2);
app.get('/eliminarElemento/:collection/:id/:v1',service.eliminarElemento);
app.get('/eliminarVideojuego/:collection/:id',service.eliminarVideojuego);
app.get('/eliminarVideojuegoCompra/:collection/:idUsuario/:idVideojuego',service.eliminarVideojuegoCompra);

app.get('/cambiarCampo/:collection/:id/:v1',service.cambiarCampo);

//Agregar una imagen
app.post('/crear',supportCrossOriginScript,service.crearImagen);

http.createServer(app).listen(port);
console.log("Servidor Backend por el puerto " + port);