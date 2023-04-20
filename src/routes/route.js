const express = require('express');
const lodash=require('lodash')
const greet=require('../logger/logger.js');
const info=require('../util/helper.js');
const str1=require('../validator/formatter.js');


const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    // //problem 1
    // greet.welcome();
    // //problem 2
    // info.printDate();
    // info.printMonth();
    // info.getBatchInfo();
    // //problem 3
    // str1.rmsp();
    // str1.toLowerCase();
    // str1.toUpperCase();
    // //problem 4
    // let monthNames=['January','February','March','April','May','June','July','August','September','October','November','December'];
    // console.log(lodash.chunk(monthNames,4));
    // let arrodd=[1,3,5,7,9,11,13,15,17,19];
    // console.log(lodash.tail(arrodd));
    // let a=[1,2,2,2,2,3,3];
    // let b=[2,2,3,3,4];
    // let c=[1,2,2,4,5];
    // let d=[1,2,3,3,4];
    // let e=[1,2,2,2,2,3];
    // console.log(lodash.union(a,b,c,d,e));
    let objarr=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];
    console.log(lodash.fromPairs(objarr));
});

module.exports = router;