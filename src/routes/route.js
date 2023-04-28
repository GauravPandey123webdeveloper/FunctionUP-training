const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const BookController= require("../controllers/bookController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/createBook", BookController.createBook  )
router.get("/getBooksData", BookController.getBooksData)
router.get("/getBookDataByYear", BookController.getBookDataByYear)
router.get("/searchForBooks", BookController.searchForBooks)
router.get("/searchByPrice", BookController.searchByPrice)
router.get("/booksByPages", BookController.booksByPages)

module.exports = router;