const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorId=book.author_id;
    let publisherId=book.publisher_id;
    let autid= await authorModel.find().select({_id:1})
    let pubid= await publisherModel.find().select({_id:1})
      for(i of autid){
        for(j of pubid){
            // console.log(authorId==i._id)
            // console.log(j._id)
            if(authorId==i._id&&publisherId==j._id){
                
                let bookCreated = await bookModel.create(book)
               return res.send({data: bookCreated})}
        }
    }
   
    return res.send("enter valid id")
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({data: specificBook})
}
// 5. Create at least 4 publishers (Penguin, Bloomsbury, Saraswati House, HarperCollins). Create at least 6 authors with ratings 2, 3, 3.5, 4, 4.5 and 5. Create around 10 books with these publishers and authors.
// Create a new PUT api /books and perform the following two operations
//  a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.
//  b) For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60)
const hardCover= async function (req, res) {
    let pname=await publisherModel.findOne({name:{$in:['Penguin','HarperCollins']}}).select({_id:1})
    let aname=await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
    let books = await bookModel.updateMany({publisher_id:pname._id},{$set:{isHardCover:'true'}},{new:true})
    // let updateprice=await bookModel.find({author_id:aname._id}).select({price:1,_id:0})
    let updateprice=null;
    for(i of aname){
     updateprice=await bookModel.updateMany({author_id:i._id},{$inc:{price:10}},{new:true})
    }
    res.send({data: books,updateprice})
}

module.exports.createBook= createBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.hardCover = hardCover
