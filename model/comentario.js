var Schema = require('mongoose').Schema;

var comentario = new Schema
({
	idUsuario:{type:String, required:true},
	idProducto:{type:String, required:true},
	mensaje:{type:String, required:true}	
});

module.exports = comentario;