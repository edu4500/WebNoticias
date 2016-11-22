var Not = require('mongoose').model('Noticia');

module.exports.index = function(req, res, next) {
  Not.find({},function(err,noticias){
    	res.render('index',{
  		'title': 'WebNoticias', 
<<<<<<< HEAD
  		'noticias' : noticias});
  }); 
=======
  		'noticias' : noticias})
  });
  
>>>>>>> 10fc5df636d0d3dd7d0c361015b39522aa2cdc3d
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

