var request = require('request');
var apioptions = {
  server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'produccion') {
  apioptions.server = "https://app20101887.herokuapp.com";
}

module.exports.index = function(req, res, next) {
  var requestOptions, path;
  path = '/api/noticias';
  requestOptions = {
    url : apioptions.server + path,
    method : "GET",
    json : {},
    qs : {}
  };
  request(
    requestOptions,
    function(err, response, body) {
      console.log(body);
      res.render('index',{
        'title' : 'WebNoticias',
        'noticias' :body
      });
    }
  );
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

var last_sub_path = function(path){
  return path.substring(path.lastIndexOf('/')+1,path.length);
}

module.exports.getNoticiaTipo = function(req,res,next){
  var requestOptions, path;
  path = '/api/noticias/tipo';
  requestOptions = {
    url : apioptions.server + path,
    method : "GET",
    json : {},
    qs : {tipoid: last_sub_path(req.path)}
  };


  request(
    requestOptions,
    function(err, response, body) {
      console.log(body);
      res.render('index',{
        'title' : 'WebNoticias',
        'noticias' :body
      });
    }
  );//*/
}

module.exports.newNoticia = function(req,res,next){
  var requestoptions, path;
  path = '/api/noticia' ;
  requestoptions = {
    url : apioptions.server + path,
    method : "post",
    json : {
      titulo: req.query.titulo,
      tipo: req.query.tipo,
      lugar: req.query.lugar,
      noticia: req.query.noticia,
      usuario: "582f740f87a78f0f57f61fbc"
    },
    qs : {}
  };
  request(
    requestoptions,
    function(err, response, body) {
      if(err){
        //hacer algo
      }else{
        res.redirect('/');
      }
    }
  );  
}

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};
module.exports.addComentario = function(req,res,next){
  var requestoptions, path;
  path = '/api/noticia/'+req.params.noticiasid+'/comentario';
  requestOptions = {
    url : apioptions.server + path,
    method : "post",
    json : {
      'comentario' : req.query.comentario
    },
    qs : {}
  };
//  sendJsonResponse(res,200,requestOptions);
  request(
    requestOptions,
    function(err, response, body) {
      if(err){
        //hacer algo
      }else{
        res.render('noticia', { 'title': 'Noticia','noticia' :body.comentario });
        //sendJsonResponse(res,200,body);
      }
    }
  );//*/  
}

module.exports.viewNoticia = function(req,res,next){
  var requestOptions, path;
  path = '/api/noticia/' + req.params.noticiasid;
  requestOptions = {
    url : apioptions.server + path,
    method : "GET",
    json : {},
    qs : {}
  };
  request(
    requestOptions,
    function(err, response, body) {
      res.render('noticia', { 'title': 'Noticia','noticia' :body });
    }
  );
}
