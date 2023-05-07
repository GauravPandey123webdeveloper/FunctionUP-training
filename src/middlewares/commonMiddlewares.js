const validHeaders = function(req, res, next) {
let isFreeAppUser = req.header('isFreeAppUser');
console.log(isFreeAppUser)
if (isFreeAppUser==undefined) {
    res.send({ error: `Missing mandatory header: isFreeAppUser` });
  }        
 next()

}
module.exports.validHeaders = validHeaders;
