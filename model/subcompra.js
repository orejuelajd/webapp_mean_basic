var Schema = require('mongoose').Schema;

var subcompra = new Schema({
    idProducto: {type: String, require: true, maxlength: 140},
    plataforma: {type: String, require: true, maxlength: 140},
    cantidad: {type: Number, require: true},
    valorUnitario: { type: Number, require: true},
    subtotal: {type: Number, require: true},
    nombre: {type: String, require: true, maxlength: 140}
});

module.exports = subcompra;