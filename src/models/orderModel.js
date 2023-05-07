const mongoose=require('mongoose')
const objectId=mongoose.Types.ObjectId;
const orderSchema= new mongoose.Schema({
          userId:objectId,
          productId:objectId,
          amount:Number,
          isFreeUser:Boolean,
          date:Date
})
module.exports=mongoose.model("OrderCollection",orderSchema)