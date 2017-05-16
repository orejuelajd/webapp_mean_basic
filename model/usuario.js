var Schema = require('mongoose').Schema;

var usuario = new Schema
({
   nombre: {type: String, require: true, maxlength: 140},
   user: {type: String, require: true, maxlength: 140},
   password: {type: String, require: true, maxlength: 18},
   correo: {type: String, require: true, maxlength: 100},
   fechaNacimiento: {type: String, require: true},
   direccion: {type: String, require: true, maxlength: 150},
   telefono: {type: String, require: true, maxlength: 150},
   // Con "tipo" se sabe si la cuenta pertenece a un usuario normal o a un admin
   tipo: {type: String, require: true, maxlength: 150}  
});

module.exports = usuario;