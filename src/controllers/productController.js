const productModel=require("../models/productModel")
const createProduct= async function(req,res){
    const data= req.body
    const product = await productModel.create(data)
    res.send(product)
}
const getProduct=async function(req,res){
    const data= await productModel.find()
    res.send(data)
}
module.exports={createProduct,getProduct}