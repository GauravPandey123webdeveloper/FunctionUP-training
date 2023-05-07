const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const orderController= require("../controllers/orderController")
const productController= require("../controllers/productController")
const commonMW = require ("../middlewares/commonMiddlewares")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/createOrder", commonMW.validHeaders, orderController.createOrder  )
router.post("/createProduct",  productController.createProduct)
router.post("/createUser",commonMW.validHeaders,UserController.createUser)
router.get('/getOrder',orderController.getOrder)
router.get('/getProduct',productController.getProduct)
router.get('/getUser', UserController.getUsersData)
// router.post('/testing',commonMW.validHeaders,UserController.basicCode)
module.exports = router;