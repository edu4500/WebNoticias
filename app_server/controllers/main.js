//var modelo = require('../models/modelo');
//var Person = modelo.Person;

var noticias = [
  {
  title : '#tomos caminan',
  body : 'al las 4 aparecieron los tombos',
  lugar : 'san martin 201'
  },
  {
  title : '#tomos caminan',
  body : 'al las 4 aparecieron los tombos',
  lugar : 'san martin 201'
  },
  {
  title : '#tomos caminan',
  body : 'al las 4 aparecieron los tombos',
  lugar : 'san martin 201'
  },
  {
  title : '#tomos caminan',
  body : 'al las 4 aparecieron los tombos',
  lugar : 'san martin 201'
  }
];

module.exports.index = function(req, res, next) {
  res.render('index',
  { 
    'title': 'Express', 
    'noticias' : noticias
  });
}

module.exports.login = function(req, res, next) {
  res.render('login', { 'title': 'Login' });
}

module.exports.register = function(req, res, next) {
  res.render('register', { 'title': 'Register' });
}
/*
module.exports.action = function(req,res,next){
  var nuevo = new Person({nombre:req.query.name , edad:req.query.edad});
  nuevo.save();
  res.render('login', { 'title': 'Login' });
}
//*/