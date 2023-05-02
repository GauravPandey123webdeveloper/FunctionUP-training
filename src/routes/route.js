const express = require('express');
const router = express.Router();
const authorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")
//creating author
router.post("/createAuthor", authorController.createAuthor  )
//getting author's data
router.get("/getAuthorData", authorController.getAuthorData)
//creating book 
router.post("/createBook", BookController.createBook  )
//getting books data
router.get("/getBooksData", BookController.getBooksData)
//updating books record 
router.post("/updateBooks", BookController.updateBooks)
//deleting books record 
router.get("/priceBooks", BookController.priceBooks)
module.exports = router;