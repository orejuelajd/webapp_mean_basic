var Schema = require('mongoose').Schema;

var multimedia = new Schema
({
    nombre: String,
    extension: String,
    imagen: Buffer,
    idProducto: {type: String, require: true, maxlength: 200}
});

module.exports = multimedia;