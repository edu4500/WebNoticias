var mongoose = require('mongoose');
var Not = mongoose.model('Noticia');
var User = mongoose.model('User');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.getNoticias = function(req,res){
  Not.find({},function(err,noticias){
    if(err){sendJsonResponse(res,400,err);}
    else{sendJsonResponse(res,200,noticias);}
  });
}

module.exports.getNoticiasTitulos = function(req,res){
  Not.find({},'titulo',function(err,noticias){
    if(err){sendJsonResponse(res,400,err);}
    else{sendJsonResponse(res,200,noticias);}
  });
}

var TIPOS = ["politica","social","deportes","farandula"];

var esTipo = function(tipo){
  for (var i = 0; i < TIPOS.length; i++) {
    if(TIPOS[i] == tipo) return true;}
  return false;
}

module.exports.getNoticiasTipo = function(req,res){
  var tipo = req.query.tipoid;
  if(!esTipo(tipo)){
    sendJsonResponse(res,409,{error : 'tipo invalido'});}
  else{
    Not.find({'tipo':tipo},function(err,noticias){
      if(err){sendJsonResponse(res,400,err);}
      else{sendJsonResponse(res,200,noticias);}
    });
  }
}

module.exports.getNoticiasFrace = function(req,res){
  var frace = req.params.fraceid;
  //-------------------------------------------------------
  //-------------------------------------------------------
  Not.find({/* aqui vienen la consulta de la frace*/},function(err,noticias){
    if(err){sendJsonResponse(res,400,err);}
    else{sendJsonResponse(res,200,noticias);}
  });
}

module.exports.getNoticia = function(req,res){
  Not
  .findById(req.params.noticiaid)
  .exec(function(err, noticia) {
    if(err){sendJsonResponse(res,400,err);}
    else{
      if(noticia){
        sendJsonResponse(res,200,noticia);
        noticia.vistas += 1;
        noticia.save();
      }
      else{sendJsonResponse(res,401,{error : 'noticia no existente'})}
    }
  });
}

module.exports.createNoticia = function(req,res){
  Not.create(
    {
      titulo: req.body.titulo,
      tipo: req.body.tipo,
      fecha: new Date(),
      importancia: 0,
      vistas: 0,
      lugar: req.body.lugar,
      cuerpo: req.body.noticia,
      usuario: '582f740f87a78f0f57f61fbc' //falta por compribar
    },
    function(err, noticia) 
    {
      if (err) {
        console.log(noticia);
        sendJsonResponse(res, 400, err);}
      else {
        console.log(noticia);
        sendJsonResponse(res,200,noticia);}
    }
  );
}


var multer = require('multer');
var cloudinary = require('cloudinary');
var update = multer({dest:"./upload"}).single("file");

cloudinary.config({
  cloud_name: "df9r6qpfk",
  api_key: "535379435322736",
  api_secret: "8QbLKeAHtA1Qr0JXWT5NdOZ7ZT4"
});//*/

var grabarNoticia = function(res,data){
  Not.create(data,
    function(err, noticia) 
    {
      if (err) {
        console.log(noticia);
        sendJsonResponse(res, 400, err);}
      else {
        console.log(noticia);
        sendJsonResponse(res,200,noticia);}
    });
}

module.exports.createNoticiaPrueba = function(req,res){
  update(req,res,function(err){
    getAuthor(req, res, function (req, res, userid) {
      if(err){sendJsonResponse(res,500,{menssaje : "error de upload"}); return;}

      //console.log("--------------------------------------------");
      //console.log(user);
      var newNoticia = {
        titulo: req.body.titulo,
        tipo: req.body.tipo,
        fecha: new Date(),
        importancia: 0,
        vistas: 0,
        lugar: req.body.lugar,
        cuerpo: req.body.noticia,
        URLimg: "",
        usuario: userid //falta por compribar
      };
      
      console.log("------------");
      console.log(req.file);
      if(!req.file){
        grabarNoticia(res,newNoticia);
      }
      else{
          
        cloudinary.uploader.upload(req.file.path, function(result) {
          newNoticia.URLimg = result.url;
          grabarNoticia(res,newNoticia);
        });//*/
      }
    });
  });
}


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
        callback(req, res, user._id);
      });

  } else {
    sendJSONresponse(res, 404, {
      "message": "User not found"
    });
    return;
  }

};