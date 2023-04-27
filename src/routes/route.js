const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
router.post("/createBook", UserController.createBook  )

router.get("/getBooksData", UserController.getBooksData)

module.exports = router;