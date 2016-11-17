var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Loc = mongoose.model('Person');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

router.get('/otro/:otroid',function(req,res){
  var id = req.params.otroid;
  var variable = Loc
    .findById(id)
    .exec(function(err,otrosss){
      sendJsonResponse(res,200,otrosss);
    });
//  res.render('index', { title: 'Express' });
});

module.exports = router;
