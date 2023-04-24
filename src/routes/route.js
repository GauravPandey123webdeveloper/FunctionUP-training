const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
router.get("/sol1", function (req,res){
    let arr= [1,2,3,5,6,7];
    let n=7;
    let sum = n*(n+1)/2;
    let sumarr=arr.reduce((a,b)=>a+b);
    let missingNumber = sum-sumarr;
    res.send("the missing number is: "+missingNumber)
});
router.get("/sol2", function (req,res){
    let arr= [33, 34, 35, 37, 38];
    let sum=(arr.length+1)*(arr[0]+arr[arr.length-1])/2;
    let sumarr=arr.reduce((a,b)=>a+b);
    let missingNumber = sum-sumarr;
    res.send("the missing number is: "+missingNumber);


});



module.exports = router;