var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Not = mongoose.model('Noticia');
var Usu = mongoose.model('Usuario');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

//modificar esta parte y mejorar
router.post('/nuevo',function(req,res){
  Not.create(
    {
      titulo: req.body.titulo,
      tipo: req.body.tipo,
      fecha:"10-2-2012",
      importancia:3,
      vistas:100,
      lugar: req.body.lugar,
      cuerpo: req.body.noticia,
      usuario:"582f740f87a78f0f57f61fbc"
    },
    function(err, location) 
    {
      if (err) {sendJsonResponse(res, 400, err);}
      else {res.redirect('/');}
    }
  );
});

router.get('/noticias/:noticiasid',function(req,res){
  Not
  .findById(req.params.noticiasid)
  .exec(function(err, noticia) {
    res.render('noticia', { 'title': 'Noticia','noticia' :noticia });
    //sendJsonResponse(res, 200, noticia);
    //res.render('noticia',{'title':'noticia','noticia':noticia,'noticias':[]});
  });
});

module.exports = router;
