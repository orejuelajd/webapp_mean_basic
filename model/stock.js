var Schema = require('mongoose').Schema;

var stock = new Schema
({
	plataforma:{type:String, required:true},
	cantidad:{type:Number, required:true}
});

module.exports = stock;