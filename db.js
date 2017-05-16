var mongoose = require('mongoose'),
db = mongoose.connect('mongodb://127.0.0.1:27017/test');

var schema_register = require('./model/register.js');
var schema_user = require('./model/user.js');

register = db.model('register', schema_register);
user = db.model('user', schema_user);

module.exports = db;
module.exports = mongoose;