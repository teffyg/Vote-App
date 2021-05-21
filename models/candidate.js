var mongoose = require('mongoose');

var candidateSchema = new mongoose.Schema(
    {
        id: {
            
        },
        name: {
            type: String
        },
        surname: {
            type: String
        },
        party: {
            type: String 
            
        },
        img: {
            type: String
        }
});

module.exports = mongoose.model('Candidate', candidateSchema);
    