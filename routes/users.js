var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');
var User = require('../models/user.js');


// /* GET users listing. */
router.get('/', function(req, res, next) {
  
  
  let userDni = req.query['dni'];
  console.log(userDni);
  User.findOne({dni: userDni}, function(err, resMongo)
  {
    if(err)
    {
      return next(err);
    } 
    let response = resMongo;
    if(!resMongo) response = [];

    res.json(response);
  });
});

router.post('/', function(req,res,next){
  //aca vas a insertar lo que tenga el req data en la base de datos
  //dentro de la colection users
  console.log(req.body);
  User.create(req.body, function(err,user){
    if(err) return next(err);
    res.json(user);
  });
})


module.exports = router;
