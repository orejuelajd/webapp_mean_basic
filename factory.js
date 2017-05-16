require('./db.js');

module.exports.findCollectionByName = function(name) {
	var object = null;
	if (name === 'registers') object = register;
	else if (name === 'users') object = user;
	return object;
};