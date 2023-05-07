const mongoose = require('mongoose');
const userSchema = new mongoose.Schema( {
    Name: String,
    balance:Number,
    address:Schema.Types.Mixed,
    age: Number,
    gender:String,
    isFreeUseer:{
        type:Boolean,
        default:false
    }
    
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users

