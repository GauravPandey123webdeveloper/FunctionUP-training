const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
//problem 1
router.get('/movies', function (req, res) {
    res.send(['Doctor strange','Iron man', 'Bhool Bhulyia','kabhi khushi kabhi gum']);
});
//problem 2 + problem 3
router.get('/movies/:indexNumber',function(req,res){
    let movarr=['Doctor strange','Iron man', 'Bhool Bhulyia','kabhi khushi kabhi gum'];
    let indx=req.params.indexNumber;
    if(indx<movarr.length-1&&indx>=0){
        res.send(movarr[indx]);
    }
    else{
        res.send("Enter the valid index ");
    } 
});
router.get('/films', function (req, res) {
    let filmsarr=[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }];     
       res.send(filmsarr);
});

router.get('')
module.exports = router;