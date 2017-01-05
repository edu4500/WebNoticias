var mongoose = require('mongoose');
var Not = mongoose.model('Noticia');
var User = mongoose.model('User');

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
  getAuthor(req, res, function (req, res, userName) {
    Not
    .findById(req.params.noticiaid)
    .exec(function(err, noticia) {
      if(err){sendJsonResponse(res,400,err);}
      else{
        if(noticia){
          noticia.cometarios.push({
            'fecha_hora' : new Date(),
            'detalle' : req.body.comentario,
            'usuario' : userName
          });
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
  });
};


var getAuthor = function(req, res, callback) {
  console.log("Finding author with email " + req.payload.email);
  if (req.payload.email) {
    User
      .findOne({ email : req.payload.email })
      .exec(function(err, user) {
        if (!user) {
          sendJSONresponse(res, 404, {
            "message": "User not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(user);
        callback(req, res, user.name);
      });

  } else {
    sendJSONresponse(res, 404, {
      "message": "User not found"
    });
    return;
  }

};
/**/