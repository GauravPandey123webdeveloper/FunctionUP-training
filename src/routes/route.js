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
// second assignment
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]

router.post("/players", function(req,res){
    let newplayer={};
    newplayer.name=req.body.name;
    newplayer.dob=req.body.dob;
    newplayer.gender=req.body.gender;
    newplayer.city=req.body.city;
    newplayer.sports=req.body.sports;
    let condition =false;
    for(let i=0;i<players.length;i++){
        if(players[i].name==newplayer.name&&players[i].dob==newplayer.dob){
           condition=true;
        }
    }
    if(condition!=true){
        players.push(newplayer);
        return  res.send(players);
    }else{
        console.log("player is already exist")
        return res.send(players)
        
    }
  
    
})



module.exports = router;