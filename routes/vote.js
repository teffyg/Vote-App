var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Vote = require('../models/vote');
var Candidate = require('../models/candidate');
var User = require('../models/user');


/* Save vote */
router.post('/', function (req, res, next) {

    Vote.create(req.body, function (err, vote) {
        if (err) return next(err);
        res.json(vote)
    });
    let userId = req.body['user_id'];
    User.findById( userId, function (error, user)
    {
        user.isVoted = true;
        user.save();
    });
    

});

router.get('/results', function (req, res, next) {

    Candidate.aggregate(
        [
            {
                $lookup:
                {
                    from: "votes",
                    localField: "_id",
                    foreignField: "candidate_id",
                    as: "votes"

                }
            }
        ], function (err, response) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(response);
        }
    });
});
module.exports = router;





