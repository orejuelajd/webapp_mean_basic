var mongoose = require('mongoose'),
//db_url = 'localhost/virtual';
db_url = 'mongodb://root:root@ds143231.mlab.com:43231/virtual';
db = mongoose.createConnection(db_url);

var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(db); //para incrementar id en un numero razonable y no codigos
var schema_paciente = require('./model/paciente.js');
paciente = db.model('paciente', schema_paciente);
schema_paciente.plugin(autoIncrement.plugin, { model: 'paciente' });

module.exports = db;
module.exports = mongoose;