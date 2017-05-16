var Schema = require('mongoose').Schema;

var admin = new Schema({
    username: {type: String,  maxlength: 20, require: true},
    password: {type: String, maxlength: 20, require: true},
    role: {type: String, maxlength: 30, require: true}
});

module.exports = admin;