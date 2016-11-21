var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usuario_schema = new Schema({
	nobmre:String,
	apellido:String,
	fecha_nacimiento:Date,
	id:String,
	password:String,
});

var comentario_schema = new Schema({
	fecha_hora:Date,
	detalle:String
});

var noticia_schema = new Schema({
	titulo:String,
	tipo:String,
	fecha_hora:Date,
	importancia:Number,
	vistas:Number,
	lugar:String,
	cuerpo:String,
	usuario:{type:Schema.ObjectId,ref:'Usuario'},
	cometarios:[comentario_schema]
});

mongoose.model("Usuario",usuario_schema);
mongoose.model("Noticia",noticia_schema);


