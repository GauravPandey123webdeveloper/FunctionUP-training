const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common')

router.get('/test-me', function (req, res) {
    res.send('This should be working!')
});

router.get('/test-you', function (req, res) {
    console.log('This is the constant I created', commonFile.name)
    res.send('Hello there, welcome to this application!')
});


module.exports = router;