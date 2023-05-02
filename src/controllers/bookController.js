const BookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")
const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const getBooksData= async function (req, res) {
    let name=req.body.authorName;
    let id= await authorModel.findOne({authorName:name}).select({author_id:1,_id:0})
    let allBooks= await BookModel.find( {author_id : id.author_id }).select({bookName:1,_id:0})
    if (allBooks.length > 0 )  res.send({msg: allBooks})
    else res.send({msg: "No books found" })
}
const updateBooks= async function (req, res) {
    let name = req.body.bookName;
    let id= await BookModel.findOne({bookName:name}).select({author_id:1,_id:0})
let authorName= await authorModel.find( {author_id : id.author_id }).select({authorName:1,_id:0})
    let allBooks= await BookModel.findOneAndUpdate( 
        { bookName:name} , //condition
        { $set: {prices:100} }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send(  allBooks+authorName )
}

const priceBooks= async function (req, res) {
    let authors= await authorModel.find()
    let data=[]
    let books=  await BookModel.find({prices:{$gte:50,$lte:100}}).select({author_id:1,_id:0});
    for(i of books){
        authors= await authorModel.find({author_id:i.author_id}).select({authorName:1, _id:0})
          data.push(authors)
    }
    return res.send(data)
   
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.priceBooks= priceBooks
