var express = require('express');
var router = express.Router();
var mainCtrl = require('../controllers/main');


// GET home page.
router.get('/',mainCtrl.index);
router.get('/noticias/tipo/:tipoid',mainCtrl.getNoticiaTipo);


router.get('/noticias/new', mainCtrl.newNoticia );
router.get('/noticias/:noticiasid/comentario', mainCtrl.addComentario);
router.get('/noticias/:noticiasid', mainCtrl.viewNoticia);


//otras paginas
router.get('/login',mainCtrl.login);
router.get('/register',mainCtrl.register);
router.get('/about',mainCtrl.about);


module.exports = router;
