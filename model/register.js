var Schema = require('mongoose').Schema;

var register = new Schema({
    id: {type:String, required:true, maxlength: 6},
    timestamp: {type: Date, require: true},
    data: {type:Number, required:true}
});

module.exports = register;