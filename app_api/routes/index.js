var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');


var auth = jwt({
	secret: process.env.JWT_SECRET,
	userProperty: 'payload'
});//*/

//var crudCtrl = require('../controllers/crud');
var noticia = require('../controllers/noticia');
var comentario = require('../controllers/comentario');
var ctrlAuth = require('../controllers/authentication');


//noticia
router.post( '/noticia' , noticia.createNoticia );
router.post( '/noticia/prueba' ,auth, noticia.createNoticiaPrueba ); // ------------prueba
router.get( '/noticias', noticia.getNoticias );
router.get( '/noticias/titulos', noticia.getNoticiasTitulos );
router.get( '/noticias/tipo', noticia.getNoticiasTipo );
router.get( '/noticias/frace', noticia.getNoticiasFrace );
router.get( '/noticia/:noticiaid', noticia.getNoticia );

//comentario
router.get( '/noticia/:noticiaid/comentario', comentario.getNoticiaComentario );
router.post( '/noticia/:noticiaid/comentario',auth, comentario.createComentario );

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);


module.exports = router;
