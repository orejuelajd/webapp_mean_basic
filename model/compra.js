var Schema = require('mongoose').Schema;

var compra = new Schema
({
   idUsuario: {type: String, require: true, maxlength: 200},
   //idsProductos: [],
   //productos: [],
   estado: {type: String, require: true, maxlength: 50},
   fecha: {type: String, require: true, maxlength:100},
   precioTotal: {type: Number, require: true},
   subcompras:[]
});

module.exports = compra;