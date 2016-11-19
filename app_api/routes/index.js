var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Not = require('mongoose').model('Noticia');

var Not = mongoose.model('Noticia');
var Usu = mongoose.model('Usuario');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

router.post('/otro/:otroid',function(req,res){

  var newNoticia = {
      titulo: req.body.titulo,
      tipo: req.body.tipo,
      fecha:"10-2-2012",
      importancia:3,
      vistas:100,
      lugar: req.body.lugar,
      cuerpo: req.body.noticia,
      usuario:"582f740f87a78f0f57f61fbc"
  }

  Not.create(newNoticia,
    function(err, location) {
      if (err) {sendJsonResponse(res, 400, err);}
      else {
        Not.find({},function(err,noticias){
          res.render('index',{
            'title': 'WebNoticias', 
            'noticias' : noticias})
        });
      }
    }
  );

  /*
  var id = req.params.otroid;
  var variable = Loc
    .findById(id)
    .exec(function(err,otrosss){
      sendJsonResponse(res,200,otrosss);
    });//*/
//  res.render('index', { title: 'Express' });
});

module.exports = router;
