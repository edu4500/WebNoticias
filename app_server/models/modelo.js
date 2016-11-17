var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/prueba");

mongoose.connection.on('connected',function(){
  console.log("conectado ");
});

var personSchemaJSON = {
  nombre:String,
  edad:String
};

var person_schema = new Schema(personSchemaJSON);

module.exports.Person = mongoose.model("Person",person_schema);


