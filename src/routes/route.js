const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const { authentication,authorisation } = require('../middleware/authentication');
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/users", userController.createUser  )
router.post("/login", userController.loginUser)
//The userId is sent by front end
router.get("/users/:userId",authentication,authorisation, userController.getUserData)
router.put("/users/:userId", authentication,authorisation, userController.updateUser)
router.delete("/users/:userId", authentication,authorisation, userController.deleteUser)
module.exports = router;