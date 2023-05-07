const orderModel= require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")
const createOrder= async function(req,res){
    const data= req.body
    let isFreeAppUser = req.header('isFreeAppUser')
    console.log(isFreeAppUser)
    const uid=req.body.userId
    const pid=req.body.productId
    const alluser=await userModel.find()
    const allproduct= await productModel.find()
    let order=null
    for(let i of alluser){
       for(let j of allproduct){
        
        if(uid==i._id&&pid==j._id){
            // console.log(isFreeAppUser=='false' , i.balance>=data.amount)
        if(isFreeAppUser=='false' &&i.balance>=data.amount){
            order= await orderModel.create(data)
            user=await userModel.updateMany({_id:uid},{$inc:{balance:-data.amount}},{$new:true})
           return  res.send(order)
            }
            else if(isFreeAppUser=='false'&&i.balance<data.amount){
                return res.send("you don't have enough balance")
            }
            else{
            order= await orderModel.create(data)

            product=await orderModel.updateMany({userId:uid},{$set:{amount:0}},{$new:true})
            console.log("block2")
            return res.send(order)
            }
           }
       }
    }

    
    res.send("First register to place order")
}
const getOrder=async function(req,res){
    const data= await orderModel.find()
    res.send(data)
}
module.exports={createOrder,getOrder}