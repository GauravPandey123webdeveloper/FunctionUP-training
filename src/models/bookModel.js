const mongoose = require('mongoose');

const bookModel = new mongoose.Schema( {
    bookName:{type:String, require:true}, 
    authorName: String, 
    tags: [String],
    stockAvailable: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year:{type:Date, default: "01/01/2021"},
    totalPages:Number
}, { timestamps: true });


module.exports = mongoose.model('BookStock', bookModel) 

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
