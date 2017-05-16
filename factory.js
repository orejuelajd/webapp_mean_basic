require('./db.js');

module.exports.createObjectWithName = function(coleccion, v1, v2, v3, v4, v5, v6, v7, v8) {
	var obj = null;

	if (coleccion == 'compra') {
		obj = new compra({
			idUsuario: v1,
			estado: v2,
			fecha: v3,
			precioTotal: v4
		});
	}
	else if (coleccion == 'multimedia') {
		obj = new multimedia({});
	}
	else if (coleccion == 'usuario') {
		obj = new usuario({
			nombre: v1,
			user: v2,
			password: v3,
			correo: v4,
			fechaNacimiento: v5,
			direccion: v6,
			telefono: v7,
			tipo: v8
		});
	}
	else if (coleccion == 'producto') {
		obj = new producto({
			nombre: v1,
			descripcion: v2,
			precio: v3,
			link: v4,
		});
	}
	return obj;
};

module.exports.findCollectionByName = function(name) {
	var objeto = null;

	if (name === 'compra') {
		objeto = compra;
	}
	else if (name === 'multimedia') {
		objeto = multimedia;
	}
	else if (name === 'producto') {
		objeto = producto;
	}
	else if (name === 'usuario') {
		objeto = usuario;
	}
	return objeto;
}

module.exports.updateData = function(name, key, data, service) {
	if (name === 'usuario') {
		usuario.update({
			_id: key
		}, data, {
			upsert: true
		}, respuesta);
	}
	else if (name === 'compra') {
		compra.update({
			_id: key
		}, data, {
			upsert: true
		}, respuesta);
	}
	else if (name === 'multimedia') {
		prestamos.update({
			_id: key
		}, data, {
			upsert: true
		}, respuesta);
	}
	else if (name === 'producto') {
		item.update({
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

module.exports.createObjectAux = function(coleccion, v1, v2) {
	var obj = null;

	if (coleccion == 'producto') {
		obj = new stock({
			plataforma: v1,
			cantidad: v2
		});
	}
	else if (coleccion == 'PrestamosAux') {
		obj = new Prestamos({
			estado: v1
		});
	}
	else if (coleccion == 'UsuarioAux') {
		obj = new Usuario({
			estado: v1
		});
	}
	return obj;
};

module.exports.createObjectAux2 = function(coleccion, v1, v2, v3, v4, v5, v6) {
	var obj = null;

	if (coleccion == 'compra') {
		obj = new subcompra({
			idProducto: v1,
			plataforma: v2,
			cantidad: v3,
			valorUnitario: v4,
			subtotal: v5,
			nombre: v6
		});
	}
	return obj;
};

module.exports.createObjectAux1 = function(coleccion, v1, v2) {
	var obj = null;

	if (coleccion == 'producto') {
		obj = new stock({
			plataforma: v1,
			cantidad: v2
		});
	}
	return obj;
};

module.exports.pushObject = function(name, key, data, service) {
	if (name === 'producto') {
		producto.update({
				_id: key
			}, {
				$push: {
					"stocks": data
				}
			},
			respuesta
		);
	}
	else if (name === "compra") {
		compra.update({
				_id: key
			}, {
				$push: {
					"subcompras": data
				}
			},
			respuesta
		);
	}

	function respuesta(err, numAffected) {
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

module.exports.pullObject = function(name, key, data, service) {
	if (name === 'Prestamos') {
		Prestamos.update({
				_id: key
			}, {
				$pull: {
					"elementos": {
						'nombre': data.nombre
					}
				}
			},
			function(err, numAffected) {
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
			});
	}

	if (name === 'producto') {

		producto.remove({
				"_id": ObjectId(data._id)
			},
			function(err, numAffected) {
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
		);
	}
};


module.exports.pullVideojuego = function(name, key, service) {
	if (name === 'producto') {
		producto.remove({
				_id: key
			},
			function(err, numAffected) {
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
		);
	}
	else {
		return service.json({
			status: "fail",
			name: name,
			description: "COLLECTION_DONT_EXIST",
			value: [{}]
		});
	}
};


module.exports.pullVideojuegoCompra = function(name, key, key2, service) {
	if (name === 'compra') {
		compra.update({
				idUsuario: key
			}, {
				$pull: {
					"subcompras": {
						"idProducto" : key2
					}
				}
			},
			function(err, numAffected) {
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
		);
	}
	else {
		return service.json({
			status: "fail",
			name: name,
			description: "COLLECTION_DONT_EXIST",
			value: [{}]
		});
	}
};


module.exports.changeField = function(name, key, data, service) {
	if (name === 'Prestamos') {
		Prestamos.update({
				_id: key
			}, {
				$set: {
					"estado": data.estado
				}
			},
			verificar
		);
	}
	else if (name === 'Usuario') {
		Usuario.update({
				_id: key
			}, {
				$set: {
					"estado": data.estado
				}
			},
			verificar
		);
	}

	function verificar(err, numAffected) {
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

//db.coll.update({<cond to identify document}, {$pull: {'comments': {'id': <id>}}} )

module.exports.createImage = function(coleccion) {
	var obj = null;

	if (coleccion == "multimedia") {
		obj = new multimedia();
	}
	return obj;
}


module.exports.addData2Object = function(obj, val) {
	for (j in val) {
		if (j != 'img') {
			console.log(j + ' ' + val[j])
		}
		obj[j] = val[j];
	}
	return obj;
}
