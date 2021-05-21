var mongoose = require('mongoose');
var objectId = mongoose.Schema.ObjectId;
var voteSchema = new mongoose.Schema(
    {
        user_id: objectId,
        candidate_id: objectId
    });

    module.exports = mongoose.model('Vote', voteSchema);

