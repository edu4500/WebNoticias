var express = require('express');
var router = express.Router();
var mainCtrl = require('../controllers/main');


/* GET home page. */
router.get('/',mainCtrl.index);

/****************Categorias*****************/
router.get('/pol',mainCtrl.pol);
router.get('/dep',mainCtrl.dep);
router.get('/far',mainCtrl.far);
router.get('/soc',mainCtrl.soc);
/**************Categorias*****************/

router.get('/login',mainCtrl.login);
router.get('/register',mainCtrl.register);
router.get('/about',mainCtrl.about);


module.exports = router;
