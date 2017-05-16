var mongoose = require('mongoose'),
db_url = 'localhost/tienda';
db = mongoose.createConnection(db_url);

var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(db); //para incrementar id en un numero razonable y no codigos

var schema_compra = require('./model/compra.js');
var schema_multimedia = require('./model/multimedia.js');
var schema_producto = require('./model/producto.js');
var schema_usuario = require('./model/usuario.js');
var schema_stock = require('./model/stock.js');
var schema_subcompra = require('./model/subcompra.js');


compra = db.model('compra', schema_compra);
multimedia = db.model('multimedia', schema_multimedia);
producto = db.model('producto', schema_producto);
usuario = db.model('usuario', schema_usuario);
stock = db.model('stock', schema_stock);
subcompra = db.model('subcompra', schema_subcompra);


schema_compra.plugin(autoIncrement.plugin, { model: 'compra' });
schema_multimedia.plugin(autoIncrement.plugin, { model: 'multimedia' });
schema_producto.plugin(autoIncrement.plugin, { model: 'producto' });
schema_usuario.plugin(autoIncrement.plugin, { model: 'usuario' });
schema_stock.plugin(autoIncrement.plugin, { model: 'stock' });
schema_subcompra.plugin(autoIncrement.plugin, { model: 'subcompra' });

module.exports = db;
module.exports = mongoose;
