const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{type:String,
         required:true,
    },
    age: Number,
    email:{type: String,
           required: true,
    },
    address:{
        street: String,
        postalCode:Number,
        country:String
    },
   createdAt: { type:Date,default:Date.now()}
})

module.exports = mongoose.model('User', userSchema)