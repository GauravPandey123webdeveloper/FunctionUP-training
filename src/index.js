const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( function (req, res, next) {
     var currentdate = new Date();
     var datetime = currentdate.getDate() + " "+ (currentdate.getMonth()+1) + " " + currentdate.getFullYear() + " ,"+ currentdate.getHours() + ":"+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
     let ip= req.ip
     let url= req.originalUrl
     console.log(`${datetime},${ip}, ${url}`)
     next() 
    }
    )

app.use('/', route);
app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
