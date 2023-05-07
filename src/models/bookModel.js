const mongoose= require("mongoose")
const ObjectID =mongoose.Schema.type;
const bookModel= new mongoose.Schema({
    name:String,
    authorid: {
        type:ObjectID,
        require:true
    },
    price: Number,
    rating: Number
})
module.exports=mongoose.model("Bookrecord",bookModel)