const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema( {
    bookName: String, 
    author_id: {
        type:Number,
        require:true
    },
    prices:Number,
    rating:Number
}, { timestamps: true });
module.exports = mongoose.model('BookStore', bookSchema) 
