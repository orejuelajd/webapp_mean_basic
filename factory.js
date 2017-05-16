require('./db.js');

module.exports.createObjectWithName = function(coleccion, v1, v2, v3, v4, v5, v6, v7, v8) {
	var obj = null;

	if (coleccion == 'paciente') {
		obj = new paciente({
			nombre: v1,
   			apellido: v2,
   			edad: v3,
   			discapacidad: v4,
   			urlDocumento: v5   
		});
	}
	return obj;
};

module.exports.findCollectionByName = function(name) {
	var objeto = null;

	if (name === 'paciente') {
		objeto = paciente;
	}
	return objeto;
}

module.exports.updateData = function(name, key, data, service) {
	if (name === 'paciente') {
		paciente.update({
			_id: key
		}, data, {
			upsert: true
		}, respuesta);
	}

	function respuesta(err) {
		if (err) {
			return service.json({
				status: "fail",
				name: name,
				description: "ID_OBJECT_DONT_EXIST",
				value: [{}]
			});
		}
		else {
			return service.json({
				status: "ok",
				name: name,
				description: "COLLECTION_QUERY_OK",
				value: key
			});
		}
	}
};