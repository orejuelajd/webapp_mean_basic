var Schema = require('mongoose').Schema;

var paciente = new Schema({
   nombre: {type: String, require: true, maxlength: 140},
   apellido: {type: String, require: true, maxlength: 140},
   edad: {type: Number, require: true},
   discapacidad: {type: String, require: true, maxlength: 140},
   urlDocumento: {type: String, require: true, maxlength: 140}   
});

module.exports = paciente;