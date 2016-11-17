var express = require('express');
var router = express.Router();
var mainCtrl = require('../controllers/main');
//require('../models/modelo')

/* GET home page. */
router.get('/',mainCtrl.index);
router.get('/login',mainCtrl.login);
router.get('/register',mainCtrl.register);

//router.get('/action',mainCtrl.action);

module.exports = router;
