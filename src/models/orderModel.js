const mongoose=require('mongoose')
const objectId=mongoose.Schema.objectId;
const orderSchema= new mongoose.Schema({
          userId:objectId,
          productId:objectId,
          amount:Number,
          isFreeUser:Boolean,
          date:Date
})
module.exports=mongoose.model("OrderCollection",orderSchema)