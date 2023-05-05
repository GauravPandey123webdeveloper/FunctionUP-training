const express = require('express');
const router = express.Router();
router.get("/testAPI-1", function (req, res) {
    res.send("Test API one !")
})
router.post("/testAPI-1", function (req, res) {
    const data=req.body
    res.send({dataEntered:data})
})
module.exports = router;