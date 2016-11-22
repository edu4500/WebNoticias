var Not = require('mongoose').model('Noticia');

module.exports.index = function(req, res, next) {
  Not.find({},function(err,noticias){
    	res.render('index',{
  		'title': 'WebNoticias', 
  		'noticias' : noticias});
  })
}

module.exports.login = function(req, res, next) {
  res.render('login', { 'title': 'Login' });
}
module.exports.register = function(req, res, next) {
  res.render('register', { 'title': 'Register' });
}
module.exports.about = function(req, res, next) {
  res.render('about', { 'title': 'About' });
}
 
/***************Categorias****************/
module.exports.pol = function(req, res, next) {

	Not.find({tipo:"politica"},function(err,noticias){
    	res.render('index',{
  		'title': 'WebNoticias - Política', 
  		'noticias' : noticias});
	}); 
	
}
//*****
module.exports.dep = function(req, res, next) {

	Not.find({tipo:"deportes"},function(err,noticias){
    	res.render('index',{
  		'title': 'WebNoticias - deportes', 
  		'noticias' : noticias});
	}); 
	
}
//*****
module.exports.far = function(req, res, next) {

	Not.find({tipo:"farandula"},function(err,noticias){
    	res.render('index',{
  		'title': 'WebNoticias - farandula', 
  		'noticias' : noticias});
	}); 
	
}
//*****
module.exports.soc = function(req, res, next) {

	Not.find({tipo:"social"},function(err,noticias){
    	res.render('index',{
  		'title': 'WebNoticias - social', 
  		'noticias' : noticias});
	}); 
	
}
/***************Categorias****************/