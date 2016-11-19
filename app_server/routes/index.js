var express = require('express');
var router = express.Router();
var mainCtrl = require('../controllers/main');


/* GET home page. */
router.get('/',mainCtrl.index);
router.get('/login',mainCtrl.login);
router.get('/register',mainCtrl.register);
router.get('/about',mainCtrl.about);


module.exports = router;
