var mongoose = require('mongoose');
var Not = mongoose.model('Noticia');
var Usu = mongoose.model('Usuario');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.new_noticia = function(req,res){
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
}

module.exports.add_comentario = function(req,res){
  Not
  .findById(req.params.noticiasid)
  .select('cometarios')
  .exec(function(err, noticia) {
    noticia.cometarios.push({'fecha_hora' : new Date(),'detalle' : req.query.comentario});
    noticia.save();
    res.redirect('/api/noticias/'+req.params.noticiasid);
    //sendJsonResponse(res, 200, noticia);//
  });
}

module.exports.view_noticia = function(req,res){
  Not
  .findById(req.params.noticiasid)
  //.select('titulo cometarios')
  .exec(function(err, noticia) {
    res.render('noticia', { 'title': 'Noticia','noticia' :noticia });
    /*noticia.cometarios.push({'fecha_hora' : new Date(),'detalle' : "algo aqui"});
    noticia.save();
    sendJsonResponse(res, 200, noticia);//*/
  });
}