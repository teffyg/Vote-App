var mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
    {
        id: {
        },
        name: {
            type: String
        },
        surname: {
            type: String
        },
        dni: { 
            type: Number, 
        },
        sex: {
            type: String,
            enum: ["Femenino","Masculino","Otro"] 
        },
        isVoted: {
            type: Boolean
        }
   
});

module.exports = mongoose.model('User', userSchema);
