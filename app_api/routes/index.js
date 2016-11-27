var express = require('express');
var router = express.Router();

var crudCtrl = require('../controllers/crud');
var noticia = require('../controllers/noticia');
var comentario = require('../controllers/comentario');

//modificar esta parte y mejorar
//router.post('/nuevo', crudCtrl.new_noticia );
//router.get('/noticias/:noticiasid/comentario', crudCtrl.add_comentario);
//router.get('/noticias/:noticiasid', crudCtrl.view_noticia);

//noticia
router.post( '/noticia' , noticia.createNoticia );
router.get( '/noticias', noticia.getNoticias );
router.get( '/noticias/tipo', noticia.getNoticiasTipo );
router.get( '/noticias/frace', noticia.getNoticiasFrace );
router.get( '/noticia/:noticiaid', noticia.getNoticia );

//comentario
router.get( '/noticia/:noticiaid/comentario', comentario.getNoticiaComentario );
router.post( '/noticia/:noticiaid/comentario', comentario.createComentario );


module.exports = router;
