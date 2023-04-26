const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
let persons= [
   {
   name: "PK",
   age: 10,
   votingStatus: false
},
{
   name: "SK",
   age: 20,
   votingStatus: false
},
{
   name: "AA",
   age: 70,
   votingStatus: false
},
{
   name: "SC",
   age: 5,
   votingStatus: false
},
{
   name: "HO",
   age: 40,
   votingStatus: false
}
]
router.get("/voting",  function (req, res){
   let age = req.query.votingAge;
   if(age>=18){
         let votingRight=persons.filter(x=>x.age>=18);
         for(let key of votingRight){
            key.votingStatus="true";
         }
         return res.send(votingRight);
   }else{
      return res.send("you can't vote")
   }
})
module.exports = router;