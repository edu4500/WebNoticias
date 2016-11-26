var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = "https://getting-mean-loc8r.herokuapp.com";
}

module.exports.index = function(req, res, next) {
  var requestOptions, path;
  path = '/api/noticias';
  requestOptions = {
    url : apiOptions.server + path,
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

module.exports.getNoticiaTipo = function(req,res,next){
  var requestOptions, path;
  path = '/api/noticias/tipo/' + req.params.tipoid;
  console.log("-----------  "+path);
  requestOptions = {
    url : apiOptions.server + path,
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
    url : apiOptions.server + path,
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
  console.log("------------------------- :"+path);
  requestOptions = {
    url : apiOptions.server + path,
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