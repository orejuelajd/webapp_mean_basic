var Schema = require('mongoose').Schema;

var producto = new Schema
({
   nombre: {type: String, require: true, maxlength: 140},
   descripcion: {type: String, require: true},
   precio: {type: Number, require: true},
   link: {type: String, require: true},
   stocks: []
});

module.exports = producto;