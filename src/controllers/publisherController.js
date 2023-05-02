const PublisherModel=require("../models/publisherModel")
const createPublisher= async function(req,res){
    let data=req.body;
    let publisherData= await PublisherModel.create(data);
    res.send(publisherData)
}
const getPublisher=async function(req,res){
    let data=await PublisherModel.find();
    res.send(data);
}
module.exports.createPublisher=createPublisher;
module.exports.getPublisher=getPublisher;