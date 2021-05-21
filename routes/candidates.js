var express = require('express');
var Candidate = require ('../models/candidate.js');
var router = express.Router();
var mongoose = require('mongoose');

/* GET candidates listing. */
router.get('/', function(req, res, next) {
    Candidate.find(function(err, candidate){
        //if (err) return  next(err);
        res.json(candidate);
    });});




module.exports = router;
