var express = require('express');
var router = express.Router();

var crudCtrl = require('../controllers/crud');




//modificar esta parte y mejorar
router.post('/nuevo', crudCtrl.new_noticia );
router.get('/noticias/:noticiasid/comentario', crudCtrl.add_comentario);
router.get('/noticias/:noticiasid', crudCtrl.view_noticia);

module.exports = router;
