var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var comentario_schema = new Schema({
	fecha_hora:Date,
	detalle:String,
	usuario:String
});

var noticia_schema = new Schema({
	titulo:String,
	tipo:String,
	fecha_hora:Date,
	importancia:Number,
	vistas:Number,
	lugar:String,
	cuerpo:String,
	URLimg:String,
	usuario:{type:Schema.ObjectId},
//	usuario:{type:Schema.ObjectId,ref:'Usuario'},
	cometarios:[comentario_schema]
});

mongoose.model("Noticia",noticia_schema);


