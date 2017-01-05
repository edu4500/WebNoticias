require('dotenv').load();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var uglifyJs = require("uglify-js");
var passport = require('passport');
//para desconectar
require('./app_api/models/modelo');


require('./app_api/config/passport');


var index = require('./app_server/routes/index');
var indexApi = require('./app_api/routes/index');
//var users = require('./app_server/routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname ,'app_server' ,'views'));
app.set('view engine', 'jade');

var fs = require('fs');
var appClientFiles = [
        'app_client/app.js',
        'app_client/common/servicios/authentication.servicio.js',
        'app_client/common/servicios/wnData.servicio.js',
        'app_client/common/directivas/footer/footer.directive.js',
        //'app_client/common/directivas/modelFile.directive.js',
        'app_client/common/directivas/navigation/navigator.directive.js',
        'app_client/common/directivas/navigation/navigator.controllers.js',
        'app_client/home/home.controllers.js',
        'app_client/home/page.controllers.js',
        'app_client/aunt/login/login.controllers.js',
        'app_client/aunt/registro/registro.controllers.js',
        'app_client/noticiaDetalle/noticiaDetalle.controllers.js',
        'app_client/publicarModal/publicarModal.controllers.js',
        'app_client/comentarioAddModal/comentarioAddModal.controllers.js',
];
var uglified = uglifyJs.minify(appClientFiles, { compress : false });
fs.writeFile('public/javascripts/wnApp.min.js', uglified.code, function (err){
	if(err) {
		console.log(err);
	} else {
		console.log('Script generated and saved: wnApp.min.js');
	}
});//*/


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_client')));
app.use(passport.initialize());

app.use('/', index);
//app.use('/users', users);
app.use('/api', indexApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
