var mongoose = require('mongoose');
var Not = mongoose.model('Noticia');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.getNoticiaComentario = function(req,res){
  Not
  .findById(req.params.noticiaid)
  .select('cometarios')
  .exec(function(err, comentarios) {
    if(err){sendJsonResponse(res,400,err);}
    else{
      if(comentarios){
        sendJsonResponse(res,200,comentarios);}
      else{
        sendJsonResponse(res,401,{error : 'comentarios no existente'})}
    }
  });
};

module.exports.createComentario = function(req,res){
  Not
  .findById(req.params.noticiaid)
  //.select('cometarios')
  .exec(function(err, noticia) {
    if(err){sendJsonResponse(res,400,err);}
    else{
      if(noticia){
        noticia.cometarios.push({'fecha_hora' : new Date(),'detalle' : req.body.comentario});
        noticia.save(function(err,comentario,numAffected){
          if(err){sendJsonResponse(res,401,err);}
          else{sendJsonResponse(res,200,{'comentario':comentario , 'numAffected':numAffected});}
        });
      }
      else{
        sendJsonResponse(res,401,{error : 'comentarios no existente'})
      }
    }
  });
};

/**/