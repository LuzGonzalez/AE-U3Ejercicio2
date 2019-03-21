const mongoose = require('mongoose');

//Construyendo el esquema
const userSchema = new mongoose.Schema({
    name:{
        firstName:{
            type:String,
            required:true         
        },
        lastName:{
            type:String,
            require:true
        }
    },

    email:{
        type: String,
        required:true
    },

    password:{
        type:String
    }
});

//Modelo
const userModel = mongoose.model('User', userSchema, 'users');

module.exports = userModel;
