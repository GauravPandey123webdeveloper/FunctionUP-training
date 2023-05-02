const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "LibraryAuthor",
        require:true
    }, 
    publisher_id:{
        require:true,
        type: ObjectId,
        ref:"Publisher"
    },
    isHardCover:{
        type:Boolean,
        default:'false'
    },
    price: Number,
    rating: Number


}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
