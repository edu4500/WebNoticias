var Not = require('mongoose').model('Noticia');
var noticias = [];

module.exports.index = function(req, res, next) {
  Not.find({},function(err,doc){
  	noticias = doc;
  });
  res.render('index',
  { 
    'title': 'WebNoticias', 
    'noticias' : noticias
  });
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

